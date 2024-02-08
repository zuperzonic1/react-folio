import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Footer() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".footer", {
      duration: 1,
      y: 50,
      opacity: 0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".footer",
        start: "top bottom", // Animation starts when the top of the footer hits the bottom of the viewport
      },
    });

    gsap.from(".footer .subtitle-text", {
      duration: 0.5,
      y: 30,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".footer",
        start: "top bottom",
      },
    });

    gsap.from(".footer .list-unstyled li", {
      duration: 0.5,
      y: 20,
      opacity: 0,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".footer",
        start: "top bottom",
      },
    });
  }, []);

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-start">
            <h5 className="subtitle-text">Index</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="footer-link">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col className="text-center">
            <h5 className="subtitle-text">Socials</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://github.com/zuperzonic1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/micheal-felobes-076230173/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </Col>
          <Col className="text-end">
            <h5 className="subtitle-text">Contact Info</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/contact" className="footer-link">
                  Form
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/micheal-felobes-076230173/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:Me@Mfelobes.ca" className="footer-link">
                  Email
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
