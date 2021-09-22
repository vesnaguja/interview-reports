import React from "react";
import { Image } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
const SingleCandidate = ({ candidate, selectCandidateHandler, newReport }) => {
  return (
    <Col
      xs={12}
      md={12}
      lg={6}
      onClick={() => selectCandidateHandler(candidate)}
      className="p-2"
    >
      <Row
        className={`border m-0 ${
          newReport.candidateId === candidate.id && "border-primary"
        }`}
      >
        <Col xs={2} md={2} lg={2} className="d-flex align-items-center">
          <Image
            className="w-100 d-flex align-items-center"
            roundedCircle
            src={candidate.avatar}
          />
        </Col>
        <Col xs={10} md={10} lg={10}>
          <p className="mb-0">{candidate.name}</p>
          <small className="text-muted">{candidate.email}</small>
        </Col>
      </Row>
    </Col>
  );
};
export default SingleCandidate;
