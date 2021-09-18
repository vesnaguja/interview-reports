import React from "react";
import { Nav } from "react-bootstrap";

const SelectionSection = () => {
  return (
    <Nav
      variant="pills"
      defaultActiveKey="/createreport"
      className="flex-column"
    >
      <Nav.Item>
        <Nav.Link href="/createreport">Select Candidate</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="select-company">Select Company</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="report-details">Fill Report Details</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default SelectionSection;
