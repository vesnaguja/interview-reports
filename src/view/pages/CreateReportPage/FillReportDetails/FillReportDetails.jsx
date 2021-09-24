import { useState } from "react";
import { Row, Button, Container, Col } from "react-bootstrap";
import { postNewReport } from "../../../../services/service";
import { useHistory } from "react-router-dom";
import Reports from "../../../../entities/Reports";

const getTodayDate = () => {
  const today = new Date();
  const [month, day, year] = [today.toLocaleString("default", { month: "2-digit" }), today.getDate(), today.getFullYear()];

  return `${year}-${month}-${day}`;
};

const SelectCandidate = ({ newReport, prevPageHandler }) => {
  const token = localStorage.getItem("token");
  const [interviewDate, setInterviewDate] = useState("");
  const [phase, setPhase] = useState("select");
  const [status, setStatus] = useState("select");
  const [note, setNote] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    // proveri da je sve popunjeno
    if (interviewDate === "" || phase === "select" || status === "select" || note === "") return;

    const candidateId = newReport.candidateId;
    const candidateName = newReport.candidateName;
    const companyId = newReport.companyId;
    const companyName = newReport.companyName;

    const interDate = new Date(interviewDate).toString();

    const report = new Reports(null, candidateId, candidateName, companyId, companyName, interDate, phase, status, note);

    postNewReport(token, report); /*.then((data) =>
      console.log(data)
    );*/

    history.push("/reports");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Row className="mb-5">
          <Col sm={12} lg={4} className="mb-2">
            <label className="text-muted mb-0">Interview Date:</label>
            <input
              type="date"
              value={interviewDate}
              max={getTodayDate()}
              className="w-100 border rounded p-1"
              required
              onChange={(e) => setInterviewDate(e.target.value)}
            />
          </Col>

          <Col sm={12} lg={4} className="mb-2">
            <label className="text-muted mb-0">Phase:</label>
            <select value={phase} className="w-100 border rounded p-1" onChange={(e) => setPhase(e.target.value)}>
              <option value="select" disabled hidden>
                Choose phase
              </option>
              <option value="cv">cv</option>
              <option value="hr">hr</option>
              <option value="tech">tech</option>
              <option value="final">final</option>
            </select>
          </Col>

          <Col sm={12} lg={4} className="mb-2">
            <label className="text-muted mb-0">Status:</label>
            <select value={status} className="w-100 border rounded p-1" onChange={(e) => setStatus(e.target.value)}>
              <option value="select" disabled hidden>
                Choose status
              </option>
              <option value="passed">passed</option>
              <option value="declined">declined</option>
            </select>
          </Col>
        </Row>

        <Row>
          <label className="text-muted">Notes:</label>
          <textarea required value={note} onChange={(e) => setNote(e.target.value)}></textarea>
        </Row>

        <Row>
          <div className="d-flex justify-content-between my-5 container">
            <Button variant="secondary" onClick={prevPageHandler}>
              Back
            </Button>

            <Button type="submit" variant="primary">
              Submit
            </Button>
          </div>
        </Row>
      </form>
    </Container>
  );
};

export default SelectCandidate;
