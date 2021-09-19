import { useState, useEffect, Fragment } from "react";
import SingleCandidate from "./SingleCandidate";
import SearchSection from "../../../components/SearchSection";
import { Container, Row } from "react-bootstrap";
import { getCandidates } from "../../../../services/service";
import Loader from "../../../components/Loader/Loader";

const SelectCandidate = () => {
  const token = localStorage.getItem("token");
  const [candidatesList, setCandidatesList] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    getCandidates(token).then((response) => {
      setCandidatesList(response);
      setFilteredCandidates(response);
    });
  }, []);

  const onTyping = (e) => {
    const searchString = e.target.value.trim().toLowerCase();
    setFilteredCandidates(candidatesList.filter((candidate) => candidate.name.toLowerCase().includes(searchString)));
  };

  const selectionHandler = () => {};

  return (
    <div>
      <Container className="my-5">
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <div className="mb-3">
              <SearchSection onTypingHandler={onTyping} title={"Candidates"} />
            </div>
            <Row>
              {filteredCandidates.map((candidate) => (
                <SingleCandidate candidate={candidate} key={candidate.id} selectionHandler={selectionHandler} />
              ))}
            </Row>
          </Fragment>
        )}
      </Container>
    </div>
  );
};

export default SelectCandidate;
