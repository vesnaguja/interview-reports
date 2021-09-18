import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FiEye } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import SingleReportItem from "./SingleReportItem";

const SingleReport = ({ token, report }) => {
  return (
    <Container>
      <Row className="border rounded py-2 my-2 bg-white">
        <Col sm={12} md={12} lg={11}>
          <Row>
            <SingleReportItem report={report.companyName} title={"Company"} />
            <SingleReportItem
              report={report.candidateName}
              title={"Candidate"}
            />
            <SingleReportItem
              report={report.interviewDate}
              title={"Interview Date"}
            />
            <SingleReportItem report={report.status} title={"Status"} />
          </Row>
        </Col>
        <Col
          sm={12}
          md={12}
          lg={1}
          className="d-flex justify-content-between align-items-center"
        >
          <FiEye className="text-primary" size="25px" />

          <IoMdClose className="text-danger" size="25px" />
        </Col>
      </Row>
    </Container>
  );
};

export default SingleReport;
