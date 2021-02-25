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
import NewNotes from './Notes/NewNotes';
import Discussions from './Discussions/Discussions';

function Dashboard(props) {
  const showSideNav = false;
  return (
        <Row >
            <Col sm={2} style={{padding:"10px"}}> <SideNav1 cid={props.match.params.id}/></Col>
            <Col className="maincontainerBox">
                {(props.type === 'qna') ? <AppData/> :
                 (props.type === 'notes') ? <Notes/> :
                 (props.type === 'note') ? <NewNotes title={props.location.state.title} body={props.location.state.body}/> :
                 (props.type === 'new') ? <NewNotes/> :
                 (props.type === 'discussions') ? <Discussions/> : <SubContainer />}
            </Col>
        </Row >
  );
}

export default Dashboard;