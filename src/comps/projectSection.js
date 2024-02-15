import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Icons from "../comps/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

// Inside your component

// Register ScrollTrigger with GSAP

const ProjectsSection = () => {
  useEffect(() => {
    animateProjects();
  }, []); // Empty dependency array to run only once after component mounts

  gsap.registerPlugin(ScrollTrigger);

  const animateProjects = () => {
    gsap.utils.toArray(".project-row").forEach((project) => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
          start: "top center", // Animation starts when the top of the project hits the center of the viewport
          toggleActions: "play none none none", // Play animation on enter, and don't do anything on leave, repeat, or reverse
        },
        x: -100, // Start 100px left from its original position
        opacity: 0,
        duration: 1,
        ease: "power1.out",
      });
    });
  };

  const projects = [
    {
      title: "StatkAi - LANDING PAGE",
      description:
        "statkAi is a Landing page for a company that offers AI solutions for businesses. The website is built using React and Bootstrap. The website is responsive and mobile friendly.",
      demoUrl: "https://statik.mfelobes.ca/",
      technologies: [
        { name: "React", icon: Icons.react },
        { name: "Bootstrap", icon: Icons.bootstrap },
        { name: "Javascript", icon: Icons.javascript },
      ],

      githubUrl: "https://github.com/zuperzonic1/my-site",
    },
    {
      title: "VS - THE VIRTUAL STORE",
      description: "This is ",
      demoUrl: "https://vstore.mfelobes.ca/categories",
      technologies: [
        { name: "React", icon: Icons.react },
        { name: "Javascript", icon: Icons.javascript },
        { name: "bootstrap", icon: Icons.bootstrap },
        { name: "Firebase", icon: Icons.firebase },
      ],
      githubUrl: "https://github.com/yourusername/statkik-landing-page",
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
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center subtitle-text mb-4 ">MY PROJECTS</h1>
      {projects.map((project, index) => (
        <Row key={index} className="mb-5 border-project p-3 project-row">
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
                  style={{ height: "40px", width: "auto", marginRight: "10px" }}
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
