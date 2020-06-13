import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const BlackBanner = styled.div`
  height: 500px;
  vertical-align: middle;
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAH0lEQVQYV2NkQAX/GZH4/xkYGBhhAmAOSBJEwDkgAQCCrgQEjpMcPgAAAABJRU5ErkJggg==') repeat #3d464f;
  background-color: #3d464f;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-family: 'Lexend Tera', sans-serif;
  font-size: 15px;
`;

const Block = styled.div`
  margin: 0 20px; 
`;

const qualities = [
  'awesome',
  'addictive',
  'amazing',
  'unique',
  'reliable'
];

function Banner() {
  const word = qualities[Math.floor(Math.random() * qualities.length)];

  return (
    <BlackBanner>
      <div>
        <Block>
          <Logo white />
          <Subtitle>high-level scripts</Subtitle>
        </Block>
      </div>
      <div style={{textAlign: 'right'}}>
        <Block>
          <Subtitle>free</Subtitle>
        </Block>
        <Block>
          <Subtitle>open source</Subtitle>
        </Block>
        <Block>
          <Subtitle>{word}</Subtitle>
        </Block>
      </div>
    </BlackBanner>
  );
}

export default Banner;
