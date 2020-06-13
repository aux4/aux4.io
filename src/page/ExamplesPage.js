import React from "react";
import Page from "../component/Page";
import Header from "../component/Header";
import Document from "../component/Document";
import ExamplesWiki from "../wiki/ExamplesWiki";

export default function ExamplesPage() {
  return (
    <div>
      <Header />
      <Page title="Examples">
        <Document>{ExamplesWiki.text}</Document>
      </Page>
    </div>
  );
}
