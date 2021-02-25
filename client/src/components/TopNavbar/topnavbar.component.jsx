import React from 'react';
import { Container, Row, Col, Nav, Navbar, Button } from 'react-bootstrap';
import './topnavbar.style.css';
import { Link } from 'react-router-dom';
class TopNavbar extends React.Component {

    render() {
        return (
            <Container>
                <Row><div className="topColorBorder"></div></Row>
                <Navbar>
                    <Row>
                        <Col>
                            <Button className="homeButton">
                                <Link to='/courses'>StudE</Link>
                                </Button>
                        </Col>
                        <Col>
                            <Row className="navButtons">
                                <Col><Button className="myCoursesButton">
                                    <Link to='/courses'>My Courses</Link>
                                    </Button></Col>
                                <Col><Button className="ParentsViewButton">
                                    <Link to='/parentView'>Parents View</Link>
                                </Button></Col>
                            </Row>
                        </Col>
                    </Row>
                </Navbar>
            </Container>
        );
    }
}
export default TopNavbar;

/*
<Row>
                        <Col sm={6}>
                            <Button> StudE</Button>
                        </Col>
                        <Col sm={6}>
                            <Row>
                                <Col>
                                    <Button>My Courses</Button>
                                </Col>
                                <Col>
                                    <Button>Parents View</Button>
                                </Col>
                            </Row>
                        </Col>
                    </Row> */