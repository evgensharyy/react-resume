import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PortfolioBlock from '../Bloks/PortfolioBlok';
import SkillsBlock from '../Bloks/SkillsBlok';


export default function SimpleCard() {
        return (
            <Container>
              <Row>
                <Col sm><PortfolioBlock /></Col>
              </Row>
              <Row>
                <Col sm><SkillsBlock /></Col>
              </Row>
              <Row>
                <Col sm></Col>
              </Row>
            </Container>                     
        );
    }