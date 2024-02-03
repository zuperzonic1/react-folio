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
  const phoneRegex = /^\+?[1-9]\d{1,14}$/;

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
          <h1 className="text-center subtitle-text mb-4">CONTACT ME</h1>
          <p className="text-right mb-4">
            Interested in collaborating or have a question? I'd love to hear
            from you. Send me a message or connect with me through social media.
          </p>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email Address</Form.Label>
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
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone (e.g. +14155552671)"
                    value={formData.phone}
                    onChange={handleChange}
                    pattern="\+?\d{10,15}"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Enter your message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Button
                variant="outline-light"
                type="submit"
                size="lg"
                className="text-uppercase btn-primary"
                style={{ maxWidth: "300px" }} // Adjust the max width as needed
              >
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;
