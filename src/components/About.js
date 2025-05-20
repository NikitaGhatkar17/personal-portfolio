import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../styles/About.css'; 

function About() {
  return (
    <section id="about" className="about-section py-1">
      <Container>
      <h2 className="text-center mb-5">About Me</h2>
        <Row className="justify-content-center text-center">
          <Col md={12}>
            <div className="image-wrapper">
              <Image
                src="/images/myphoto.jpg"
                className="about-img"
                alt="Profile"
              />
            </div>
          </Col>

          <Col md={12}>
            <h3 className="my-name">Nikita Ghatkar</h3>
          </Col>

          <Col md={10}>
            <p className="about-text">
            I'm a highly motivated Frontend Developer With a strong foundation in HTML, CSS, and JavaScript, I love bringing ideas to life in the browser. I specialize in technologies like React, JavaScript, and Bootstrap, and enjoy transforming complex problems into intuitive designs.
            </p>
          </Col>
        </Row>
        
      </Container>
    </section>
    
  );
}

export default About;