import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Earth3D from "../comps/Earth3D";

const AboutSection = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center ">
        <Col md={6} className="text-white mb-5">
          <h1 className="mb-3  subtitle-text">ABOUT ME</h1>
          <p className="text-color">
            Hello! I am a front-end developer with a passion for creating
            beautiful and functional websites. I have experience with HTML, CSS,
            JavaScript, React, Firebase, and more. I am extremely passionate
            about learning and working with new technologies and I am always on
            the lookout for new projects to work on. make this the first para in
            my resume,
          </p>
          <div className="d-flex align-items-center">
            <Link to="/projects">
              <button className="btn btn-primary mt-2 me-2">
                View My Projects
              </button>
            </Link>
            <a
              href="https://staging.mfelobes.ca/toDownload/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-secondary mt-2">Resume</button>
            </a>
          </div>
        </Col>

        <Col md={6}>
          <Earth3D />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
