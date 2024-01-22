import React from "react";
import { ReactComponent as HeroSvg } from "../images/HeroBanner.svg";
import { Container, Row, Col } from "react-bootstrap";
import Typed from "react-typed";
import AboutSection from "../comps/AboutSection";
import SkillsSection from "../comps/SkillsSection";

const Homepage = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <HeroSvg className="w-100" />
          <h2 className="text-end">
            {" "}
            A{" "}
            <Typed
              strings={["WEB DEVELOPER", "UI/ UX DESIGNER"]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
          </h2>
        </Col>
      </Row>
      <AboutSection />
      <SkillsSection />
    </Container>
  );
};

export default Homepage;
