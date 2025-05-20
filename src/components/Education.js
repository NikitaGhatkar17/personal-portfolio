import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Education.css'; 

function Education() {
  return (
    <section id="education" className="education-section py-5">
      <Container>
        <h2 className="text-center mb-5">Education</h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="mb-4 edu-card">
              <Card.Body>
                <Card.Title>Bachelor of Engineering</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Computer Science – Savitribai phule pune University
                </Card.Subtitle>
                <Card.Text>2020 - 2023</Card.Text>
              </Card.Body>
            </Card>

            <Card className="mb-4 edu-card">
              <Card.Body>
                <Card.Title>Diploma in Computer Engineering</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Maharashtra State Board of Technical Education
                </Card.Subtitle>
                <Card.Text>2017 - 2020</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Education;