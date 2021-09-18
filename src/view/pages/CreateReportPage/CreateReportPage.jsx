import React, { Fragment, useState } from "react";
import SelectionSection from "./SelectionSection/SelectionSection";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Container, Col, Row } from "react-bootstrap";
import SelectCandidate from "./SelectCandidate/SelectCandidate";

const CreateReportPage = ({ token }) => {
  const [selectedCandidate, setSelectedCandidate] = useState({});

  const selectionHandler = (candidate) => {
    setSelectedCandidate(candidate);
  };
  return (
    <Fragment>
      <Header title={"Reports Administration"} />
      <Container>
        <Row>
          <Col sm={12} md={6} lg={3}>
            <SelectionSection />
          </Col>
          <Col sm={12} md={6} lg={9} className="border-start">
            <SelectCandidate
              selectionHandler={selectionHandler}
              token={token}
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default CreateReportPage;
