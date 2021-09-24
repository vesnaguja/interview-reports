import { Row, Col } from "react-bootstrap";

const SearchSection = ({ onTypingHandler, title }) => {
  return (
    <Row className="mb-3 pb-3">
      <Col xs={12} md={6} xl={8} xxl={9}>
        <h3>{title}</h3>
      </Col>

      <Col xs={12} md={6} xl={4} xxl={3}>
        <input
          onChange={onTypingHandler}
          className="p-2 border rounded-pill w-100"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </Col>
    </Row>
  );
};

export default SearchSection;
