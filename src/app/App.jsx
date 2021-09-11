import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import LoginPage from "../app/front/LoginPage/LoginPage";
import HomePage from "../app/front/HomePage/HomePage.jsx";
import SingleCandidate from "./front/HomePage/SingleCandidate/SingleCandidate";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleToken = (tokenString) => {
    setToken(tokenString);

    if (tokenString === null) {
      localStorage.removeItem("token");
    } else {
      localStorage.setItem("token", tokenString);
    }
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {token ? (
            <HomePage token={token} handleToken={handleToken} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>

        <Route exact path="/login">
          {!token ? (
            <LoginPage token={token} handleToken={handleToken} />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
