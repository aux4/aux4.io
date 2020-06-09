import React from "react";
import styled from "styled-components";
import {Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faGithub, faGitter, faLinkedin, faTwitter, faMedium } from '@fortawesome/free-brands-svg-icons';

const FooterBar = styled.footer`
  margin-top: 50px;
  padding: 20px;
  background-color: #3d464f;
  color: #fff;
  border-top: solid 1px #dcdcdc;
`;

const CopyrightBar = styled.div`
  padding: 0;
  padding-top: 40px;
  font-size: 14px;
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
`;

const Social = styled.a`
  margin-left: 10px;
  font-size: 24px;
  color: #fff;
  
  &:hover {
    color: #eee;
  }
`;

const SocialLinks = styled.div`
  text-align: right;
`;

function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterBar>
      <Container>
        <SocialLinks>
          <Social href="https://github.com/aux4" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </Social>
          <Social href="https://gitter.im/aux4io" target="_blank">
            <FontAwesomeIcon icon={faGitter} />
          </Social>
          <Social href="https://linkedin.com/aux4" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </Social>
          <Social href="https://twitter.com/aux4io" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </Social>
          <Social href="https://medium.com/aux4" target="_blank">
            <FontAwesomeIcon icon={faMedium} />
          </Social>
        </SocialLinks>
        <CopyrightBar>© Copyright {year} aux4. All rights reserved.</CopyrightBar>
      </Container>
    </FooterBar>
  );
}

export default Footer;
