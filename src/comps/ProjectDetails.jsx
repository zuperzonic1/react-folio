import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
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
};

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectData.find((project) => project.id.toString() === id);

  if (!project) {
    return <Container><h1>Project Not Found</h1></Container>;
  }

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">{project.title}</h1>
      <Row>
        <Col xs={12} className="mb-3">
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
        <Col xs={12}>
          <p>{project.description}</p>
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
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectDetails;
