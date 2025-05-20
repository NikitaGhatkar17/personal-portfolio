import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../styles/Project.css'; 

const projects = [
  {
    title: 'Tic-Tac-Toe Game',
    image: '/images/project1.png', 
    description: 'A simple interactive Tic-Tac-Toe game using HTML, CSS, and JavaScript.',
    link: 'https://gametictactoe01.netlify.app/', 
  },
  {
    title: 'Portfolio Website',
    image: '/images/project2.png',
    description: 'A personal portfolio made with ReactJS and React-Bootstrap.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="project-section">
      <Container>
        <h2 className="section-title">Projects</h2>
        <Row>
          {projects.map((proj, idx) => (
            <Col md={4} lg={4} key={idx} className="mb-4">
              <Card className="project-card">
                <Card.Img variant="top" src={proj.image} />
                <Card.Body>
                  <Card.Title>{proj.title}</Card.Title>
                  <Card.Text>{proj.description}</Card.Text>
                  <Button
                    variant="dark"
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
