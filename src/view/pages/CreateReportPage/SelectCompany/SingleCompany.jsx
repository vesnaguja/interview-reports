import React from "react";
import { Row, Col } from "react-bootstrap";

const SingleCandidate = ({ company, selectCompanyHandler, newReport }) => {
  return (
    <Col xs={12} onClick={() => selectCompanyHandler(company)}>
      <Row className={`border m-0 ${newReport.companyId === company.id && "border-primary"}`}>
        <Col xs={12}>
          <p className="mb-0">{company.name}</p>
        </Col>
      </Row>
    </Col>
  );
};

export default SingleCandidate;
