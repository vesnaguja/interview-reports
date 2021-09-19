import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FiEye } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import SingleReportItem from "./SingleReportItem";
import ReportModal from "../../components/ReportModal";
import { deleteReportFunction } from "../../../services/service";

const SingleReport = ({ report, loadingReports }) => {
  const token = localStorage.getItem("token");
  const [modalShow, setModalShow] = useState(false);

  const deleteReport = () => {
    deleteReportFunction(token, report.id);
    loadingReports();
  };

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
          className="d-flex justify-content-around align-items-center"
        >
          <FiEye
            className="text-primary"
            size="25px"
            onClick={() => setModalShow(true)}
          />

          <IoMdClose
            className="text-danger"
            size="25px"
            onClick={deleteReport}
          />
        </Col>
      </Row>
      <ReportModal
        report={report}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default SingleReport;
