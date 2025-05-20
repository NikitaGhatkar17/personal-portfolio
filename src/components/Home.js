import React from "react";
import "../styles/Home.css";
import { Button } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Home() {
  return (
    <section
      id="home"
      className="home-section text-center d-flex flex-column justify-content-center align-items-center"
    >
      <h1 className="animated-name">
        Hi, I’m <br />
        <span className="name-effect">Nikita Ghatkar</span>
      </h1>
      <br />
      <h3 className="home-role">Frontend Developer</h3>
      <p className="home-description">
        I love building creative and responsive web applications.
      </p>

      <Button
        variant="outline-light"
        className="download-btn mt-3"
        href="/resume.pdf"
        download
      >
        Download Resume
      </Button>

      {/* Social Icons */}
      <div className="social-icons mt-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/nikita-ghatkar-a03742209"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="icon" />
        </a>
        <a href="mailto:nikitaghatkar97@gmail.com">
          <FaEnvelope className="icon" />
        </a>
      </div>
    </section>
  );
}

export default Home;
