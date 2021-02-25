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
import Module from './modules';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect, useParams
} from "react-router-dom";

function Dashboard() {
  const {courseId} = useParams();
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
          <br/>
      <Switch>
                <Route exact path="/courses/:id">
                  <Module/></Route>
                <Route exact path="/courses" component={MainContainer}/>
                <Route exact path="/courses/:id/qna">
                  <Module type="qna"/></Route>
                  <Route exact path="/courses/:id/notes">
                  <Module type="notes"/></Route>
                  
      <Route exact path='/parentView'> <MainContainer type="parent"/></Route>
        </Switch>
          <Dictionary />
        </Container >  
      </div >
    </Router>
  );
}

export default Dashboard;