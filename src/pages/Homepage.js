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
        {/* Set the SVG to take full width on xs to sm, 8 columns on md, and 6 columns on lg screens */}
        <Col xs={12} md={8} lg={6} className="mx-auto">
          <HeroSvg className="w-100" />
          <h2 className="text-end me-auto">
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
      <Row>
        <AboutSection />
      </Row>
      <Row>
        <SkillsSection />
      </Row>
    </Container>
  );
};

export default Homepage;
