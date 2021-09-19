import { Row } from "react-bootstrap";
import CandidateCard from "./CandidateCard";

const CandidateGrid = ({ filteredCandidates }) => {
  
  return (
    <Row>
      {filteredCandidates.map((candidate) => (
        <CandidateCard candidate={candidate} key={candidate.id} />
      ))}
    </Row>
  );
};

export default CandidateGrid;
