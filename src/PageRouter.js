import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./page/HomePage";
import LearnPage from "./page/LearnPage";

function PageRouter() {
  return (
    <Switch>
      <Route path="/learn">
        <LearnPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}

export default PageRouter;
