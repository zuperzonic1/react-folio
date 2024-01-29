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
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </Col>
          <Col className="text-center">
            {" "}
            {/* Centers content horizontally */}
            <h5>Socials</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://github.com/zuperzonic1" target="_blank">
                  Github
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/micheal-felobes-076230173/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </Col>
          <Col className="text-end">
            {" "}
            {/* Aligns content to the right */}
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li>Fill Form</li>
              <li>LinkedIn</li>
              <li>Me@Mfelobes.ca</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
