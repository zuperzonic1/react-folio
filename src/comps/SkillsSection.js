import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import placeholderImg from "../images/skills/react-logo.png"; // Make sure this path is correct

const SkillsSection = () => {
  const iconStyle = { width: "70px", height: "auto" };

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">SKILLS</h1> {/* Text centered */}
      <Row className="mb-3">
        <Col xs={12} className="text-center text-md-start">
          {" "}
          {/* Text center on xs, text start on md */}
          <h5>WEB DEVELOPMENT</h5>
          <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
            {/* Repeated placeholder images for demonstration */}
            <img
              src={placeholderImg}
              alt="React"
              style={iconStyle}
              className="m-2"
            />
            <img
              src={placeholderImg}
              alt="Photoshop"
              style={iconStyle}
              className="m-2"
            />
            <img
              src={placeholderImg}
              alt="Photoshop"
              style={iconStyle}
              className="m-2"
            />
            <img
              src={placeholderImg}
              alt="Photoshop"
              style={iconStyle}
              className="m-2"
            />
            <img
              src={placeholderImg}
              alt="Photoshop"
              style={iconStyle}
              className="m-2"
            />
            <img
              src={placeholderImg}
              alt="Photoshop"
              style={iconStyle}
              className="m-2"
            />
            {/* ... other icons */}
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={12} className="text-center text-md-start">
          {" "}
          {/* Text center on xs, text start on md */}
          <h5>DESIGN</h5>
          <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
            {/* Replace these placeholders with your actual skill icons */}
            <img
              src={placeholderImg}
              alt="Photoshop"
              style={iconStyle}
              className="m-2"
            />
            <img
              src={placeholderImg}
              alt="Photoshop"
              style={iconStyle}
              className="m-2"
            />
            <img
              src={placeholderImg}
              alt="Photoshop"
              style={iconStyle}
              className="m-2"
            />
            {/* ... other icons */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SkillsSection;
