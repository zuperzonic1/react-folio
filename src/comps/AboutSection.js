import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Earth3D from "../comps/Earth3D";

const AboutSection = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center ">
        <Col md={6} className="text-white">
          <h1 className="mb-3 text-color">ABOUT ME</h1>
          <p className="text-color">
            Hello! I am a full-stack web developer with a passion for creating
            beutiful and functional websites. I have experience with HTML, CSS,
            JavaScript, React, Node.js, Firebase, and more. I am currently
            looking for a full-time position as a web developer.
          </p>
          <Link to="/projects">
            <button className="btn btn-primary mt-3 me-2">
              View My Projects
            </button>
          </Link>
          <a
            href="https://statik.mfelobes.ca/toDownload/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="btn btn-secondary mt-3">Resume</button>
          </a>
        </Col>
        <Col md={6}>
          <Earth3D />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
