// src/components/Skills.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Skills.css'; 

const skills = [
  { name: 'HTML', logo: '/images/html.png' },
  { name: 'CSS', logo: '/images/css.png' },
  { name: 'JavaScript', logo: '/images/js.png' },
  { name: 'React', logo: '/images/react.png' },
  { name: 'Bootstrap', logo: '/images/bootstrap.png' },
  { name: 'MongoDB', logo: '/images/mongodb.png' },
  { name: 'Node.js', logo: '/images/node.png' },
  { name: 'Express.js', logo: '/images/express.png' },
];

function Skills() {
  return (
    <section className="skills-section py-5" id="skills">
      <Container>
        <h2 className="text-center mb-5">Skills</h2>
        <Row className="justify-content-center">
          {skills.map((skill, idx) => (
            <Col key={idx} xs={6} sm={4} md={3} className="mb-4 d-flex justify-content-center">
              <Card className="skill-card text-center">
                <Card.Img variant="top" src={skill.logo} className="skill-logo" />
                <Card.Body>
                  <Card.Text>{skill.name}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
