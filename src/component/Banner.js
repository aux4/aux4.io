import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const HomeBanner = styled.div`
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

function Banner() {
  return (
    <HomeBanner>
      <div>
        <Logo white />
        <Subtitle>high-level scripts</Subtitle>
      </div>
    </HomeBanner>
  );
}

export default Banner;
