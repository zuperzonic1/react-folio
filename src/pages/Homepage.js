// import HeroImg from "../images/HeroImg.js";
import { ReactComponent as HeroSvg } from "../images/HeroBanner.svg";
import { Container, Row, Col } from "react-bootstrap";
import Typed from "react-typed";
import { render } from "react-dom";

const Homepage = () => {
  let x = 10;

  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <HeroSvg className="w-100" />
          <h1 className="text-center">
            A{" "}
            <Typed
              strings={["Web Developer", "UI/ UX Designer"]}
              typeSpeed={20}
            />
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
