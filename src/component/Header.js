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

const MainNavbar = styled(Navbar)`
  background-color: #fff;
  box-shadow: 0 0 2px #ccc;
`;

function Header(props) {
  const style = props.sticky ? {position: 'sticky', top: 0} : {};

  return (
    <header style={style}>
      <MainNavbar expand="lg">
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
              <Nav.Item>
                <NavLink to="/examples">Examples</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/community">Community</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/help">Help</NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </MainNavbar>
    </header>
  );
}

export default Header;
