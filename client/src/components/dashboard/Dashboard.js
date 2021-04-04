/*
Author : Nikunj Goenka
*/
import { Container, Row, Col } from 'react-bootstrap';
import { Route, Switch, Redirect, useLocation } from "react-router-dom";

import './Dashboard.style.css'
import TopNavbar from '../TopNavbar/Topnavbar.component'
import Logout from '../logout/Logout';
import Subjects from "../subjects/Subjects.component"
import CoursePage from '../coursePage/CoursePage.component';
import ParentView from '../parentView/Parentview.component';
import Dictionary from '../dictionary/Dictionary';
import NotificationToast from '../notificationToast/NotificationToast.component';


function Dashboard() {

    return (
        <div className="App">
            <NotificationToast title="Notifcation" content="Welcome to StudE" type="success" />
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
                                <Route exact path="/Home/courses" render={(props) => <Subjects {...props} />} />
                                <Route path="/Home/courses/:courseId"> <CoursePage /></Route>
                                <Route path="/home/parentView"> <ParentView /> </Route>
                            </Switch>
                        </div>
                    </Col>
                </Row>
                <Dictionary/>
            </Container>
        </div>
    );
}
export default Dashboard;