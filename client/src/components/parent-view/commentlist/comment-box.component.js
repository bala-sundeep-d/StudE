import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import './comment-list.style.css';

export default function CommentBox(props) {

    return (
        <Row className="commentBox">
            <Row className="TeacherName"> {props.teacherName} says that:</Row>
            <Row className="Comment">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Row>
            <Row className="timeStampDiv">On {props.commentDate}</Row>
        </Row>
    );
}