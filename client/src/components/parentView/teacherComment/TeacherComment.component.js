import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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

/*
    https://codewithnico.com/react-wait-axios-to-render/
*/
var commentTypeIcon = {
    "TODO": <BsFillAlarmFill />,
    "Award": <BsFillAwardFill />,
    "Notification": <BsExclamationTriangleFill />,
    "Doubt": <BsQuestionSquareFill />,
};

const TeacherComments = () => {
    const [isLoading, setLoading] = useState(true);
    const [allComments, setAllComments] = useState([]);
    const dateOptions = { month: "long", day: "numeric", year: "numeric" };
    useEffect(() => {
        const userId = "6052476ab8c1ca2afcbc791c";
        const urlToGetAllComments = "/teacherComments/getByStudentId?studentId=" + userId;

        axios.get(urlToGetAllComments).then(response => {
            const comments = response.data;
            const tempCommentList = [];
            comments.map((comment) => {
                const urlToGetTeacherName = "/users/getUserById?id=" + comment.teacherId;
                axios.get(urlToGetTeacherName).then(resp => {
                    const newComment = {
                        TeacherName: resp.data.firstName + " " + resp.data.lastName + " says: ",
                        Comment: comment.comment,
                        TypeText: comment.type,
                        Type: commentTypeIcon[comment.type],
                        Date: "On: " + (comment.timestamp.split("T"))[0]
                        /*new Intl.DateTimeFormat("en-GB", dateOptions).format(comment.timestamp)*/
                    }
                    tempCommentList.push(newComment);
                });
            });

            setLoading(false);
            setAllComments(tempCommentList);

        });
    }, []);

    if (isLoading) {
        console.log(allComments);
        return (
            <Container className="TeacherCommentsContainer">
                Loading.....
            </Container>
        );
    }

    return (
        <Container className="TeacherCommentsContainer">
            <Row >
                {
                    allComments.map((content, index) =>
                        <CommentBox
                            key={index}
                            teacher={content.TeacherName}
                            type={content.Type}
                            typeText={content.TypeText}
                            comment={content.Comment}
                            date={content.Date}
                        />
                    )
                }
            </Row>
        </Container>
    );
}

export default TeacherComments;