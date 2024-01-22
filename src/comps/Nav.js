import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function NavigationBar() {
  // Set initial dark mode state based on the browser's setting
  const [darkMode, setDarkMode] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    // Apply the initial theme based on the browser's setting
    const updateBodyClasses = () => {
      if (darkMode) {
        document.body.setAttribute("data-theme", "dark");
      } else {
        document.body.removeAttribute("data-theme");
      }
    };

    updateBodyClasses();

    // Listen for changes in the browser's dark mode setting
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      setDarkMode(e.matches);
      updateBodyClasses();
    };

    mediaQuery.addEventListener("change", handleChange);

    // Cleanup listener on component unmount
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [darkMode]);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    // The useEffect hook will handle updating the body classes
  };

  return (
    <Navbar
      expand="lg"
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
    >
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Micheal Felobes</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <LinkContainer to="/">
              <Nav.Link href="#about">About</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
              <Nav.Link className="me-3">Projects</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link>Contact</Nav.Link>
            </LinkContainer>
            <Nav.Item>
              <Form.Check
                type="switch"
                id="dark-mode-switch"
                label="Dark Mode"
                checked={darkMode}
                onChange={handleDarkModeToggle}
                className="my-2 my-lg-0"
              />
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
