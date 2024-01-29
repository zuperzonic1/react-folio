import { Outlet, Link, Form } from "react-router-dom";
import Nav from "../comps/Nav";
import Footer from "../comps/Footer";
import { Container } from "react-bootstrap";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
const Layout = ({}) => {
  useScrollToTop(); // This will trigger the scroll to the top on route changes

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
