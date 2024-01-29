import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Icons from "../comps/icons";

const ProjectsSection = () => {
  const projects = [
    {
      title: "StatkAi - LANDING PAGE",
      description:
        "statkAi is a Landing page for a company that offers AI solutions for businesses. The website is built using React and Bootstrap. The website is responsive and mobile friendly.",
      demoUrl: "https://statik.mfelobes.ca/",
      technologies: [{ name: "React", icon: Icons.react }],
      githubUrl: "https://github.com/zuperzonic1/my-site", // Update this URL accordingly
    },
    {
      title: "TWDB - THE WITCHER DATABASE",
      description:
        "TWDB is a database for the Witcher universe. The website is built using Sammy.js, Foundation, PHP, MySQL, and Jquery. the website pulls data from a MySQL database and displays it on the website. The website is responsive and mobile friendly.",
      demoUrl: "https://staging.mfelobes.ca/mad_movies/dynamic_site",
      technologies: [{ name: "React", icon: Icons.react }],
      githubUrl: "https://github.com/yourusername/statkik-landing-page", // Update this URL accordingly
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center text-color mb-4">PROJECTS</h1>
      {projects.map((project, index) => (
        <Row key={index} className="mb-5 border-project p-3">
          <Col lg={12}>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h3 className="text-color">{project.title}</h3>
              <div>
                <Button
                  variant="warning"
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-2"
                >
                  DEMO
                </Button>
                <a
                  href={project.githubUrl} // Use the githubUrl from the project object
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ms-2"
                >
                  <img
                    src={Icons.git}
                    alt="GitHub"
                    style={{ width: "30px", height: "30px" }}
                  />
                </a>
              </div>
            </div>
            <p className="text-color">{project.description}</p>
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
