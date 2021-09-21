import { Col } from "react-bootstrap";

const SingleReportItem = ({ report, title }) => {
  return (
    <Col sm={12} md={6} lg={3} className="border-end">
      <p className="fs-5 m-0">{report}</p>
      <small className="text-muted">{title}</small>
    </Col>
  );
};

export default SingleReportItem;
