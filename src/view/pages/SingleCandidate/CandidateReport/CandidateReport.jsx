import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Table, Container } from "react-bootstrap";
import { getReports } from "../../../../services/service";
import Report from "./Report";
import Loader from "../../../components/Loader/Loader";

const CandidateReport = () => {
  const token = localStorage.getItem("token");
  let { id } = useParams("id");
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);

    getReports(token, id).then((reportsData) => {
      setReports(reportsData);
    });
  }, [token, id]);

  return (
    <Container>
      <h3 className="mt-4 mb-3">Reports:</h3>
      {loading ? (
        <Loader />
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Company</th>
              <th>Interview date</th>
              <th colSpan="2">Status</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report) => {
              return <Report report={report} key={report.id} />;
            })}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default CandidateReport;
