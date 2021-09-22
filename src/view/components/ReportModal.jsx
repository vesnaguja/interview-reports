import { Col, Container, Modal, Row } from "react-bootstrap";

const ReportModal = ({ report, show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} aria-labelledby="contained-modal-title-vcenter" centered size="lg">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{report.candidateName}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <p className="mb-0">Company</p>
              <p className="fs-4">{report.companyName}</p>
              <p className="mb-0">Interview Date</p>
              <p className="fs-4">{report.interviewDate}</p>
              <p className="mb-0">Phase</p>
              <p className="fs-4">{report.phase}</p>
              <p className="mb-0">Status</p>
              <p className="fs-4">{report.status}</p>
            </Col>

            <Col xs={12} md={8}>
              <p>Notes</p>
              <p>{report.note}</p>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
};

export default ReportModal;

