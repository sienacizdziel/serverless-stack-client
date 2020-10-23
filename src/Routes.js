import React from "react";
import { Route, Switch } from "react-router-dom"; // switch renders first matching route 
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {/* Finally, catch all unmatched routes */}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}