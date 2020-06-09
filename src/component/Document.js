import React from "react";
import styled from "styled-components";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLink } from '@fortawesome/free-solid-svg-icons';

const H1 = styled.h1`
  font-weight: 300;
  margin-top: 30px;
`;
const H2 = styled.h2`
  font-weight: 300;
  margin-top: 2em;
`;
const H3 = styled.h3``;
const H4 = styled.h4``;
const H5 = styled.h5``;
const H6 = styled.h6``;

const LinkIcon = styled.a`
  outline: none;
  color: #999;
  
  &:hover {
    color: #666;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 40%;
  font-weight: normal;
`;

function Document(props) {
  return (
    <ReactMarkdown source={props.children} renderers={{code: Code, heading: Heading}} />
  );
}

function Heading(props) {
  const level = props.level;
  const children = props.children;

  const id = children[0].props.value.toLowerCase().replace(/\s+/g, '-');
  const link = `#${id}`;

  const icon = (
    <LinkIcon name={id} href={link}>
      <Icon size="xs" icon={faLink} />
    </LinkIcon>
  );

  const render = (Component) => (
    <Component>{children} {icon}</Component>
  );

  switch (level) {
    case 1:
      return render(H1);
    case 2:
      return render(H2);
    case 3:
      return render(H3);
    case 4:
      return render(H4);
    case 5:
      return render(H5);
    case 6:
      return render(H6);
    default:
      return render(H6);
  }
}

function Code(props) {
  return (
    <SyntaxHighlighter language={props.language} style={tomorrow} showLineNumbers>{props.value}</SyntaxHighlighter>
  );
}

export default Document;
