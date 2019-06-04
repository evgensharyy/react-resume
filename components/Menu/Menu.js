import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        }

    render(){
        return (
                    <Navbar bg="dark" variant="dark">
                        <LinkContainer to="/"><Navbar.Brand href="/">Yevhen Sharyi</Navbar.Brand></LinkContainer>
                        <Nav className="mr-auto">
                           <LinkContainer to="/"><Nav.Link href="/">Home</Nav.Link></LinkContainer>
                           <LinkContainer to="/features"><Nav.Link href="/features">Features</Nav.Link></LinkContainer>
                           <LinkContainer to="/pricing"><Nav.Link href="/pricing">Pricing</Nav.Link></LinkContainer>
                        </Nav>
                    </Navbar>                     
        );
    }
}

export default Menu;