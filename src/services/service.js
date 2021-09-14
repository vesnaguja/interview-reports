import Candidate from "../entities/Candidate";
import Reports from "../entities/Reports";

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
