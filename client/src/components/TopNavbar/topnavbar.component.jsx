import React from 'react';
import { Container, Row, Col, Nav, Navbar, Button } from 'react-bootstrap';
import './topnavbar.style.css';

class TopNavbar extends React.Component {

    render() {
        return (
            <Container>
                <Row><div className="topColorBorder"></div></Row>
                <Navbar>
                    <Row>
                        <Col>
                            <Button className="homeButton"> StudE</Button>
                        </Col>
                        <Col>
                            <Row className="navButtons">
                                <Col><Button className="myCoursesButton"> My Courses</Button></Col>
                                <Col><Button className="ParentsViewButton"> Parents View</Button></Col>
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