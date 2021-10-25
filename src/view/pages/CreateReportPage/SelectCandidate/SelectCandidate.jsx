import { useState, useEffect } from "react";
import SingleCandidate from "./SingleCandidate";
import SearchSection from "../../../components/SearchSection";
import { Row, Button } from "react-bootstrap";
import { getCandidates } from "../../../../services/service";
import Loader from "../../../components/Loader/Loader";

const SelectCandidate = ({
  selectCandidateHandler,
  newReport,
  nextPageHandler,
}) => {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  const [candidatesList, setCandidatesList] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  useEffect(() => {
    getCandidates(token).then((response) => {
      setCandidatesList(response);
      setFilteredCandidates(response);
    });
    setLoading(false);
  }, [token]);
  const onTyping = (e) => {
    const searchString = e.target.value.trim().toLowerCase();
    setFilteredCandidates(
      candidatesList.filter((candidate) =>
        candidate.name.toLowerCase().includes(searchString)
      )
    );
  };
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="ps-4">
          <div className="mb-3">
            <SearchSection onTypingHandler={onTyping} title={"Candidates"} />
          </div>
          <Row>
            {filteredCandidates.map((candidate) => (
              <SingleCandidate
                candidate={candidate}
                key={candidate.id}
                selectCandidateHandler={selectCandidateHandler}
                newReport={newReport}
              />
            ))}
            <div className="d-flex justify-content-end my-5 container">
              <Button
                variant="primary"
                disabled={newReport.candidateName ? false : true}
                onClick={nextPageHandler}
              >
                Next
              </Button>
            </div>
          </Row>
        </div>
      )}
    </div>
  );
};
export default SelectCandidate;
