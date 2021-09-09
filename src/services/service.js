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