import React from "react";
import styled from "styled-components";

const Banner = styled.div`
  padding: 20px;
  min-height: 300px;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 20px;
  
  background-color: ${props => props.black ? '#3d464f' : 'transparent'};
  color: ${props => props.black ? '#fff' : 'inherit'};
`;

const Subtitle = styled.h2`
  margin-bottom: 20px; 
  font-family: 'Open Sans', sans-serif;
`;

function Section(props) {
  return (
    <Banner black={props.black}>
      <div>
        <Subtitle>{props.title}</Subtitle>
        {props.children}
      </div>
    </Banner>
  );
}

export default Section;
