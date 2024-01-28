import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import { FaLinkedin, FaGitAlt } from "react-icons/fa"; // Import icons from react-icons

const ContactMe = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    address: "",
    phone: "",
    message: "",
  });

  // Regex patterns for validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?\d{10,15}$/; // Adjust regex according to your needs

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simple front-end validation
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!phoneRegex.test(formData.phone)) {
      alert("Please enter a valid phone number.");
      return;
    }
    // Here you would send the form data to Formspree
    try {
      const response = await fetch("https://formspree.io/f/xnqejjzj", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          address: formData.address,
          phone: formData.phone,
          message: formData.message,
        }),
      });
      if (response.ok) {
        // If the submission is successful, reset the form
        setFormData({
          email: "",
          name: "",
          address: "",
          phone: "",
          message: "",
        });
        alert("Thanks for contacting me! I will get back to you soon.");
      } else {
        alert("Something went wrong! Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <h1 className="text-color text-center mb-4">CONTACT ME</h1>
          <p className="text-color text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter a valid email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Row className="mb-3">
              <Col>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Col>
              <Col>
                <Form.Control
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone (e.g. +14155552671)"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="\+?\d{10,15}"
                  required
                />
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button variant="warning" type="submit" className="w-100">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;
