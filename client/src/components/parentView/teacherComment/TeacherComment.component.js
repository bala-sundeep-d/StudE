import React, { useState, useEffect } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Axios from 'axios';
import './TeacherComment.style.css';
import {
    BsFillPersonFill,
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

        console.log(userId);

        //const userId = "6052476ab8c1ca2afcbc791c";
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
        <Container className="TeacherCommentsContainer">
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
        </Container>
    );
}

export default TeacherComments;