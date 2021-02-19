import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../css/NavList.css';

function NavList () {
    const navListProps = {
        marginLeft:"auto",
        marginRight:"auto",
        width: "40%",
    }

    const listItems = [
        { link: '/', title: 'Home',color: '#00cc44' },
        { link: '/dairy', title: 'Dairy',color: '#1853ff' },
        { link: '/stats', title: 'Statistics',color: '#ff751a' },
        { link: '/help', title: 'Help',color: '#ffff33' },
    ];

    const listItemProps = {
        border: "1px solid black",
        marginLeft: "2px",
        marginRight: "2px",
        textTransform: "uppercase",
        fontWeight: "bold"
    }

    return (
        <Nav justify  defaultActiveKey="/" style={navListProps}>
            {
                listItems.map(item => {
                    return (
                        <Nav.Item style={{...listItemProps, ...{background: item.color}}}>
                        <Nav.Link href={item.href}>
                            {item.title}
                        </Nav.Link>
                    </Nav.Item>
                    )
                })
            }
        </Nav>
    );
}

export default NavList;