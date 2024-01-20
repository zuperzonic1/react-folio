import { Outlet, Link } from "react-router-dom";
import Nav from "../comps/Nav";
import Footer from "../comps/Footer";
import { Container } from "react-bootstrap";

const Layout = ({}) => {
  return (
    <>
      <Nav />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
