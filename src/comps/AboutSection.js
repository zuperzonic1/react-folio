import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AboutImg from "../images/aboutImg.png";
// import AboutMeImage from "../images/about-me-image.png"; // Replace with path to your image

const AboutSection = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6} className="text-white">
          <h1 className="mb-3">ABOUT ME</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </Col>
        <Col md={6} className="text-center">
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
