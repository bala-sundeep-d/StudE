/**
 * @author Nikunj Goenka
 * @email nikunjgoenka@dal.ca
 * @create date 2021-03-21 06:30:08
 * @modify date 2021-04-03 21:04:54
 * @desc Techers Comments Component
 */
import React, { useState, useEffect } from 'react';
import { Container, Row, Button, Spinner, Form, Col } from 'react-bootstrap';
import './TeacherComment.style.css';
import {
    BsFillAlarmFill,
    BsFillAwardFill,
    BsExclamationTriangleFill,
    BsQuestionSquareFill

} from 'react-icons/bs';
import CommentBox from "./commentBox/CommentBox.component"
import axios from 'axios';
import NotificationToast from '../../notificationToast/NotificationToast.component';

/* React Icons to show Comment Type */
var commentTypeIcon = {
    "TODO": <BsFillAlarmFill />,
    "Award": <BsFillAwardFill />,
    "Notification": <BsExclamationTriangleFill />,
    "Doubt": <BsQuestionSquareFill />,
};

const TeacherComments = () => {

    const [isLoading, setLoading] = useState(true);
    const [allComments, setAllComments] = useState([]);
    const [teacherComment, setTeacherComment] = useState("");
    //const [subjectId, setSubjectId] = useState("");

    // Const for Comment to be saved
    const [studentId, setStudentId] = useState("");
    const [allstudentId, setAllStudentId] = useState([]);
    const [commentType, setCommentType] = useState("");

    const userId = localStorage.getItem("userId");
    const userRole = localStorage.getItem("userRole");

    // to load Student Comments or to load students and subject for teacher
    useEffect(() => {
        if (userRole === "student") {
            const urlToGetAllComments = "/teacherComments/getByStudentId?studentId=" + userId;
            axios.get(urlToGetAllComments).then(response => {
                const comments = response.data;
                setAllComments(comments);
                setLoading(false);
            });
        } else {// this else is for teachers
            // we need Students enrolled in techer's Subject
            const getStudentsByTeacherId = "/users/getStudentByTeacherId?teacherId=" + userId;
            axios.get(getStudentsByTeacherId).then(response => {
                const students = response.data;
                //setSubjectId(students[0].subjectIds[0]);
                const allStudentList = [];
                for (const student of students) {
                    allStudentList.push({
                        id: student._id,
                        name: student.firstName + " " + student.lastName
                    });
                }
                setAllStudentId(allStudentList);
                setLoading(false);
            });
        }
    }, []);

    // When user enter Comment this method is trigered to save data in var "teacherComment"
    const onCommentChange = (e) => {
        setTeacherComment(e.target.value);
    }

    const onStudentChange = (e) => {
        for (const student of allstudentId) {
            if (student.name === e.target.value) {
                setStudentId(student.id);
            }
        }
    }

    const onCommentTypeChange = (e) => {
        setCommentType(e.target.value);
    }
    // This will show spinner until the data have been loaded.
    if (isLoading) {
        return (
            <Container className="TeacherCommentsContainer">
                <Spinner animation="border" role="status" variant="light">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </Container>
        );
    }

    const handleSubmit = async (e) => { // Once the form has been submitted, this function will post to the backend
        e.preventDefault();
        const commentToPost = {
            studentId: studentId,
            comment: teacherComment,
            type: commentType
        }
        axios.post("/teacherComments/addComment", commentToPost).then(response => {
            alert("Comment has been Added");

        });

    }

    if (userRole === "student") {
        return (
            <Row>

                <Row className="ParentTabHeader">
                    <h1>Teacher's Comments</h1>
                </Row>
                <Row className="ParentContentContainer">
                    <Row >
                        {
                            allComments.map((comment, index) =>
                                <CommentBox
                                    key={index}
                                    teacher={comment.teacher.firstName + " " + comment.teacher.lastName + " says: "}
                                    type={commentTypeIcon[comment.type]}
                                    typeText={comment.type}
                                    comment={comment.comment}
                                    date={"On: " + (comment.timestamp.split("T"))[0]}
                                />
                            )
                        }
                    </Row>
                </Row>
            </Row>
        );
    } else {
        return (
            <Row>
                <Row className="ParentTabHeader">
                    <h1>Add New Comment</h1>
                </Row>
                <Row className="ParentContentContainer">
                    <Form onSubmit={handleSubmit} className="CommentForm">
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={4}>Student Name: </Form.Label>
                            <Col sm={8}>
                                <input list="studentNames" type="text" placeholder="Select Student" onChange={onStudentChange} />
                                <datalist id="studentNames" >
                                    {
                                        allstudentId.map(dropDownOptions => (
                                            <option
                                                key={dropDownOptions.id}>
                                                {dropDownOptions.name}
                                            </option>
                                        ))
                                    }
                                </datalist>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Form.Label as="legend" column sm={4}> Type of Comment </Form.Label>
                            <Col sm={8}>
                                <Form.Control as="select" defaultValue="Choose Comment Type" onChange={onCommentTypeChange}>
                                    <option>Choose...</option>
                                    <option>TODO</option>
                                    <option>Notification</option>
                                    <option>Award</option>
                                    <option>Doubt</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row}>
                            <textarea name="textarea" rows="5" placeholder="Enter Comment For Student" onChange={onCommentChange} />
                        </Form.Group>
                        <Form.Group as={Row}>
                            <Col></Col>
                            <Col>
                                <Button type="submit"> Save Comment</Button>
                            </Col>
                            <Col></Col>
                        </Form.Group>
                    </Form>
                </Row>
            </Row>
        );
    }
}

export default TeacherComments;