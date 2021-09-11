import React from "react";
import { Container } from "react-bootstrap";
import CandidateReport from "./CandidateReport/CandidateReport";
import CandidateBasicInfo from "./CandidateBasicInfo/CandidateBasicInfo";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


const SingleCandidate = ({token}) => {
  return (
    <>
      <Header />
      <Container>
        <CandidateBasicInfo token={token} />
        <CandidateReport />
      </Container>

      <Footer />
    </>
  );
};

export default SingleCandidate;
