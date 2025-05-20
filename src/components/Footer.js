import React from 'react';
import { Container } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <Container className="text-center">
        <div className="footer-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="mailto:your@email.com"><FaEnvelope /></a>
        </div>
        <p className="footer-text">© 2025 NG. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
