import React from "react";
import { Container } from "react-bootstrap";


const Footer = () => {
  return (
    <Container fluid className= "bg-primary fixed-bottom">
      <Container className="py-2 text-light">© 2021 Copyright BIT - TEAM "All Pain, No Gain" </Container>
    </Container>
  );
};

export default Footer;