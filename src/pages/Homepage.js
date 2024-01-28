import React from "react";
import { Container, Row } from "react-bootstrap";
// import Typed from "react-typed";
import AboutSection from "../comps/AboutSection";
import SkillsSection from "../comps/SkillsSection";
import HomeBanner from "../comps/HomeBanner";

const Homepage = () => {
  return (
    <Container>
      <Row>
        <HomeBanner />
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
