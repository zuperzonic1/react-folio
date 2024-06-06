// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { Container, Row, Col, Carousel } from "react-bootstrap";
// import projectData from "../projects.json"; // Assuming the JSON file is in the data folder

// const ProjectDetails = () => {
//   const { id } = useParams();
//   const [project, setProject] = useState(null);

//   useEffect(() => {
//     const project = projectData.find((project) => project.id === parseInt(id));
//     setProject(project);
//   }, [id]);

//   if (!project) {
//     return <div>Project not found</div>;
//   }

//   return (
//     <Container className="my-5">
//       <h1 className="text-center mb-4">{project.title}</h1>
//       <Row>
//         <Col xs={12} className="mb-3">
//           <Carousel className="w-100">
//             {project.images.map((image, idx) => (
//               <Carousel.Item key={idx}>
//                 <img
//                   className="d-block w-100"
//                   src={image}
//                   alt={`Slide ${idx}`}
//                 />
//               </Carousel.Item>
//             ))}
//           </Carousel>
//         </Col>
//         <Col xs={12}>
//           <p>{project.description}</p>
//           <div className="tech-icons d-flex flex-wrap justify-content-center justify-content-md-start my-3">
//             {project.technologies.map((tech, index) => (
//               <div key={index} className="d-flex flex-column align-items-center me-3 mt-2">
//                 <img
//                   src={tech.icon}
//                   alt={tech.name}
//                   className="img-fluid"
//                   style={{ height: "30px", width: "auto" }}
//                 />
//                 <span>{tech.name}</span>
//               </div>
//             ))}
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ProjectDetails;
