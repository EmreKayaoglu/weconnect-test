import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import LoadingPage from "./pages/Loading";
import Main from "./pages/Main";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LoadingPage} />
        <Route path="/home" exact component={Main} />
      </Switch>
    </Router>
  );
}
