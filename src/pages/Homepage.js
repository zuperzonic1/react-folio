import React, { useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
// import Typed from "react-typed";
import AboutSection from "../comps/AboutSection";
import SkillsSection from "../comps/SkillsSection";
import HomeBanner from "../comps/HomeBanner";
import LogoExplain from "../comps/LogoExplain";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Homepage = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // HomeBanner Animation
    gsap.from("div.align-items-center.row", {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: "power3.out",
    });
  }, []); // Added missing closing parenthesis and semicolon

  return (
    <Container>
      <Row>
        <HomeBanner className="home-banner" />
      </Row>
      <Row>
        <AboutSection className="about-banner" />
      </Row>
      <Row>
        <SkillsSection className="skills-section" />
      </Row>
    </Container>
  );
};

export default Homepage;
