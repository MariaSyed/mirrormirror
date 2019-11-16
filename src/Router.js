import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reflection from "./screens/Reflection";

export default () => {
  return (
    <Router>
      <Switch>
        <Route path="/reflect">
          <Reflection />
        </Route>
      </Switch>
    </Router>
  );
};
