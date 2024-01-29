import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Icons from "../comps/icons";

const SkillsSection = () => {
  const iconClass = "img-fluid h-50 mt-5";

  const webDevelopmentIcons = [
    { src: Icons.react, alt: "React" },
    { src: Icons.bootstrap, alt: "Bootstrap" },
    { src: Icons.css, alt: "CSS" },
    { src: Icons.html, alt: "HTML" },
    { src: Icons.javascript, alt: "JavaScript" },
    { src: Icons.nodejs, alt: "Node.js" },
    { src: Icons.wordpress, alt: "WordPress" },
    { src: Icons.php, alt: "PHP" },
    { src: Icons.mysql, alt: "MySQL" },
    { src: Icons.firebase, alt: "Firebase" },
    { src: Icons.three, alt: "Three.js" },
    { src: Icons.git, alt: "Git" },
  ];

  const designIcons = [
    { src: Icons.photoshop, alt: "Photoshop" },
    { src: Icons.xd, alt: "Adobe XD" },
    { src: Icons.illustrator, alt: "Illustrator" },
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
