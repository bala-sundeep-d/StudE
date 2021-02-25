import React from 'react';
import AppData from './AppData.js'
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../css/SideNav1.css';


const SideNav1 = (props) => {
    const location = useLocation();
        return (
           
                    <Nav className= "app-side-nav flex-column" >
  <Nav.Link className= "app-side-nav-link" href={`/courses/${props.cid}/qna`} style = {{backgroundColor: '#edbf47'}}>Q and A</Nav.Link>
  <hr className="app-side-nav-hr"/>
  <Nav.Link className= "app-side-nav-link" href={`/courses/${props.cid}/notes`}  eventKey="link-1" style = {{backgroundColor: '#007bff'}}>Notes</Nav.Link>
  <hr className="app-side-nav-hr"/>
  <Nav.Link className= "app-side-nav-link" href={`/courses/${props.cid}/discussions`}  eventKey="link-1" style = {{backgroundColor: '#FF7F50'}}>Discussions</Nav.Link>
  <hr className="app-side-nav-hr"/>
  <Nav.Link className= "app-side-nav-link" eventKey="link-2" style = {{backgroundColor: '#6fc191'}}>Quizzes</Nav.Link>
  <hr className="app-side-nav-hr"/>
  <Nav.Link className= "app-side-nav-link" eventKey="link-2" style = {{backgroundColor: '#ff5050'}}>Subject Report</Nav.Link>
  <hr className="app-side-nav-hr"/>
</Nav>
                
        );
}

export default SideNav1;