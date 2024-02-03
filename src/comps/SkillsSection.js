import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Icons from "../comps/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useEffect } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const SkillsSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  // Refs for elements
  const titleRef = useRef(null);
  const webDevRef = useRef(null);
  const designRef = useRef(null);

  useEffect(() => {
    // Common animation setup
    const animateIn = (element, opts = {}) => {
      gsap.from(element, {
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          toggleActions: "play none none none",
          ...opts.scrollTrigger,
        },
        opacity: 0,
        y: opts.y || 50,
        x: opts.x || 0,
        stagger: 0.2,
        ease: "power2.out",
        duration: 1,
        ...opts.animation,
      });
    };

    // Animate the section title using the ref
    if (titleRef.current) {
      animateIn(titleRef.current, {
        y: -50, // Adjust as desired
        animation: {
          opacity: 0.5, // Start with a lower opacity for a fade-in effect
          ease: "power1.inOut", // A slightly different ease for distinction
          duration: 1.5, // A bit longer to draw attention
        },
      });
    }

    // Animations for WEB DEVELOPMENT and DESIGN texts and icons
    if (webDevRef.current) {
      const webDevText = webDevRef.current.previousElementSibling;
      animateIn(webDevText, { animation: { x: -50 } });

      animateIn(webDevRef.current.children);
    }

    if (designRef.current) {
      const designText = designRef.current.previousElementSibling;
      animateIn(designText, { animation: { x: -50 } });

      animateIn(designRef.current.children);
    }
  }, []);

  // add margin top to the icons
  const iconClass = "img-fluid mt-3";

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
      // Use smaller column sizes and add custom class for additional control
      <Col
        key={index}
        xs={4}
        sm={2}
        lg={1}
        className="d-flex justify-content-center align-items-center px-1"
      >
        <OverlayTrigger
          key={index}
          placement="top"
          overlay={<Tooltip id={`tooltip-${index}`}>{icon.alt}</Tooltip>}
        >
          <img
            src={icon.src}
            alt={icon.alt}
            className={iconClass}
            style={{ maxWidth: "60px", maxHeight: "60px" }}
          />
        </OverlayTrigger>
      </Col>
    ));

  return (
    <Container fluid className="my-5 px-0">
      <h1
        ref={titleRef}
        className="subtitle-text mb-4 text-center text-md-start"
      >
        SKILLS
      </h1>
      <Row className="mb-3 justify-content-center justify-content-md-start">
        <Col xs={12} className="text-center text-md-start">
          <h5 className="text-color">WEB DEVELOPMENT</h5>
          <Row
            ref={webDevRef}
            className="justify-content-center justify-content-md-start"
          >
            {renderIcons(webDevelopmentIcons)}
          </Row>
        </Col>
      </Row>
      <Row className="justify-content-center justify-content-md-start">
        <Col xs={12} className="text-center text-md-start">
          <h5 className="text-color mt-3">DESIGN</h5>
          <Row
            ref={designRef}
            className="justify-content-center justify-content-md-start"
          >
            {renderIcons(designIcons)}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default SkillsSection;
