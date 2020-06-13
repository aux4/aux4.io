import React from "react";
import {Route, Switch} from "react-router-dom";
import HomePage from "./page/HomePage";
import LearnPage from "./page/LearnPage";
import CommunityPage from "./page/CommunityPage";
import ExamplesPage from "./page/ExamplesPage";

function PageRouter() {
  return (
    <Switch>
      <Route path="/learn">
        <LearnPage />
      </Route>
      <Route path="/community">
        <CommunityPage />
      </Route>
      <Route path="/examples">
        <ExamplesPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}

export default PageRouter;
