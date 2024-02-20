import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Icons from "../comps/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { Carousel } from "react-bootstrap";
// importing images for the project section
import statikAi1 from "../assets/images/projects/statikAi1.png";
import statikAi2 from "../assets/images/projects/statikAi2.png";
import statikAi3 from "../assets/images/projects/statikAi3.png";

import vStore1 from "../assets/images/projects/vStore1.png";
import vStore2 from "../assets/images/projects/vStore2.png";

const ProjectsSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    animateProjects();
  }, []);

  const animateProjects = () => {
    // Title Animation
    gsap.from(".subtitle-text", {
      duration: 1,
      autoAlpha: 0, // Fades in from opacity 0 to 1
      ease: "power1.out",
      y: -50, // Starts 50 pixels above its original position
    });

    // Projects Animation
    gsap.utils.toArray(".project-row").forEach((project) => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
          start: "top center",
          toggleActions: "play none none none",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power1.out",
      });
    });
  };

  const projects = [
    {
      title: "statikAi - Landing Page",
      description:
        "statkAi is a Landing page for a company that offers AI solutions for businesses. The website is built using React and Bootstrap. The website is responsive and mobile friendly.",
      demoUrl: "https://statik.mfelobes.ca/",
      technologies: [
        { name: "React", icon: Icons.react },
        { name: "Bootstrap", icon: Icons.bootstrap },
        { name: "Javascript", icon: Icons.javascript },
        { name: "html", icon: Icons.html },
        { name: "css", icon: Icons.css },
        { name: "Illustrator", icon: Icons.illustrator },
      ],
      githubUrl: "https://github.com/zuperzonic1/my-site",
      images: [statikAi1, statikAi2, statikAi3],
    },
    {
      title: "VS - THE VIRTUAL STORE",
      description: "This is ",
      demoUrl: "https://vstore.mfelobes.ca/categories",
      technologies: [
        { name: "React", icon: Icons.react },
        { name: "Javascript", icon: Icons.javascript },
        { name: "Bootstrap", icon: Icons.bootstrap },
        { name: "Firebase", icon: Icons.firebase },
      ],
      githubUrl: "https://github.com/yourusername/statkik-landing-page",
      images: [vStore1, vStore2],
    },
    {
      title: "TWDB - THE WITCHER DATABASE",
      description:
        "TWDB is a database for the Witcher universe. The website is built using Sammy.js, Foundation, PHP, MySQL, and Jquery. the website pulls data from a MySQL database and displays it on the website. The website is Desktop use for now, but will be made responsive in the future.",
      demoUrl: "https://staging.mfelobes.ca/mad_movies/dynamic_site",
      technologies: [
        { name: "PHP", icon: Icons.php },
        { name: "MySQL", icon: Icons.mysql },
        { name: "Foundation", icon: Icons.bootstrap },
        { name: "Jquery", icon: Icons.jquery },
      ],
      githubUrl: "https://github.com/yourusername/statkik-landing-page",
      images: ["https://via.placeholder.com/600x400"],
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center subtitle-text mb-4">MY PROJECTS</h1>
      {projects.map((project, index) => (
        <Row key={index} className="mb-5 border-project p-3 project-row">
          <Col xs={12} md={8} lg={9} className="text-md-left">
            <h3 className="text-color mb-2">{project.title}</h3>
            <p className="text-color">{project.description}</p>
            <div className="tech-icons d-flex flex-wrap justify-content-center justify-content-md-start my-3">
              {project.technologies.map((tech, index) => (
                <img
                  key={index}
                  src={tech.icon}
                  alt={tech.name}
                  className="img-fluid me-2"
                  style={{ height: "30px", width: "auto" }}
                />
              ))}
            </div>
          </Col>
          <Col
            xs={12}
            md={4}
            lg={3}
            className="d-flex align-items-start justify-content-center justify-content-md-end"
          >
            <Button
              variant="warning"
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="me-3 me-md-0"
            >
              DEMO
            </Button>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ms-2 ms-md-3"
            >
              <img
                src={Icons.git}
                alt="GitHub"
                className="img-fluid"
                style={{ maxWidth: "25px", height: "auto" }}
              />
            </a>
          </Col>
          <Col xs={12} className="project-slideshow my-3">
            <Carousel>
              {project.images.map((image, idx) => (
                <Carousel.Item key={idx}>
                  <img
                    className="d-block w-100"
                    src={image}
                    alt={`Slide ${idx}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default ProjectsSection;
