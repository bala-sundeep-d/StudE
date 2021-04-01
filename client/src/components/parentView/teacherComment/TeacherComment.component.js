/**
 * @author Nikunj Goenka
 * @email nikunjgoenka@dal.ca
 * @create date 2021-03-21 06:30:08
 * @modify date 2021-03-31 21:32:27
 * @desc Techers Comments Component
 */
import React, { useState, useEffect } from 'react';
import { Container, Row, Button, Spinner } from 'react-bootstrap';
import './TeacherComment.style.css';
import {
    BsFillAlarmFill,
    BsFillAwardFill,
    BsExclamationTriangleFill,
    BsQuestionSquareFill

} from 'react-icons/bs';
import CommentBox from "./commentBox/CommentBox.component"
import axios from 'axios';

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

    useEffect(() => {
        const userId = localStorage.getItem("userId");

        const urlToGetAllComments = "/teacherComments/getByStudentId?studentId=" + userId;

        axios.get(urlToGetAllComments).then(response => {
            const comments = response.data;
            setAllComments(comments);
            setLoading(false);
        });
    }, []);


    if (isLoading) {
        console.log(allComments);
        return (
            <Container className="TeacherCommentsContainer">
                <Spinner animation="border" role="status" variant="light">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </Container>
        );
    }

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
}

export default TeacherComments;