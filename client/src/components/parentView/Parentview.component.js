import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Parentview.style.css';
import TeacherComment from "./teacherComment/TeacherComment.component"

const ParentView = () => {

    return (
        <Container className="ParentTabContainer">
            <h1 className="ParentTabHeader">Teacher's Comments</h1>
            <Row className="ParentContentContainer">
                <TeacherComment></TeacherComment>
            </Row>
        </Container>
    )
}

export default ParentView;