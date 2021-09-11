import React from "react";
import { Container } from "react-bootstrap";
import CandidateReport from "./CandidateReport/CandidateReport";
import CandidateBasicInfo from "./CandidateBasicInfo/CandidateBasicInfo";

const SingleCandidate = () => {
  return (
    <Container>
      <CandidateBasicInfo />
      <CandidateReport />
    </Container>
  );
};

export default SingleCandidate;
