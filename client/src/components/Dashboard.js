import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import TopNavbar from './TopNavbar/topnavbar.component'
import Dictionary from './dictionary/Dictionary';
import Logout from './logout/Logout';
import MainContainer from './MainContainer/MainContainer';
import ParentView from './parent-view/parentview.component';
import CourseContent from './CourseContent/CourseContent'
import '../css/dashboard.style.css';
import AppData from './AppData';
import SideNav1 from './SideNav1.js';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";

function Dashboard() {
  const showSideNav = false;
  return (
    <Router>
      <div className="app">
        <Container fluid="true" >
          <Row>
            <Col>
              <TopNavbar />
            </Col>
            <Logout />
          </Row>
          <Row>
            <Col>

            </Col>
          </Row>
          <Row >
            <Col sm={2}> <SideNav1 /></Col>
            <Col className="maincontainerBox">
              <Switch>
                <Route exact path={["/", "/dashboard"]} component={MainContainer} />
                <Route exact path='/appdata'> <AppData /></Route>
                <Route exact path='/parentView'> <ParentView /></Route>
                <Route exact path='/course'> <CourseContent /></Route>
              </Switch>
            </Col>
          </Row >
          <Dictionary />
        </Container >
      </div >
    </Router>
  );
}

export default Dashboard;