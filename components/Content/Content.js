import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AboutBlok from '../Bloks/AboutBlok';
import PortfolioBlock from '../Bloks/PortfolioBlok';
import SkillsBlock from '../Bloks/SkillsBlok';
import EmploymentHistoryBlok from '../Bloks/EmploymentHistoryBlok';
import EducationBlok from '../Bloks/EducationBlok';
import OtherExperiences from '../Bloks/OtherExperiences';


export default function Content() {
        return (
          <div>
            <Container fluid='true'>
              <AboutBlok />
            </Container>
            <Container fluid='true'>
              <Row>
                <Col lg><SkillsBlock /></Col>
              </Row>
              <Row>
                <Col lg><PortfolioBlock /></Col>
              </Row>
              <Row>
                <Col lg><EmploymentHistoryBlok /></Col>
              </Row>
              <Row>
                <Col lg><EducationBlok /></Col>
              </Row>
              <Row>
                <Col lg><OtherExperiences /></Col>
              </Row>
            </Container>
          </div>                     
        );
    }