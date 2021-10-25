import React, { Fragment, useState, useEffect, useCallback } from "react";
import { getAllReports } from "../../../services/service";
import { BsPlusCircleFill } from "react-icons/bs";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Loader from "../../components/Loader/Loader";
import { Container } from "react-bootstrap";
import SearchSection from "../../components/SearchSection";
import SingleReport from "./SingleReport";
import "./ReportsPage.css";
import { Link } from "react-router-dom";

const ReportsPage = ({ handleToken }) => {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(true);
  const [reportsList, setReportsList] = useState([]);
  const [filteredReports, setFilteredReports] = useState([]);

  const loadingReports = useCallback(() => {
    setLoading(false);
    getAllReports(token).then((response) => {
      setReportsList(response);
      setFilteredReports(response);
    });
  }, [token]);

  useEffect(() => {
    loadingReports();
  }, [loadingReports]);

  const onTyping = (e) => {
    const searchString = e.target.value.trim().toLowerCase();
    setFilteredReports(
      reportsList.filter(
        (report) => report.candidateName.toLowerCase().includes(searchString) || report.companyName.toLowerCase().includes(searchString)
      )
    );
  };

  return (
    <Fragment>
      <Header title={"Reports Administration"} handleToken={handleToken} />
      <Container className="mb-5">
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <SearchSection onTypingHandler={onTyping} title={"Reports"} />
            {filteredReports.map((report) => (
              <SingleReport report={report} key={report.id} loadingReports={loadingReports} />
            ))}
          </Fragment>
        )}
        <Link to="/interview-reports/createreport">
          <button className="btn btn-floating" id="creating-report-btn">
            <BsPlusCircleFill className="bg-white text-primary rounded-circle" id="creating-report-btn" size="50px" />
          </button>
        </Link>
      </Container>
      <Footer />
    </Fragment>
  );
};

export default ReportsPage;
