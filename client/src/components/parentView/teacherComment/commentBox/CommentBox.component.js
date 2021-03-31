/*
Author : Nikunj Goenka
*/
import React from 'react';
import { Row, Col, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import { BsFillPersonFill } from 'react-icons/bs';

import './CommentBox.style.css';

import NotificationToast from '../../../notificationToast/NotificationToast.component';

const CommentBox = (props) => {

    return (
        <Row className="CommentBox">
            <Row className="CommentInfoContainer">
                <Col md={1} className="CustomIcon">
                    <BsFillPersonFill />
                </Col>
                <Col className="TeacherName">
                    {props.teacher}
                </Col>
                <OverlayTrigger
                    key="top"
                    placement="top"
                    overlay={
                        <Tooltip id="tooltip-top">
                            <strong> {props.typeText} </strong>
                        </Tooltip>
                    }
                >
                    <Col md={1} className="CustomIcon">
                        {props.type}
                    </Col>
                </OverlayTrigger>
            </Row>
            <Row className="CommentContainer">
                <p>
                    {props.comment}
                </p>
            </Row>
            <Row className="timeStamp">
                <p >{props.date}</p>
            </Row>
        </Row>

    );
}

export default CommentBox;
/*
<Container><Row >
                <Col sm={{ span: '2', offset: '10' }}><Button className='add-button' variant="primary" size="lg">Add Remark </Button>{' '}</Col>
            </Row></Container>



            */