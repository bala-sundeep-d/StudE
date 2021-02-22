import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import TopNavbar from './TopNavbar/topnavbar.component'
import Dictionary from './dictionary/Dictionary';
import Logout from './logout/Logout';
import MainContainer from './MainContainer/MainContainer';

import AppData from './AppData';
import SideNav1 from './SideNav1.js';

function Dashboard() {
  const showSideNav = false;
  return (
    <div className="app">
      <Container fluid="true">
        <Row>
          <Col>
            <TopNavbar />
          </Col>
        </Row>
        <Row>
          <Col>
            <Logout/>
          </Col>
        </Row>
        <Row > 
          <Col md={2} style={{margin: '0px', padding: '0px'}}>
          <SideNav1/></Col>
        </Row>
        <Dictionary/>
      </Container>
    </div>
  );
}

export default Dashboard;