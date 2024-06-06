import { ReactComponent as HeroSvg } from "../assets/images/HeroBanner.svg";
import { Col } from "react-bootstrap";
import React from "react";
import TextAnimation from "../comps/TextAnimation";

const HomeBanner = () => {
  // using CSS and JS to display the 3d component in the center of the svg

  return (
    <Col xs={12} md={8} lg={6} className="mx-auto position-relative">
      <HeroSvg className="w-100" />
      <div className="position-absolute top-50 start-50 translate-middle earth3d "></div>
      <TextAnimation />
    </Col>
  );
};

export default HomeBanner;
