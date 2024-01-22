import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-start">
            {" "}
            {/* Aligns content to the left */}
            <h5>Index</h5>
            <ul className="list-unstyled">
              <li>About</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col className="text-center">
            {" "}
            {/* Centers content horizontally */}
            <h5>Socials</h5>
            <ul className="list-unstyled">
              <li>Github</li>
              <li>LinkedIn</li>
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
