import { useState, useEffect } from "react";
import SingleCompany from "./SingleCompany";
import SearchSection from "../../../components/SearchSection";
import { Row, Button } from "react-bootstrap";
import { getCompanies } from "../../../../services/service";
import Loader from "../../../components/Loader/Loader";

const SelectCompany = ({ selectCompanyHandler, newReport, nextPageHandler, prevPageHandler }) => {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  const [companiesList, setCompaniesList] = useState([]);
  const [filteredCompanies, setFilteredCompanies] = useState([]);

  useEffect(() => {
    getCompanies(token).then((response) => {
      setCompaniesList(response);
      setFilteredCompanies(response);
    });
    setLoading(false);
  }, [token]);

  const onTyping = (e) => {
    const searchString = e.target.value.trim().toLowerCase();
    setFilteredCompanies(companiesList.filter((company) => company.name.toLowerCase().includes(searchString)));
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="ps-4">
          <div className="mb-3">
            <SearchSection onTypingHandler={onTyping} title={"Companies"} />
          </div>
          <Row>
            {filteredCompanies.map((company) => (
              <SingleCompany company={company} key={company.id} selectCompanyHandler={selectCompanyHandler} newReport={newReport} />
            ))}

            <div className="d-flex justify-content-between my-5 container">
              <Button variant="secondary" onClick={prevPageHandler}>
                Back
              </Button>
              <Button variant="primary" disabled={newReport.companyName ? false : true} onClick={nextPageHandler}>
                Next
              </Button>
            </div>
          </Row>
        </div>
      )}
    </div>
  );
};

export default SelectCompany;
