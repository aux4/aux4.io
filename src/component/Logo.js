import React from "react";
import styled from 'styled-components';
import logo24 from "../static/img/rocket-24.png";
import logo32 from "../static/img/rocket-32.png";
import logo48 from "../static/img/rocket-48.png";

const Text = styled.span`
  font-family: 'Lexend Tera', sans-serif;
  font-size: ${props => props.size - props.size * 0.2}px;
  line-height: ${props => props.size}px;
  float: right;
`;

const Image = styled.img`
  float: left;
`;

function Logo(props) {
  const size = props.size === 'small' ? 24 : props.size === 'medium' ? 32 : 48;
  const logo = props.size === 'small' ? logo24 : props.size === 'medium' ? logo32 : logo48;

  return (
    <div>
      <Image src={logo} alt="logo" />
      <Text size={size}>aux4</Text>
    </div>
  );
}

export default Logo;
