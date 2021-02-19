import React from 'react';
import { Navbar, Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import {PersonCircle} from 'react-bootstrap-icons';
import Brand from './Brand';
import NavList from './NavList';
import '../css/MainNav.css';

class MainNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuProps: {
                height: "68px"
            },
            title: (<PersonCircle size={25}/>)
        }
    }

    render() {
        return (
            <Navbar bg="dark" expand="lg">
            <Navbar.Brand href="#home">
                <Brand/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <NavList/>
                <Nav>
                <Dropdown >
                <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: "transparent", border:"0px", color: "white"}}>
                    <PersonCircle size={25}/>
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdown-menu-right">
                    <Dropdown.Item href="/logout">Logout</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default MainNav;