import React, {useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FiEye } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import SingleReportItem from "./SingleReportItem";
import ReportModal from "../../components/ReportModal";

const SingleReport = ({ token, report }) => {
  const [modalShow, setModalShow] = useState(false);
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
          <FiEye className="text-primary" size="25px" onClick={() => setModalShow(true)} />

          <IoMdClose className="text-danger" size="25px" />
        </Col>
      </Row>
        <ReportModal report={report} show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
};

export default SingleReport;
