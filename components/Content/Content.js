import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PortfolioBlock from '../Bloks/PortfolioBlok';
import SkillsBlock from '../Bloks/SkillsBlok';
import EmploymentHistoryBlok from '../Bloks/EmploymentHistoryBlok';
import EducationBlok from '../Bloks/EducationBlok';
import OtherExperiences from '../Bloks/OtherExperiences';


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
                <Col sm><EmploymentHistoryBlok /></Col>
              </Row>
              <Row>
                <Col sm><EducationBlok /></Col>
              </Row>
              <Row>
                <Col sm><OtherExperiences /></Col>
              </Row>
            </Container>                     
        );
    }