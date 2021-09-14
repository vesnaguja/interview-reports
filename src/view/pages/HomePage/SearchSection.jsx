import { Form, FormControl, Row, Col } from "react-bootstrap";

const SearchSection = ({onTypingHandler}) => {
  return (
    <Row>
      <Col xs={12} md={6} xl={8} xxl={9}>
        <h3>Candidates</h3>
      </Col>

      <Col xs={12} md={6} xl={4} xxl={3}>
        <Form className="d-flex">
          <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" onChange={onTypingHandler} />
        </Form>
      </Col>
    </Row>
  );
};

export default SearchSection;
