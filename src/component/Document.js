import React from "react";
import styled from "styled-components";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLink } from '@fortawesome/free-solid-svg-icons';
import {H1, H2, H3, H4, H5, H6} from "./Heading";

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
    <ReactMarkdown source={props.children} renderers={{code: CodeRenderer, heading: HeadingRenderer}} />
  );
}

function HeadingRenderer(props) {
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

function CodeRenderer(props) {
  return (
    <SyntaxHighlighter language={props.language} style={tomorrow} customStyle={{margin: "20px 0"}} showLineNumbers>{props.value}</SyntaxHighlighter>
  );
}

export default Document;
