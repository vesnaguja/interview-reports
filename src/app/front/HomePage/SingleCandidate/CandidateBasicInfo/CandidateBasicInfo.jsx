import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./CandidateBasicInfo.css";

const CandidateBasicInfo = () => {
  return (
    <Container>
      <Row>
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
              <p className="fs-4">Josefina Higgins</p>
            </Col>
            <Col sm={12} md={12} lg={6} className="g-4">
              <h6>Date of Birth:</h6>
              <p className="fs-4">01.01.1991.</p>
            </Col>
            <Col sm={12} md={12} lg={6} className="g-4">
              <h6>Email:</h6>
              <p className="fs-4">josefina.higgins@gmail.com</p>
            </Col>
            <Col sm={12} md={12} lg={6} className="g-4">
              <h6>Education:</h6>
              <p className="fs-4">Belgrade Institute of Technology</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default CandidateBasicInfo;
