import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class NavMenu extends React.Component {
    constructor(props) {
        super(props);
        }

    render(){
        return (
                    <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Yevhen Sharyi</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/"><Nav.Link href="/">Home</Nav.Link></LinkContainer>
                        <LinkContainer to="/contacts"><Nav.Link href="/contacts">Contacts</Nav.Link></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
                </Navbar>   
        );
    }
}

export default NavMenu;