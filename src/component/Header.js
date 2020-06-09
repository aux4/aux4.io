import React from "react";
import styled from "styled-components";
import Logo from "./Logo";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavLink = styled(Link)`
  display: block;
  padding: .5rem 1rem;
  padding-right: .5rem;
  padding-left: .5rem;
  font-size: 15px;
  color: rgba(0,0,0,.5);
  
  &:hover {
    color: rgba(0,0,0,.7);
    text-decoration: none;
  }
`;

function Header() {
  return (
    <header>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Logo size="small" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <Nav.Item>
                <NavLink to="/learn">Learn</NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
