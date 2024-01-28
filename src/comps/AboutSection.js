import React from "react";
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
            JavaScript, React, Node.js, Express, MongoDB, and more. I am
            currently looking for a full-time position as a web developer.
          </p>
        </Col>
        <Col md={6}>
          <Earth3D />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
