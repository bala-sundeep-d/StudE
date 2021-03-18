import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './TeacherComment.style.css';
import {
    BsFillPersonFill,
    BsFillAlarmFill,
    BsFillAwardFill,
    BsExclamationTriangleFill,
    BsQuestionSquareFill

} from 'react-icons/bs';
import CommentBox from "./commentBox/CommentBox.component"

var commentTypeIcon = {
    "Alert": <BsFillAlarmFill />,
    "Award": <BsFillAwardFill />,
    "Notify": <BsExclamationTriangleFill />,
    "Doubt": <BsQuestionSquareFill />,
};
var bigText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
const Diary = () => {

    const content = [
        {
            TeacherName: "Teacher - A",
            Comment: 'Comment - 1' + bigText,
            TypeText: "TODO",
            Type: commentTypeIcon["Alert"],
            Date: "1st April 2021"
        },
        {
            TeacherName: "Teacher - B",
            Comment: 'Comment - 2' + bigText,
            TypeText: "Award",
            Type: commentTypeIcon["Award"],
            Date: "19th March 2021"
        },
        {
            TeacherName: "Teacher - C",
            Comment: 'Comment - 3' + bigText,
            TypeText: "Notification",
            Type: commentTypeIcon["Notify"],
            Date: "24th Feb 2021"
        },
        {
            TeacherName: "Teacher - D",
            Comment: 'Comment - 4' + bigText,
            TypeText: "Doubt",
            Type: commentTypeIcon["Doubt"],
            Date: "4th January 2021"
        }
    ]

    return (
        <Container className="TeacherCommentsContainer">
            <Row >
                {
                    content.map((content, index) =>
                        <CommentBox
                            key={index}
                            teacher={content.TeacherName}
                            type={content.Type}
                            commentType={content.TypeText}
                            comment={content.Comment}
                            date={content.Date}
                        />
                    )
                }
            </Row>
        </Container>
    );
}

export default Diary;
/*
<Container><Row >
                <Col sm={{ span: '2', offset: '10' }}><Button className='add-button' variant="primary" size="lg">Add Remark </Button>{' '}</Col>
            </Row></Container>



            */