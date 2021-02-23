import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import './comment-list.style.css';
import CommentBox from './comment-box.component'

export default function CommentList(props) {


    return (
        <Container >
            <h1>Teacher's Comment</h1>
            <CommentBox teacherName="Gabriella Mosquera" commentDate=" 24th Feb 2021" />
            <CommentBox teacherName="Professor X" commentDate=" 16th Feb 2021" />
            <CommentBox teacherName="Saurabh" commentDate=" 4th Feb 2021" />
            <CommentBox teacherName="Gabriella Mosquera" commentDate=" 31st January 2021" />
            <CommentBox teacherName="Professor X" commentDate=" 28th January 2021" />
            <CommentBox teacherName="Saurabh" commentDate=" 8th January 2021" />

        </Container>
    )

}