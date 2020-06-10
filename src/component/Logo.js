import React from "react";
import styled from 'styled-components';
import logo24 from "../static/img/rocket-24.png";
import logo24white from "../static/img/rocket-24-white.png";
import logo32 from "../static/img/rocket-32.png";
import logo32white from "../static/img/rocket-32-white.png";
import logo48 from "../static/img/rocket-48.png";
import logo48white from "../static/img/rocket-48-white.png";

const Text = styled.span`
  font-family: 'Lexend Tera', sans-serif;
  font-size: ${props => props.size - props.size * 0.1}px;
  line-height: ${props => props.size}px;
  float: right;
  color: ${props => props.white ? '#fff' : '#000'};
`;

const Image = styled.img`
  float: left;
`;

function Logo(props) {
  const size = props.size === 'small' ? 24 : props.size === 'medium' ? 32 : 48;
  const logo = getLogo(props.white, props.size);

  return (
    <div style={{display: "inline-block"}}>
      <Image src={logo} alt="logo" />
      <Text white={props.white} size={size}>aux4</Text>
    </div>
  );
}

function getLogo(white, size) {
  if (white) {
    return size === 'small' ? logo24white : size === 'medium' ? logo32white : logo48white;
  }
  return size === 'small' ? logo24 : size === 'medium' ? logo32 : logo48;
}

export default Logo;
