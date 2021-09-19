import { useState, useEffect, Fragment } from "react";
import SingleCandidate from "./SingleCandidate";
import SearchSection from "../../../components/SearchSection";
import { Container, Row } from "react-bootstrap";
import { getCandidates } from "../../../../services/service";
import Loader from "../../../components/Loader/Loader";

const SelectCandidate = ({ token, selectionHandler }) => {
  const [candidatesList, setCandidatesList] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    getCandidates(token).then((response) => {
      setCandidatesList(response);
      setFilteredCandidates(response);
    });
  }, [token]);

  const onTyping = (e) => {
    const searchString = e.target.value.trim().toLowerCase();
    setFilteredCandidates(candidatesList.filter((candidate) => candidate.name.toLowerCase().includes(searchString)));
  };

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
                <SingleCandidate
                  candidate={candidate}
                  key={candidate.id}
                  onClick={selectionHandler}
                />
              ))}
            </Row>
          </Fragment>
        )}
      </Container>
    </div>
  );
};

export default SelectCandidate;
