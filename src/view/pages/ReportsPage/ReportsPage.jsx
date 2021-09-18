import React, { Fragment, useState, useEffect } from "react";
import { getAllReports } from "../../../services/service";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";

import { Container } from "react-bootstrap";
import SearchSection from "../HomePage/SearchSection";
import SingleReport from "./SingleReport";

const ReportsPage = ({ token }) => {
  const [reportsList, setReportsList] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
    getAllReports(token).then((response) => {
      console.log(response);
      setReportsList(response);
      setFilteredReports(response);
    });
  }, [token]);

  const onTyping = (e) => {
    const searchString = e.target.value.trim().toLowerCase();
    setFilteredReports(
      reportsList.filter(
        (report) =>
          report.candidateName.toLowerCase().includes(searchString) ||
          report.companyName.toLowerCase().includes(searchString)
      )
    );
  };

  return (
    <Fragment>
      <Header title={"Reports Administration"} />
      <Container>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <SearchSection onTypingHandler={onTyping} title={"Reports"} />
            {filteredReports.map((report) => (
              <SingleReport token={token} report={report} key={report.id} />
            ))}
          </Fragment>
        )}
      </Container>
      <Footer />
    </Fragment>
  );
};

export default ReportsPage;
