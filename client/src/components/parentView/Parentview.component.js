/*
Author : Nikunj Goenka
*/
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Parentview.style.css';
import TeacherComment from "./teacherComment/TeacherComment.component"

const ParentView = () => {

    return (
        <Container className="ParentTabContainer">
            <TeacherComment></TeacherComment>
        </Container>
    )
}

export default ParentView;