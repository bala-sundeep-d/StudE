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
                        <Button className="homeButton"><Link to='/home'>StudE</Link></Button>
                    </Col>
                    <Col>
                        <Row className="navButtons">
                            <Col>
                                <Button className="myCoursesButton">
                                    <Link to='/home/courses'>My Courses</Link>
                                </Button>
                            </Col>
                            <Col>
                                <Button className="ParentsViewButton">
                                    <Link to='/home/parentView'>Parents View</Link>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Navbar>
        </Container>
    );
}


export default TopNavbar;
