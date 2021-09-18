import React, { useState, useRef, useEffect } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../../services/service";

const LoginPage = ({ handleToken }) => { 
  const [showError, setShowError] = useState({ active: false, message: "" });
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  useEffect(() => {
    emailRef.current.value = "dev@dev.com";
    passwordRef.current.value = "developer";
    // emailRef.current.focus();
    // console.log(emailRef);
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();    

    loginUser(emailRef.current.value, passwordRef.current.value).then((loginData) => {
      //console.log(loginData);
      if (!loginData.accessToken) {
        setShowError({ active: true, message: loginData });
        return;
      }

      // login is successful
      handleToken(loginData.accessToken);
      history.push("/");
    });
  };

  return (
    <Container className="d-flex justify-content-center pt-5">
      <Form className="w-50 card text-center p-5 bg-light" onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" ref={passwordRef} />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Login
        </Button>

        {showError.active && (
          <Alert variant="danger" className="mt-5">
            {showError.message}
          </Alert>
        )}
      </Form>
    </Container>
  );
};

export default LoginPage;
