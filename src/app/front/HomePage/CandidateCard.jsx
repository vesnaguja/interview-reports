import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CandidateCard = () => {
  return (
    <Col xs={12} md={6} lg={6} xl={4} xxl={3} className="my-4">
      <Link className="text-decoration-none">
        <Card>
          <Card.Img variant="top" src="./images/person_placeholder.png" />
          <Card.Body className="text-center">
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default CandidateCard;
