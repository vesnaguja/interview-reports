import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CandidateCard = ({ candidate }) => {
  return (
    <Col xs={12} md={6} lg={6} xl={4} xxl={3} className="my-4">
      <Link className="text-decoration-none" to={`/candidate/${candidate.id}`}>
        <Card>
          <Card.Img variant="top" src={candidate.avatar} />
          <Card.Body className="text-center">
            <Card.Title>{candidate.name}</Card.Title>
            <Card.Text>{candidate.email}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default CandidateCard;
