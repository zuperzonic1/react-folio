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

import twdb1 from "../assets/images/projects/twdb1.png";

import browsaritos1 from "../assets/images/projects/browsaritos1.png";
import browsaritos2 from "../assets/images/projects/browsaritos2.png";

import BuyMore1 from "../assets/images/projects/BuyMore1.png";
import BuyMore2 from "../assets/images/projects/BuyMore2.png";

import freshBasket1 from "../assets/images/projects/freshBasket1.png";

import portfolio1 from "../assets/images/projects/portfolio1.png";
import portfolio2 from "../assets/images/projects/portfolio2.png";

const ProjectsSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

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

  const projects = [
    {
      title: "Personal Portfolio - This Website",
      description:
        "This is a portfolio website where I showcase my work. I decided to begin designing the entire website in Illustrator to better envision the site and determine the necessary tech stack. Additionally, I utilized Three.js with React Fiber for smoother integration into the React ecosystem. The site is designed to handle dynamic data for more straightforward data input in the future.",
      demoUrl: "https://mfelobes.ca/",
      technologies: [
        { name: "Illustrator", icon: Icons.illustrator },
        { name: "Photoshop", icon: Icons.photoshop },
        { name: "React", icon: Icons.react },
        { name: "bootstrap", icon: Icons.bootstrap},
        { name: "Node.js", icon: Icons.nodejs },
        { name: "three.js", icon: Icons.three },
        { name: "gsap", icon: Icons.gsap },
        // { name: "Express", icon: Icons.express },
        { name: "Javascript", icon: Icons.javascript },
        { name: "html", icon: Icons.html },
        { name: "css", icon: Icons.css },
      ],
      // githubUrl: "https://github.com/zuperzonic1",
      images: [portfolio1, portfolio2],
    },

    {
      title: "Landing Website - statikAi",
      description:
        "This is a Landing page for a company that offers AI solutions for businesses. I created a figma file, designed the assets with Illustrator, and created a prototype for the client to check and give feedback before development. For the website I worked with React as my main framework, I then used react-router-dom to handle my site’s routing, I used Bootstrap for the general layout of the page, and used CSS for other general styling purposes.",
      demoUrl: "https://statik.mfelobes.ca/",
      technologies: [
        { name: "Illustrator", icon: Icons.illustrator },
        { name: "Figma", icon: Icons.figma },
        { name: "React", icon: Icons.react },
        { name: "Bootstrap", icon: Icons.bootstrap },
        { name: "Javascript", icon: Icons.javascript },
        { name: "html", icon: Icons.html },
        { name: "css", icon: Icons.css },
      ],
      // githubUrl: "https://github.com/zuperzonic1",
      images: [statikAi1, statikAi2, statikAi3],
    },
  {
    title: "ChatBox with Discord Integration - Browseritos",
    description:
      "This is a chatbox that allows users to chat with each other, the chatbox is integrated with Discord, a channel where users can chat with each other, The back end built with node.js and express, and is connected to the frontend using websocket. The frontend is built with React and it's styled using Flowbite(Tailwind Library) and CSS. The chatbox is responsive and mobile friendly. as well as the backend tokens are secure using dotenv.",
    demoUrl: "https://browseritos.mfelobes.ca/",
    technologies: [
      { name: "Photoshop", icon: Icons.photoshop },
      { name: "React", icon: Icons.react },
      { name: "Node.js", icon: Icons.nodejs },
      // { name: "Express", icon: Icons.express },
      { name: "Javascript", icon: Icons.javascript },
      { name: "html", icon: Icons.html },
      { name: "css", icon: Icons.css },

    ],
    githubUrl: "https://github.com/AhmedElsharawy/discord-react-browseritos",
    images: [browsaritos1, browsaritos2],
  },
  {
    title: "FreshBasket - Groceory Store Website",
    description:" This is a groceory store website with a functioning cart and checkout, the website is built using Sammy.js, Materialize, PHP, MySQL, and Jquery. The website pulls data from a MySQL database and displays it on the website. The cart info is stored in global varriables and is used to calculate the total price of the items in the cart.",
    demoUrl: "https://freshbasket.mfelobes.ca/#/home/",
    technologies: [
      { name: "Illustrator", icon: Icons.illustrator },
      { name: "Javascript", icon: Icons.javascript },
      { name: "html", icon: Icons.html },
      { name: "css", icon: Icons.css },
      { name: "jQuery", icon: Icons.jquery },
      { name: "PHP", icon: Icons.php },
      { name: "MySQL", icon: Icons.mysql },

    ],
    githubUrl: "",
    images: [freshBasket1],
  },
  {
    title: "BuyMore - Contest Website/ Match Game",
    description:
      "In this project, I began by aligning with the developer's tech stack, followed by selecting a color theme appealing to our target audience. I crafted a Userflow Chart to map out the necessary pages, ensuring a smooth user journey. Designing each page with user interactions in mind, I then created key assets like the logo and icons using Adobe Illustrator, integrating them into the Figma project. This approach highlights my ability to blend aesthetic appeal with functional design, leveraging industry-standard tools to deliver a cohesive and engaging user experience.",
    demoUrl: "https://www.figma.com/file/4H19xPD5xU0aqHv0GMGBkc/BUY-MORE?type=design&node-id=0%3A1&mode=design&t=eT2HLOouC1Sdq1yU-1",
    technologies: [
      { name: "Illustrator", icon: Icons.illustrator },
      { name: "Figma", icon: Icons.figma },
      { name: "React", icon: Icons.react },
      { name: "Javascript", icon: Icons.javascript },
      { name: "html", icon: Icons.html },
      { name: "css", icon: Icons.css },
      { name: "firebase", icon: Icons.firebase}
    ],
    githubUrl: "https://github.com/HeyItsLethal/buymoredollars",
    images: [BuyMore1, BuyMore2],
  },
  {
    title: "React Website - The Virtual Store",
    description:
      "This is a school project that I built using React and Firebase. The website is a virtual store that allows users to add items to their cart and checkout. The website is responsive and mobile friendly.",
    demoUrl: "https://vstore.mfelobes.ca/categories",
    technologies: [
      { name: "React", icon: Icons.react },
      { name: "Javascript", icon: Icons.javascript },
      { name: "Firebase", icon: Icons.firebase },
    ],
    githubUrl: "https://github.com/zuperzonic1",
    images: [vStore1, vStore2],
  },
  {
    title: "TWDB - THE WITCHER DATABASE",
    description:
      "TWDB is a database for the Witcher TV Series. The website is built using Sammy.js, Foundation, PHP, MySQL, and Jquery. the website pulls data from a MySQL database and displays it on the website. The website is Desktop use for now, but will be made responsive in the future.",
    demoUrl: "https://staging.mfelobes.ca/mad_movies/dynamic_site",
    technologies: [
      { name: "PHP", icon: Icons.php },
      { name: "MySQL", icon: Icons.mysql },
      { name: "Foundation", icon: Icons.bootstrap },
      { name: "Jquery", icon: Icons.jquery },
    ],
    githubUrl: "https://github.com/zuperzonic1",
    images: [twdb1],
  },
  ];
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
                  src={image}
                  alt={`Slide ${idx}`}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
        <Col xs={12} md={8}>
          <p className="text-color ">{project.description}</p>
          <div className="tech-icons d-flex flex-wrap justify-content-center justify-content-md-start my-3">
            {project.technologies.map((tech, index) => (
              <img
                key={index}
                src={tech.icon}
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
    ))}
  </Container>
  );
};

export default ProjectsSection;
