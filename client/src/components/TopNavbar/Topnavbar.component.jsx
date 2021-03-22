/*
Author : Nikunj Goenka
*/

import React from 'react';
import { Container, Row, Col, Nav, Navbar, Button } from 'react-bootstrap';
import './Topnavbar.style.css';
import { Link } from 'react-router-dom';

function TopNavbar() {
    return (
        <Container>
            <Navbar className="topNavBackground">
                <Row>
                    <Col>
                        <Link to='/home'>
                            <Button className="homeButton"> StudE </Button>
                        </Link>

                    </Col>
                    <Col>
                        <Row className="navButtons">
                            <Col>
                                <Link to='/home/courses'>
                                    <Button className="myCoursesButton">My Courses</Button>
                                </Link>
                            </Col>
                            <Col>
                                <Link to='/home/parentView'>
                                    <Button className="ParentsViewButton">Parents View </Button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Navbar>
        </Container>
    );
}


export default TopNavbar;
