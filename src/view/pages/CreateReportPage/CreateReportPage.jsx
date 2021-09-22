import React, { Fragment, useState } from "react";
import SelectionSection from "./SelectionSection/SelectionSection";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Col, Row } from "react-bootstrap";
import SelectCandidate from "./SelectCandidate/SelectCandidate";
import SelectCompany from "./SelectCompany/SelectCompany";
import FillReportDetails from "./FillReportDetails/FillReportDetails";

const newReportInitialState = {
  id: null,
  candidateId: null,
  candidateName: null,
  companyId: null,
  companyName: null,
  iterviewDate: null,
  phase: null,
  status: null,
  note: null,
};
const CreateReportPage = () => {
  // const token = localStorage.getItem("token");
  const [wizardStep, setWizardStep] = useState(1);
  const [newReport, setNewReport] = useState(newReportInitialState);

  const nextPageHandler = () => {
    setWizardStep((prevState) => prevState + 1);
  };
  const prevPageHandler = () => {
    setWizardStep((prevState) => prevState - 1);
  };
  const selectCandidateHandler = (candidate) => {
    setNewReport({
      ...newReport,
      candidateId: candidate.id,
      candidateName: candidate.name,
    });
  };

  const selectCompanyHandler = (company) => {
    setNewReport({ ...newReport, companyId: company.id, companyName: company.name });
  };

  return (
    <Fragment>
      <Header title={"Reports Administration"} />
      <Container className="mb-5">
        <Row>
          <Col sm={12} md={6} lg={3}>
            <SelectionSection wizardStep={wizardStep} newReport={newReport} />
          </Col>
          <Col sm={12} md={6} lg={9} className="border-start">
            {wizardStep === 1 && (
              <SelectCandidate selectCandidateHandler={selectCandidateHandler} newReport={newReport} nextPageHandler={nextPageHandler} />
            )}

            {wizardStep === 2 && (
              <SelectCompany
                selectCompanyHandler={selectCompanyHandler}
                newReport={newReport}
                nextPageHandler={nextPageHandler}
                prevPageHandler={prevPageHandler}
              />
            )}

            {wizardStep === 3 && <FillReportDetails newReport={newReport} prevPageHandler={prevPageHandler} />}
          </Col>
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
};
export default CreateReportPage;
