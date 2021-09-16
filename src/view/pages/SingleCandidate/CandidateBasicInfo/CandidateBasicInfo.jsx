import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getSingleCandidate } from "../../../../services/service";
import { useParams } from "react-router";
import Loader from "../../../components/Loader/Loader";

import "./CandidateBasicInfo.css";

const CandidateBasicInfo = ({ token }) => {
  let { id } = useParams("id");

  const [candidate, setCandidate] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);

    getSingleCandidate(token, id).then((candidateData) =>
      setCandidate(candidateData)
    );
  }, [token, id]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <Row className="mt-4">
          <Col sm={12} md={12} lg={4}>
            <img
              src="https://goodshepherdirvine.com/wp-content/uploads/2017/08/user-placeholder.jpg"
              alt=""
            />
          </Col>
          <Col sm={12} md={6} lg={8} className="centered ">
            <Row>
              <Col sm={12} md={12} lg={6} className="g-4">
                <h6>Name:</h6>
                <p className="fs-4">{candidate.name}</p>
              </Col>
              <Col sm={12} md={12} lg={6} className="g-4">
                <h6>Date of Birth:</h6>
                <p className="fs-4">{candidate.birthday}</p>
              </Col>
              <Col sm={12} md={12} lg={6} className="g-4">
                <h6>Email:</h6>
                <p className="fs-4">{candidate.email}</p>
              </Col>
              <Col sm={12} md={12} lg={6} className="g-4">
                <h6>Education:</h6>
                <p className="fs-4">{candidate.education}</p>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default CandidateBasicInfo;
