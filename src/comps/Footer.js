import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-start">
            <h5>Index</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="footer-link">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="text-center">
            <h5>Socials</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://github.com/zuperzonic1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/micheal-felobes-076230173/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </Col>
          <Col className="text-end">
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/contact" className="footer-link">
                  Form
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/micheal-felobes-076230173/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:Me@Mfelobes.ca" className="footer-link">
                  Email
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
