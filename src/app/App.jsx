import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginPage from "./front/LoginPage/LoginPage";
import HomePage from "./front/HomePage/HomePage";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const handleUser = (userObject) => {
    setUser(userObject);
    localStorage.setItem("user", JSON.stringify(userObject));
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage user={user} />
        </Route>
        <Route exact path="/login">
          <LoginPage user={user} handleUser={handleUser} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
