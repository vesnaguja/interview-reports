import React from "react";
import { Container } from "react-bootstrap";
import CandidateReport from "./CandidateReport/CandidateReport";
import CandidateBasicInfo from "./CandidateBasicInfo/CandidateBasicInfo";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const SingleCandidate = ({ handleToken }) => {
  return (
    <>
      <Header handleToken={handleToken} />
      <Container className="mb-5">
        <CandidateBasicInfo />
        <CandidateReport />
      </Container>
      <Footer />
    </>
  );
};

export default SingleCandidate;
