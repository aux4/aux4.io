import React from "react";
import styled from "styled-components";
import {Container} from "react-bootstrap";

const Title = styled.div`
  padding: 20px 0;
  font-family: 'Lexend Tera', sans-serif;
  background-color: #3d464f;
  color: #fff;
`;

const Body = styled.div`
  margin-top: 20px;
`;

const H1 = styled.h1`
  font-size: 40px;
`;

function Page(props) {
  return (
    <div>
      {props.title && <Title>
        <Container>
          <H1>{props.title}</H1>
        </Container>
      </Title>}
      <Body>
        <Container>
          {props.children}
        </Container>
      </Body>
    </div>
  );
}

export default Page;
