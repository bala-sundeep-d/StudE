import { Container, Row, Col } from 'react-bootstrap';
import MainNav from './MainNav';
import SideNav from './SideNav';
import Content from './Content';


function App() {
  const showSideNav = false;
  return (
    <div className="App">
        <Container fluid="true">
          <Row>
            <Col>
              <MainNav/>
            </Col>
          </Row>
          <Row>
            <Col>
              { showSideNav && <SideNav/>}
              <Content/>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
