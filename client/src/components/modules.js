import { Container, Row, Col } from 'react-bootstrap';
import '../css/dashboard.style.css';
import SideNav1 from './SideNav1.js';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import SubContainer from './SubContainer';
import Notes from './Notes/Notes';
import AppData from './AppData';

function Dashboard(props) {
  const showSideNav = false;
  return (
        <Row >
            <Col sm={2} style={{padding:"10px"}}> <SideNav1 /></Col>
            <Col className="maincontainerBox">
                {(props.type === 'qna') ? <AppData/> :
                 (props.type === 'notes') ? <Notes/> : <SubContainer/>}
            </Col>
        </Row >
  );
}

export default Dashboard;