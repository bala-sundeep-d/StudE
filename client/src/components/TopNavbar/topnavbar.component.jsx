import React from 'react';
import { Container, Row, Col, Navbar, Button } from 'react-bootstrap';
import './topnavbar.style.css';

class TopNavbar extends React.Component {

    render() {
        return (
            <Container>
                <div className="topColorBorder"></div>
                <Navbar bg="light" expand="lg">
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
                    </Row>
                </Navbar>
            </Container>
        );
    }
}
export default TopNavbar;