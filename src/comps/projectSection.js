import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Carousel } from "react-bootstrap";
import projectData from "../data/projects.json"; // Assuming the JSON file is in the data folder
import Icons from "../comps/icons";
import Images from "./images"; // Create an Images object to map image paths

const imageMapper = {
  portfolio1: Images.portfolio1,
  portfolio2: Images.portfolio2,
  statikAi1: Images.statikAi1,
  statikAi2: Images.statikAi2,
  statikAi3: Images.statikAi3,
  browsaritos1: Images.browsaritos1,
  browsaritos2: Images.browsaritos2,
  BuyMore1: Images.BuyMore1,
  BuyMore2: Images.BuyMore2,
  freshBasket1: Images.freshBasket1,
  vStore1: Images.vStore1,
  vStore2: Images.vStore2,
  twdb1: Images.twdb1,
  codeitos1: Images.codeitos1,
  codeitos2: Images.codeitos2,
  peng1: Images.peng1,
};

// Helper function to truncate text
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length <= wordLimit) {
    return text;
  }
  return words.slice(0, wordLimit).join(" ") + "...";
};

const ProjectsSection = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Fetch projects from JSON
    setProjects(projectData);

    // Fade-In and Slight Rise on Page Load for the Title
    gsap.from(".subtitle-text", {
      duration: 1.5,
      autoAlpha: 0,
      ease: "power2.out",
      y: -20,
    });

    // Staggered Fade-In and Rise for Project Rows
    gsap.utils.toArray(".project-row").forEach((project, index) => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
          start: "top 80%", // Animation starts when the top of the project hits the 80% height of the viewport
          end: "bottom top",
          toggleActions: "play none none reverse",
          markers: false, // Set to true if you want to see the start and end points
        },
        duration: 1,
        autoAlpha: 0,
        ease: "power1.out",
        y: 30,
        stagger: 0.3, // Each project fades in slightly after the previous one
      });
    });
  }, []);

  return (
    <Container className="my-5">
      <h1 className="text-center subtitle-text mb-4">MY PROJECTS</h1>
      {projects.map((project, index) => (
        <Row key={index} className="mb-5 border-project p-3 project-row">
          <Col xs={12} className="mb-3">
            <h3 className="primary-text mb-2 text-center text-md-left">{project.title}</h3>
          </Col>
          <Col xs={12} md={4} className="d-flex align-items-center justify-content-center">
            <Carousel className="w-100">
              {project.images.map((image, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block w-100"
                    src={imageMapper[image]}
                    alt={`Slide ${idx}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
          <Col xs={12} md={8}>
            <p className="text-color">{truncateText(project.description, 25)}</p>
            <div className="tech-icons d-flex flex-wrap justify-content-center justify-content-md-start my-3">
              {project.technologies.map((tech, index) => (
                <img
                  key={index}
                  src={Icons[tech.icon]}
                  alt={tech.name}
                  className="img-fluid me-2 mt-2"
                  style={{ height: "30px", width: "auto" }}
                />
              ))}
            </div>
            <div className="d-flex justify-content-center justify-content-md-start">
              <Button
                variant="warning"
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                DEMO
              </Button>
              <Button onClick={() => navigate(`/projects/${project.id}`)} variant="warning">
                View Details
              </Button>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-inline-block ms-3"
                >
                  <img
                    src={Icons.git}
                    alt="GitHub"
                    className="img-fluid"
                    style={{ maxWidth: "25px", height: "auto" }}
                  />
                </a>
              )}
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default ProjectsSection;
