import React from "react";
import styled from "@emotion/styled";
import { useState } from "react";

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
  position: relative;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const SubMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%;
  left: 0;
  display: none;
`;

const SubMenuItem = styled.li`
  padding: 0.5rem 1rem;
  background-color: #333;
  &:hover {
    background-color: #444;
  }
`;

const SubMenuLink = styled.a`
  color: #fff;
  text-decoration: none;
  display: block;
`;

const Header: React.FC = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <HeaderContainer>
      <Logo>Your Name</Logo>
      <Navigation>
        <NavLink
          onMouseEnter={() => setIsAboutOpen(true)}
          onMouseLeave={() => setIsAboutOpen(false)}
        >
          About
          {isAboutOpen && (
            <SubMenu>
              <SubMenuItem>
                <SubMenuLink href="#career">Career</SubMenuLink>
              </SubMenuItem>
              <SubMenuItem>
                <SubMenuLink href="#interests">Interests</SubMenuLink>
              </SubMenuItem>
            </SubMenu>
          )}
        </NavLink>
        <NavLink
          onMouseEnter={() => setIsPortfolioOpen(true)}
          onMouseLeave={() => setIsPortfolioOpen(false)}
        >
          Portfolio
          {isPortfolioOpen && (
            <SubMenu>
              <SubMenuItem>
                <SubMenuLink href="#companies">Companies</SubMenuLink>
              </SubMenuItem>
              <SubMenuItem>
                <SubMenuLink href="#projects">Projects</SubMenuLink>
              </SubMenuItem>
            </SubMenu>
          )}
        </NavLink>
        <NavLink
          onMouseEnter={() => setIsContactOpen(true)}
          onMouseLeave={() => setIsContactOpen(false)}
        >
          Contact
          {isContactOpen && (
            <SubMenu>
              <SubMenuItem>
                <SubMenuLink href="#linkedin">LinkedIn</SubMenuLink>
              </SubMenuItem>
              <SubMenuItem>
                <SubMenuLink href="#github">GitHub</SubMenuLink>
              </SubMenuItem>
              <SubMenuItem>
                <SubMenuLink href="#email">E-mail</SubMenuLink>
              </SubMenuItem>
            </SubMenu>
          )}
        </NavLink>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
