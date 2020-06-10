import React from "react";
import {title} from "../component/Website";
import Page from "../component/Page";
import Document from "../component/Document";
import ReferenceWiki from "../wiki/ReferenceWiki";
import Header from "../component/Header";

function LearnPage() {
  title('learn');

  return (
    <div>
      <Header />
      <Page title="Learn">
        <Document>
          {ReferenceWiki.text}
        </Document>
      </Page>
    </div>
  );
}

export default LearnPage;
