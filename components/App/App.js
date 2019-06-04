import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from '../Menu/Menu';

class App extends React.Component {
    constructor(props) {
        super(props);
        }

    render(){
        return (
            <Router>
                <div>
                    <Header />
                    <Content />
                </div>
            </Router>                     
        );
    }
}

function Header() {
    return (
            <Navbar />
    );
  }

function Content() {
    return (
        <Container>
            <Row>
                <Col sm={8}>sm=8</Col>
                <Col sm={4}>sm=4</Col>
            </Row>
            <Row>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
            </Row>
        </Container>
    );
  }

export default App;