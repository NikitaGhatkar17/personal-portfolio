import React, { useState } from "react";
import { Container, Row, Col, Form, Button, InputGroup, Alert } from "react-bootstrap";
import { FaUser, FaEnvelope, FaComment } from "react-icons/fa";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [alert, setAlert] = useState({ show: false, message: "", variant: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      setAlert({ show: true, message: "Please fill in all fields.", variant: "danger" });
    } else if (!validateEmail(email)) {
      setAlert({ show: true, message: "Please enter a valid email address.", variant: "danger" });
    } else {
      setAlert({ show: true, message: "Message sent successfully!", variant: "success" });
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="section-title">Contact Me</h2>
        <Row className="justify-content-center">
          <Col md={7}>
            {alert.show && (
              <Alert variant={alert.variant} onClose={() => setAlert({ show: false })} dismissible>
                {alert.message}
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label className="mb-1">Enter your name</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaUser /></InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label className="mb-1">Enter your email</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaEnvelope /></InputGroup.Text>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label className="mb-1">Enter your message</Form.Label>
                <InputGroup>
                  <InputGroup.Text><FaComment /></InputGroup.Text>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={4}
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Form.Group>

              <Button variant="primary" type="submit" className="send-btn">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
