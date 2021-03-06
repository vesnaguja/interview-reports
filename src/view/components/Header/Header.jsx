import React from "react";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = ({ title, handleToken }) => {
  return (
    <Container fluid className="bg-primary py-2 mb-5">
      <Container className="d-flex justify-content-between">
        <h3 className="text-white">{title}</h3>
        <div>
          <Link to="/interview-reports">
            <Button className="text-primary bg-light">Candidates</Button>
          </Link>

          <Link to="/interview-reports/reports">
            <Button className="text-primary bg-light">Reports</Button>
          </Link>
          <Button className="text-primary bg-light" onClick={() => handleToken(null)}>
            Logout
          </Button>
        </div>
      </Container>
    </Container>
  );
};

export default Header;
