import { Container, Row, Col } from 'react-bootstrap';
import { Route, Switch, Redirect, useLocation } from "react-router-dom";


import TopNavbar from '../topNavbar/Topnavbar.component'
import Logout from '../logout/Logout';
import './Dashboard.style.css'


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
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Dashboard;