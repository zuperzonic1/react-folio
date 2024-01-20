// import HeroImg from "../images/HeroImg.js";
import { ReactComponent as HeroSvg } from "../images/HeroBanner.svg";
import { Container, Row, Col } from "react-bootstrap";

const Homepage = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <HeroSvg className="w-100" />
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
