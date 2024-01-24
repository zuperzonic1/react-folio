import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutImg from "../images/aboutImg.png"; // Ensure the path to your image is correct

const AboutSection = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6} className="text-white">
          <h1 className="mb-3 text-color">ABOUT ME</h1>
          <p className="text-color">
            As a dynamic Web Developer based in Toronto, Michael Felobes
            combines technical prowess with creative flair, bringing life to web
            applications with an eye for detail and functionality. Educated at
            Durham College and Fraser International College, Michael's expertise
            spans across React, Node.js, database management, and Adobe Creative
            Suite, evidenced in diverse projects from the interactive
            Musical-Playground to the comprehensive TWDB and the multifaceted
            Streamer Marketplace. Known for his problem-solving skills and
            commitment to modern web standards, Michael is an asset to any
            project, ready to innovate and excel in the ever-evolving digital
            landscape.
          </p>
        </Col>
        <Col md={6} className="text-md-end text-center">
          {" "}
          {/* Right align on md and larger screens, center on smaller */}
          <img
            src={AboutImg}
            alt="About Me"
            style={{ maxWidth: "70%" }}
            className="img-fluid"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
