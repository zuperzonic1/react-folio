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
  const iconClass = "img-fluid h-50 mt-5";

  const webDevelopmentIcons = [
    { src: reactIcon, alt: "React" },
    { src: bootstrapIcon, alt: "Bootstrap" },
    { src: cssIcon, alt: "CSS" },
    { src: htmlIcon, alt: "HTML" },
    { src: jsIcon, alt: "JavaScript" },
    { src: nodeIcon, alt: "Node.js" },
    { src: wordpressIcon, alt: "WordPress" },
    { src: phpIcon, alt: "PHP" },
    { src: mysqlIcon, alt: "MySQL" },
    { src: firebaseIcon, alt: "Firebase" },
  ];

  const designIcons = [
    { src: psIcon, alt: "Photoshop" },
    { src: xdIcon, alt: "Adobe XD" },

    // ... add other design icons here
  ];

  const renderIcons = (iconsArray) =>
    iconsArray.map((icon, index) => (
      <Col key={index} xs={6} md={2} className="d-flex justify-content-center">
        <img src={icon.src} alt={icon.alt} className={iconClass} />
      </Col>
    ));

  return (
    <Container className="my-5">
      <h1 className="text-color mb-4">SKILLS</h1>
      <Row className="mb-3">
        <Col xs={12}>
          <h5 className="text-color">WEB DEVELOPMENT</h5>
          <Row className="justify-content-center justify-content-md-start">
            {renderIcons(webDevelopmentIcons)}
          </Row>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <h5 className="text-color mt-3">DESIGN</h5>
          <Row className="justify-content-center justify-content-md-start">
            {renderIcons(designIcons)}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SkillsSection;
