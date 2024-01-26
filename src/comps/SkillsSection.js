import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import reactIcon from "../images/skills/react-icon@2x.png";
import bootstrapIcon from "../images/skills/bootstrap-icon@2x.png";
import cssIcon from "../images/skills/css-icon@2x.png";
import htmlIcon from "../images/skills/html-icon@2x.png";
import jsIcon from "../images/skills/js-icon@2x.png";
import nodeIcon from "../images/skills/node-icon@2x.png";
import psIcon from "../images/skills/ps-icon@2x.png";
import xdIcon from "../images/skills/xd-icon@2x.png";
import wordpressIcon from "../images/skills/wordpress-icon@2x.png";
import phpIcon from "../images/skills/php-icon@2x.png";
import mysqlIcon from "../images/skills/mysql-icon@2x.png";
import firebaseIcon from "../images/skills/firebase-icon@2x.png";

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
              src={reactIcon}
              alt="React"
              style={iconStyle}
              className="m-2"
            />
            <img
              src={bootstrapIcon}
              alt="Photoshop"
              style={iconStyle}
              className="m-2"
            />
            <img src={cssIcon} alt="CSS" style={iconStyle} className="m-2" />
            <img src={htmlIcon} alt="HTML" style={iconStyle} className="m-2" />
            <img
              src={jsIcon}
              alt="JavaScript"
              style={iconStyle}
              className="m-2"
            />
            <img
              src={nodeIcon}
              alt="Node.js"
              style={iconStyle}
              className="m-2"
            />
            <img src={phpIcon} alt="PHP" style={iconStyle} className="m-2" />
            <img
              src={mysqlIcon}
              alt="MySQL"
              style={iconStyle}
              className="m-2"
            />
            <img
              src={firebaseIcon}
              alt="Firebase"
              style={iconStyle}
              className="m-2"
            />
            <img
              src={wordpressIcon}
              alt="WordPress"
              style={iconStyle}
              className="m-2"
            />
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
            <img src={xdIcon} alt="React" style={iconStyle} className="m-2" />
            <img
              src={psIcon}
              alt="Photoshop"
              style={iconStyle}
              className="m-2"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SkillsSection;
