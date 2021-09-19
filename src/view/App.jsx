import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage.jsx";
import SingleCandidate from "./pages/SingleCandidate/SingleCandidate";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleToken = (tokenString) => {

    if(!tokenString) return;

    setToken(tokenString);
    localStorage.setItem("token", tokenString);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {token ? <HomePage handleToken={handleToken} /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/login">
          {!token ? <LoginPage handleToken={handleToken} /> : <Redirect to="/" />}
        </Route>

        <Route path="/candidate/:id">
          {token ? <SingleCandidate /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
