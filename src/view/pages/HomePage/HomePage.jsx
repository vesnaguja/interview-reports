import { useState, useEffect, Fragment } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CandidateGrid from "./CandidateGrid";
import SearchSection from "./SearchSection";
import { Container } from "react-bootstrap";
import { getCandidates } from "../../../services/service";
import Loader from "../../components/Loader/Loader";

const HomePage = () => {
  const [candidatesList, setCandidatesList] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    getCandidates(token).then((response) => {
      setLoading(false);
      setCandidatesList(response);
      setFilteredCandidates(response);
    });
  }, []);

  const onTyping = (e) => {
    const searchString = e.target.value.trim().toLowerCase();
    setFilteredCandidates(candidatesList.filter((candidate) => candidate.name.toLowerCase().includes(searchString)));
  };

  return (
    <>
      <Header />
      <Container className="my-5">
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <SearchSection onTypingHandler={onTyping} />
            <CandidateGrid filteredCandidates={filteredCandidates} />
          </Fragment>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
