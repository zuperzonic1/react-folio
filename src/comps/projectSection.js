import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ReactIcon from "../images/skills/react-logo.png";
// ... import other technology icons

const ProjectsSection = () => {
  const projects = [
    {
      title: "StatkiK - Landing Page",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      demoUrl: "https://statik.mfelobes.ca/",
      technologies: [{ name: "React", icon: ReactIcon }],
    },
    {
      title: "StatkiK - Landing Page",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      demoUrl: "https://staging.mfelobes.ca/mad_movies/dynamic_site",
      technologies: [{ name: "React", icon: ReactIcon }],
    },
    {
      title: "J3os - Landing Page",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      demoUrl: "https://staging.mfelobes.ca/mad_movies/dynamic_site",
      technologies: [{ name: "React", icon: ReactIcon }],
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center text-white mb-4">PROJECTS</h1>
      {projects.map((project, index) => (
        <Row key={index} className="mb-5">
          <Col lg={12}>
            <h3 className="text-warning">{project.title}</h3>
            <p className="text-light">{project.description}</p>
            <Button
              variant="warning"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              DEMO
            </Button>
            <div className="tech-icons mt-3">
              {project.technologies.map((tech, index) => (
                <img
                  key={index}
                  src={tech.icon}
                  alt={tech.name}
                  style={{ width: "40px", height: "40px", marginRight: "10px" }}
                />
              ))}
            </div>
            {/* Here is the iframe for the project demo */}
            <div className="iframe-container" style={{ marginTop: "20px" }}>
              <iframe
                src={project.demoUrl}
                title={project.title}
                width="100%"
                height="500px"
                style={{ border: "none" }}
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default ProjectsSection;
