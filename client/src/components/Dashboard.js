import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import TopNavbar from './TopNavbar/topnavbar.component'
import Dictionary from './dictionary/Dictionary';
import Logout from './logout/Logout';
import MainContainer from './MainContainer/MainContainer';


function Dashboard() {
  const showSideNav = false;
  return (
    <div className="App">
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
        <Row>
          <Col>
            <MainContainer />
          </Col>
        </Row>
        <Dictionary/>
      </Container>
    </div>
  );
}

export default Dashboard;