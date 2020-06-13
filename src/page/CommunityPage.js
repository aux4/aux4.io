import React from "react";
import Page from "../component/Page";
import Header from "../component/Header";
import {H1} from "../component/Heading";

export default function CommunityPage() {
  return (
    <div>
      <Header />
      <Page title="Community">
        <H1>Articles</H1>
        <p>We can include your article about <strong>aux4</strong> here, please just share it with us on Twitter.</p>
        <H1>Videos</H1>
        <p>We can include your video about <strong>aux4</strong> here, please just share it with us on Twitter.</p>
        <H1>Improve</H1>
        <p>
          Feel free to contribute to our project on <a href="https://github.com/aux4/aux4" target="_blank">Github</a>,
          you can fork and create a pull request.
        </p>
        <H1>Bugs?</H1>
        <p>
          If you find any issues,
          please <a href="https://github.com/aux4/aux4/issues" target="_blank">report it on Github</a>. We'll fix that
          as soon as possible.
        </p>
        <H1>Twitter</H1>
        <p>
          Follow us on Twitter <a href="https://twitter.com/aux4io" target="_blank">@aux4io</a> or
          just use the <a href="https://twitter.com/hashtag/aux4io" target="_blank">#aux4io</a> hashtag to join the conversation.
        </p>
        <H1>Gitter</H1>
        <p>Join our <a href="https://gitter.im/aux4io/community" target="_blank">Gitter community</a>.</p>
        <H1>Donate</H1>
        <p>If you are happy to use <strong>aux4</strong> and you want to say thank you, please feel free to buy me a coffee!</p>
        <p>
          <a className="bmc-button" target="_blank" href="https://www.buymeacoffee.com/DavidSG">
            <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" />
            <span style={{marginLeft:"5px", fontSize:"28px !important"}}>Buy me a coffee</span>
          </a>
        </p>
      </Page>
    </div>
  );
}
