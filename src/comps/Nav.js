import React, { useState } from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function NavigationBar() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    // Apply or remove the dark mode classes
    if (!darkMode) {
      document.body.classList.add("bg-dark", "text-white");
    } else {
      document.body.classList.remove("bg-dark", "text-white");
    }
  };

  return (
    <Navbar
      expand="lg"
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
    >
      <Container>
        <Navbar.Brand href="#">Micheal Felobes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            {" "}
            {/* Updated this line */}
            <LinkContainer to="/about">
              <Nav.Link>About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link className="me-3">Projects</Nav.Link>
            </LinkContainer>
            {/* Wrapped the toggle in a Nav.Item for alignment */}
            <Nav.Item>
              <Form.Check
                type="switch"
                id="dark-mode-switch"
                label="Dark Mode"
                checked={darkMode}
                onChange={handleDarkModeToggle}
                className="my-2 my-lg-0" // this applies vertical margin on xs to md screens, and none on lg screens
              />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
