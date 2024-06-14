import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import projectData from "../data/projects.json";
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

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData.find((project) => project.id.toString() === id);

  if (!project) {
    return (
      <Container>
        <h1>Project Not Found</h1>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="subtitle-text">{project.title}</h1>
        <Button
          variant="warning"
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          DEMO
        </Button>
      </div>
      <div className="tech-icons d-flex flex-wrap justify-content-center justify-content-md-start my-3">
        {project.technologies.map((tech, index) => (
          <div key={index} className="d-flex flex-column align-items-center me-3 mt-2">
            <img
              src={Icons[tech.icon]}
              alt={tech.name}
              className="img-fluid"
              style={{ height: "30px", width: "auto" }}
            />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
      <p>{project.description}</p>
      <Row>
        {project.images.map((image, idx) => (
          <Col xs={12} key={idx} className="mb-3">
            <img
              className="d-block w-100"
              src={imageMapper[image]}
              alt={`Image ${idx}`}
            />
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center justify-content-md-start">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="d-inline-block"
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
    </Container>
  );
};

export default ProjectDetails;
