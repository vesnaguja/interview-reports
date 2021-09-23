import Candidate from "../entities/Candidate";
import Reports from "../entities/Reports";
import Company from "../entities/Company";

export const loginUser = (mail, pass) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: mail,
      password: pass,
    }),
  };

  return fetch("http://localhost:3333/login", options).then((response) =>
    response.json()
  );
};

export const getCandidates = (token) => {

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch("http://localhost:3333/api/candidates", options)
    .then((response) => response.json())
    .then((candidates) =>
      candidates.map((candidate) => {
        return new Candidate(
          candidate.id,
          candidate.name,
          candidate.email,
          candidate.birthday,
          candidate.education
        );
      })
    );
};

export const getSingleCandidate = (token, id) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(`http://localhost:3333/api/candidates?id=${id}`, options)
    .then((response) => response.json())
    .then((candidateArray) => {
      const c = candidateArray[0];
      return new Candidate(c.id, c.name, c.email, c.birthday, c.education);
    });
};

export const getReports = (token, id) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(`http://localhost:3333/api/reports?candidateId=${id}`, options)
    .then((response) => response.json())
    .then((reports) =>
      reports.map((r) => {
        return new Reports(
          r.id,
          r.candidateId,
          r.candidateName,
          r.companyId,
          r.companyName,
          r.interviewDate,
          r.phase,
          r.status,
          r.note
        );
      })
    );
};

export const getAllReports = (token) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(`http://localhost:3333/api/reports`, options)
    .then((response) => response.json())
    .then((reports) =>
      reports.map((r) => {
        const report = new Reports(
          r.id,
          r.candidateId,
          r.candidateName,
          r.companyId,
          r.companyName,
          r.interviewDate,
          r.phase,
          r.status,
          r.note
        );

        return report;
      })
    );
};

export const deleteReportFunction = (token, id) => {
  const options = {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch(`http://localhost:3333/api/reports/${id}`, options)
    .then((response) => response.json())
    .then(
      (r) =>
      new Reports(
        r.id,
        r.candidateId,
        r.candidateName,
        r.companyId,
        r.companyName,
        r.interviewDate,
        r.phase,
        r.status,
        r.note
      )
    );
};


export const getCompanies = (token) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch("http://localhost:3333/api/companies", options)
    .then((response) => response.json())
    .then((companies) =>
      companies.map((company) => {
        return new Company(
          company.id,
          company.name,
          company.email
        );
      })
    );
};



export const postNewReport = (token, report) => {
  if(!(report instanceof Reports)) return;
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(report),
  };
  return fetch("http://localhost:3333/api/reports", options).then((response) => response.json())
};