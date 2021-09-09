import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginPage from "../app/front/LoginPage/LoginPage";
import HomePage from "../app/front/HomePage/HomePage.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleUser = (userObject) => {
    setToken(userObject);
    localStorage.setItem("token", userObject.accessToken);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage token={token} />
        </Route>

        <Route exact path="/login">
          <LoginPage token={token} handleUser={handleUser} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
