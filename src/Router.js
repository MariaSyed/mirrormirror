import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reflection from "./screens/Reflection";
import Login from "./screens/Login";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/reflect">
          <Reflection />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};
