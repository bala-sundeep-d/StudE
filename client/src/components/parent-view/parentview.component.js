import { Container, Row, Col } from 'react-bootstrap';
import React from 'react';
import './parentview.style.css'
import CommentList from './commentlist/comment-list.component'
export default function ParentView(props) {


    return (
        <Container>
            <Row>
                <CommentList />
            </Row>
        </Container>
    )

}
