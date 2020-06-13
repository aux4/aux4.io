import React from "react";
import Page from "../component/Page";
import Header from "../component/Header";
import {H1} from "../component/Heading";
import {title} from "../component/Website";
import {Badge} from "react-bootstrap";

export default function HelpPage() {
  title('help');

  return (
    <div>
      <Header />
      <Page title="Help">
        <H1>Questions?</H1>
        <p>
          If you find any bug,
          please <a href="https://github.com/aux4/aux4/issues" rel="noopener noreferrer" target="_blank">ask your question on Github</a>.
        </p>
        <p>Use the label <Badge pill variant="info">question</Badge></p>
        <H1>Bugs?</H1>
        <p>
          If you find any bug,
          please <a href="https://github.com/aux4/aux4/issues" rel="noopener noreferrer" target="_blank">report it on Github</a>. We'll fix that
          as soon as possible.
        </p>
        <p>Use the label <Badge pill variant="danger">bug</Badge></p>
        <H1>New Features?</H1>
        <p>
          We will be glad to know about the features you are looking for to have in the aux4,
          please <a href="https://github.com/aux4/aux4/issues" rel="noopener noreferrer" target="_blank">add your suggestion to Github</a>.
        </p>
        <p>Use the label <Badge pill variant="success">proposal</Badge></p>
      </Page>
    </div>
  );
}
