import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage.jsx";
import SingleCandidate from "./pages/SingleCandidate/SingleCandidate";

import "bootstrap/dist/css/bootstrap.min.css";
import ReportsPage from "./pages/ReportsPage/ReportsPage";

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

        <Route path="/candidate/:id">
          {token ? <SingleCandidate token={token} /> : <Redirect to="/login" />}
        </Route>

        <Route path="/reports">
          {token ? <ReportsPage token={token} /> : <Redirect to="/login" />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
