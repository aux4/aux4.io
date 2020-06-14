import React, {Suspense} from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./component/Header";
import Page from "./component/Page";

const HomePage = React.lazy(() => import("./page/HomePage"));
const LearnPage = React.lazy(() => import("./page/LearnPage"));
const CommunityPage = React.lazy(() => import("./page/CommunityPage"));
const ExamplesPage = React.lazy(() => import("./page/ExamplesPage"));
const HelpPage = React.lazy(() => import("./page/HelpPage"));

export default function PageRouter() {
  return (
    <Switch>
      <Route path="/learn">
        <Suspense fallback={<Loading />}>
          <LearnPage />
        </Suspense>
      </Route>
      <Route path="/community">
        <Suspense fallback={<Loading />}>
          <CommunityPage />
        </Suspense>
      </Route>
      <Route path="/examples">
        <Suspense fallback={<Loading />}>
          <ExamplesPage />
        </Suspense>
      </Route>
      <Route path="/help">
        <Suspense fallback={<Loading />}>
          <HelpPage />
        </Suspense>
      </Route>
      <Route path="/">
        <Suspense fallback={<Loading />}>
          <HomePage />
        </Suspense>
      </Route>
    </Switch>
  );
}

function Loading() {
  return (
    <div>
      <Header />
      <Page title="Loading..." />
    </div>
  );
}
