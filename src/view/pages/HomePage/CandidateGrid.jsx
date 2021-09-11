import { Container, Row } from "react-bootstrap";
import CandidateCard from "./CandidateCard";

const CandidateGrid = () => {
  return (
    <Container className="mb-5">
      <Row>
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
        <CandidateCard />
      </Row>
    </Container>
  );
};

export default CandidateGrid;
