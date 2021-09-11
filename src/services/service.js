export const loginUser = (mail, pass) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: mail, password: pass }),
  };

  return fetch("http://localhost:3333/login", options).then((response) => response.json());
};


export const getCandidates = (token) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  return fetch("http://localhost:3333/api/candidates", options).then((response) => response.json());
};


export const getSingleCandidate = (token, id) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return fetch(`http://localhost:3333/api/candidates?id=${id}`, options).then((response) => response.json())
  .then(candidateArray => {
    const c = candidateArray[0];
    return new Candidate(c.id, c.name, c.email, c.birthday, c.education);
  })
}