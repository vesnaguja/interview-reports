import { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CandidateGrid from "./CandidateGrid";
import SearchSection from "./SearchSection";
import { Container } from "react-bootstrap";
import { getCandidates } from "../../../services/service";

const HomePage = ({ token }) => {

  const [candidatesList, setCandidatesList] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);

  useEffect(() => {
    getCandidates(token).then((response) =>{
      setCandidatesList(response);
      setFilteredCandidates(response)
    });
  }, [token]);

 const onTyping = (e) => {
   const searchString = e.target.value.trim().toLowerCase();
   setFilteredCandidates(candidatesList.filter(candidate => candidate.name.toLowerCase().includes(searchString)))
 }


  return (
    <>
      <Header />
      <Container  className="my-5">
        <SearchSection onTypingHandler={onTyping} />
        <CandidateGrid token={token} filteredCandidates={filteredCandidates} />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
