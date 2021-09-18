import { useState, useEffect, Fragment } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CandidateGrid from "./CandidateGrid";
import SearchSection from "../../components/SearchSection";
import { Container } from "react-bootstrap";
import { getCandidates } from "../../../services/service";
import Loader from "../../components/Loader/Loader";

const HomePage = ({ token }) => {
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
    setFilteredCandidates(
      candidatesList.filter((candidate) =>
        candidate.name.toLowerCase().includes(searchString)
      )
    );
  };

  return (
    <>
      <Header title={"Interview Reports"} />
      <Container className="my-5">
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <SearchSection onTypingHandler={onTyping} title={"Candidates"} />
            <CandidateGrid
              token={token}
              filteredCandidates={filteredCandidates}
            />
          </Fragment>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
