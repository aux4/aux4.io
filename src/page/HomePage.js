import React from "react";
import styled from "styled-components";
import {title} from "../component/Website";
import Header from "../component/Header";
import Banner from "../component/Banner";
import Section from "../component/Section";

const SmallContainer = styled.div`
  max-width: 760px;
  width: 100%;
`;

function HomePage() {
  title('high-level scripts');

  return (
    <div style={{minHeight: '100%'}}>
      <Banner />
      <Header sticky />
      <Section title="Transform your messy scripts into a CLI">
        <SmallContainer>
          <p>
            aux4 is a Command-line Interface (CLI) generator responsible for organizing and documenting
            the scripts you are using every day, by providing a simple interface it can transform a complex
            set of scripts into a powerful tool, very easy to use and perfect for sharing with your team.
          </p>
        </SmallContainer>
      </Section>
      <Section title="Stop wasting time doing repetitive tasks">
        <SmallContainer>
          <p>
            You are probably doing the same task multiple times in the day, like running few scripts for compiling,
            testing, deploying, sending messages, calling REST endpoints, or any other activity.
            It is time to automate your job, the few seconds you are spending on those tasks sum a few hours in the week.
          </p>
        </SmallContainer>
      </Section>
      <Section title="Never copy and paste scripts again">
        <SmallContainer>
          <p>
            If you are copying and pasting scripts, stop, you can use a Command-line Interface (CLI)
            and have it on hand anytime you need it. Aux4 allows you to organize and document your scripts in minutes.
          </p>
        </SmallContainer>
      </Section>
      <Section title="Get rid of your wiki pages">
        <SmallContainer>
          <p>
            Do not write Wiki pages documenting how to use your scripts, aux4 shows very good documentation
            for every command, and it makes your complicated scripts look very simple and intuitive for the user.
          </p>
        </SmallContainer>
      </Section>
      <Section title="Give it a try">
        <SmallContainer>
          <p>
            You will figure out how this tool is a game-changer only after you start using it.
          </p>
        </SmallContainer>
      </Section>
    </div>
  );
}

export default HomePage;
