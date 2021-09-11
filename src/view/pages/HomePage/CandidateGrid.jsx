import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import CandidateCard from "./CandidateCard";
import { getCandidates } from "../../../services/service";

const CandidateGrid = ({ token }) => {
  const [candidatesList, setCandidatesList] = useState([]);

  useEffect(() => {
    getCandidates(token).then((response) => setCandidatesList(response));
  }, [token]);

  return (
    <Container className="mb-5">
      <Row>
        {candidatesList.map((candidate) => (
          <CandidateCard candidate={candidate} key={candidate.id} />
        ))}
      </Row>
    </Container>
  );
};

export default CandidateGrid;
