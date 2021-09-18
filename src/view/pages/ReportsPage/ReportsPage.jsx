import React, { Fragment, useState, useEffect } from "react";
import { getAllReports } from "../../../services/service";
import {BsPlusCircleFill} from "react-icons/bs";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import { Container } from "react-bootstrap";
import SearchSection from "../../components/SearchSection";
import SingleReport from "./SingleReport";
import "./ReportsPage.css";

const ReportsPage = ({ token }) => {
  const [reportsList, setReportsList] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadingReports();
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

  const loadingReports = () => {
    setLoading(false);
    getAllReports(token).then((response) => {
      console.log(response);
      setReportsList(response);
      setFilteredReports(response);
    });
  };

  return (
    <Fragment>
      <Header title={"Reports Administration"} />
      <Container className="mb-5">
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <SearchSection onTypingHandler={onTyping} title={"Reports"} />
            {filteredReports.map((report) => (
              <SingleReport
                token={token}
                report={report}
                key={report.id}
                loadingReports={loadingReports}
              />
            ))}
          </Fragment>
        )}
         <button className="btn btn-floating" id="creating-report-btn">
          <BsPlusCircleFill className="bg-white text-primary rounded-circle" id="creating-report-btn" size="50px" />
        </button>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default ReportsPage;
