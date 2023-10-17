// src/components/Header.tsx

import React from "react";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
`;

const Navigation = styled.nav``;

const NavLink = styled.a`
  color: #fff;
  margin: 0 1rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>Your Name</Logo>
      <Navigation>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#portfolio">Portfolio</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
