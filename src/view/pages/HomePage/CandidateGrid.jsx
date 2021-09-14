import { Row } from "react-bootstrap";
import CandidateCard from "./CandidateCard";

const CandidateGrid = ({ token, filteredCandidates }) => {
  
  return (
    <Row>
      {filteredCandidates.map((candidate) => (
        <CandidateCard candidate={candidate} key={candidate.id} />
      ))}
    </Row>
  );
};

export default CandidateGrid;
