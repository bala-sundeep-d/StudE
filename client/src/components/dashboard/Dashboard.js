import { Container, Row, Col } from 'react-bootstrap';
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import './Dashboard.style.css'
import TopNavbar from '../topNavbar/Topnavbar.component'
import Logout from '../logout/Logout';
import CoursePage from '../coursePage/CoursePage.component';

function Dashboard() {

    return (
        <div className="App">
            <Container fluid="true">
                <Row>
                    <Col>
                        <TopNavbar />
                    </Col>
                    <Col md={1} className="LogoutButtonCOntainer">
                        <Logout />
                    </Col>
                </Row>
                <Row>
                    <Col className="DashBoardContainer">
                        <div className="trasparentBackground" >
                            <Switch>
                                <Route exact path='/home' >
                                    <Redirect to="/home/courses" />
                                </Route>

                                <Route path="/Home/courses/:courseId"> <CoursePage /></Route>
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Dashboard;