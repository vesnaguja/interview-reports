import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

import LoginPage from "./pages/LoginPage/LoginPage";
import HomePage from "./pages/HomePage/HomePage.jsx";
import SingleCandidate from "./pages/SingleCandidate/SingleCandidate";

import "bootstrap/dist/css/bootstrap.min.css";
import ReportsPage from "./pages/ReportsPage/ReportsPage";
import CreateReportPage from "./pages/CreateReportPage/CreateReportPage";

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
        <Route exact path="/interview-reports">
          {token ? <HomePage handleToken={handleToken} /> : <Redirect to="/interview-reports/login" />}
        </Route>

        <Route exact path="/interview-reports/login">
          {!token ? <LoginPage handleToken={handleToken} /> : <Redirect to="/interview-reports" />}
        </Route>

        <Route path="/interview-reports/candidate/:id">{token ? <SingleCandidate handleToken={handleToken} /> : <Redirect to="/interview-reports/login" />}</Route>

        <Route path="/interview-reports/reports">{token ? <ReportsPage handleToken={handleToken} /> : <Redirect to="/interview-reports/login" />}</Route>

        <Route path="/interview-reports/createreport">{token ? <CreateReportPage handleToken={handleToken} /> : <Redirect to="/interview-reports/login" />}</Route>
      </Switch>
    </Router>
  );
}

export default App;
