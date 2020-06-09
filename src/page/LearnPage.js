import React from "react";
import {title} from "../component/Website";
import Page from "../component/Page";
import Document from "../component/Document";
import ReferenceWiki from "../wiki/ReferenceWiki";

function LearnPage() {
  title('learn');

  return (
    <Page title="Learn">
      <Document>
        {ReferenceWiki.text}
      </Document>
    </Page>
  );
}

export default LearnPage;
