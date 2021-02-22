import React from 'react';

import { Nav } from 'react-bootstrap';
import '../css/SideNav1.css';

class SideNav1 extends React.Component {
    render () {
        return (
           
                    <Nav className= "app-side-nav flex-column"  defaultActiveKey="/home" >
  <Nav.Link className= "app-side-nav-link" href="/home" style = {{backgroundColor: '#edbf47'}}>Q & A</Nav.Link>
  <hr className="app-side-nav-hr"/>
  <Nav.Link className= "app-side-nav-link" eventKey="link-1" style = {{backgroundColor: '#007bff'}}>Notes</Nav.Link>
  <hr className="app-side-nav-hr"/>
  <Nav.Link className= "app-side-nav-link" eventKey="link-2" style = {{backgroundColor: '#6fc191'}}>Quizzes</Nav.Link>
  <hr className="app-side-nav-hr"/>
  <Nav.Link className= "app-side-nav-link" eventKey="link-2" style = {{backgroundColor: '#ff5050'}}>Subject Report</Nav.Link>
  <hr className="app-side-nav-hr"/>
</Nav>
                
        );
    }
}

export default SideNav1;