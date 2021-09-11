import { Spinner } from "react-bootstrap";
import "./Loader.css";

const Loader = () => {
  return (
    <div>
      <Spinner animation="grow" variant="primary" />
    </div>
  );
};

export default Loader;
