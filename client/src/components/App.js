import { Container, Row, Col } from 'react-bootstrap';
import TopNavbar from './TopNavbar/topnavbar.component'
import SideNav from './SideNav';
import Content from './Content';


function App() {
  const showSideNav = false;
  return (
    <div className="App">
      <Container fluid="true">
        <Row>
          <Col>
            <TopNavbar />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
