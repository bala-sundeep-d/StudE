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
import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect, useParams
} from "react-router-dom";
import NewNotes from './Notes/NewNotes';

const Dashboard = (props) => {
  const courseId = "00";
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
                <Route exact path="/courses/:id" render={(props) => <Module cid={courseId} {...props}/>}/>
                <Route exact path="/courses"render={(props) => <MainContainer cid={courseId} {...props}/>}/>
                <Route exact path="/courses/:id/qna" render={(props) => <Module type="qna" cid={courseId} {...props}/>}/>
                <Route exact path="/courses/:id/notes" render={(props) => <Module type="notes" cid={courseId} {...props}/>}/>
                <Route exact path="/courses/:id/notes/:nid" render={(props) => <Module type="note" {...props}/>}/>
                <Route exact path="/courses/:id/discussions" render={(props) => <Module type="discussions" cid={courseId} {...props}/>}/>
      <Route exact path='/parentView'> <MainContainer type="parent"/></Route>
        </Switch>
          <Dictionary />
        </Container >  
      </div >
    </Router>
  );
}

export default Dashboard;