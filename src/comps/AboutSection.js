import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Earth3D from "../comps/Earth3D";
import HiroImg from "../assets/hiro.png";
import QRcode from "../assets/QRcode.png";

const AboutSection = () => {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6} className="text-white mb-5">
          <h1 className="subtitle-text">ABOUT ME</h1>
          <p className="text-color">
            Hello! I am a front-end developer with a passion for creating
            beautiful and functional websites. I have experience with HTML, CSS,
            JavaScript, React, Firebase, and more. I am extremely passionate
            about learning and working with new technologies and I am always on
            the lookout for new projects to work on. Hit me up if you have any projects in mind.
          </p>

          <h3 className="subtitle-text">AR Globe <span className="small hyperlink">(Quick Interaction)</span></h3>
          <p className="text-color">
            Scan the QR code to view an AR version of the Globe or click on this <a className="hyperlink" href="https://arearth.mfelobes.ca">Link</a> and scan the pointer from another device.
          </p>
          <p>Please Allow Camera Access</p>
          <div className="d-flex align-items-center mb-3">
            <img src={QRcode} alt="qr" className="img-fluid me-3" style={{ maxWidth: "20%" }} />
            <img src={HiroImg} alt="Hiro" className="img-fluid" style={{ maxWidth: "20%" }} />
          </div>

          <div className="d-flex align-items-center">
            <Link to="/projects">
              <button className="btn btn-primary mt-2 me-2">
                View My Projects
              </button>
            </Link>
            <a
              href="https://staging.mfelobes.ca/toDownload/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-secondary mt-2">Resume</button>
            </a>
          </div>
        </Col>

        <Col md={6}>
          <Earth3D />
        </Col>
      </Row>
    </Container>
  );
};

export default AboutSection;
