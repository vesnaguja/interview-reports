import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Container fluid className="bg-primary py-2 mb-5">
      <Container className="d-flex justify-content-between">
        <h3 className="text-white">Interview Reports</h3>
        <Link to="/"> <Button className="text-primary bg-light">Candidates</Button> </Link>
      </Container>
    </Container>
  );
};

export default Header;
