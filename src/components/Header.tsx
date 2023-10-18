// components/Header.tsx

import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

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
  // const handleSubMenuHover = (submenuId: string) => {
  //   const submenu = document.getElementById(submenuId);
  //   if (submenu) {
  //     submenu.style.display = "block";
  //   }
  // };

  // const handleSubMenuLeave = (submenuId: string) => {
  //   const submenu = document.getElementById(submenuId);
  //   if (submenu) {
  //     submenu.style.display = "none";
  //   }
  // };

  return (
    <HeaderContainer>
      <Logo>Your Name</Logo>
      <Navigation>
        <NavLink
        // onMouseEnter={() => handleSubMenuHover("about-submenu")}
        // onMouseLeave={() => handleSubMenuLeave("about-submenu")}
        >
          About
          <SubMenu id="about-submenu">
            <SubMenuItem>
              <Link href="/about#career">
                <SubMenuLink>Career</SubMenuLink>
              </Link>
            </SubMenuItem>
            <SubMenuItem>
              <Link href="/about#projects">
                <SubMenuLink>Projects</SubMenuLink>
              </Link>
            </SubMenuItem>
            <SubMenuItem>
              <Link href="/about#interests">
                <SubMenuLink>Interests</SubMenuLink>
              </Link>
            </SubMenuItem>
          </SubMenu>
        </NavLink>
        {/* <NavLink
          onMouseEnter={() => handleSubMenuHover("work-submenu")}
          onMouseLeave={() => handleSubMenuLeave("work-submenu")}
        >
          Work
          <SubMenu id="work-submenu">
            <SubMenuItem>
              <Link href="/work#companies">
                <SubMenuLink>Companies</SubMenuLink>
              </Link>
            </SubMenuItem>
            <SubMenuItem>
              <Link href="/work#projects">
                <SubMenuLink>Projects</SubMenuLink>
              </Link>
            </SubMenuItem>
          </SubMenu>
        </NavLink> */}
        {/* <NavLink
          onMouseEnter={() => handleSubMenuHover("contact-submenu")}
          onMouseLeave={() => handleSubMenuLeave("contact-submenu")}
        >
          Contact
          <SubMenu id="contact-submenu">
            <SubMenuItem>
              <Link href="/contact#linkedin">
                <SubMenuLink>LinkedIn</SubMenuLink>
              </Link>
            </SubMenuItem>
            <SubMenuItem>
              <Link href="/contact#github">
                <SubMenuLink>GitHub</SubMenuLink>
              </Link>
            </SubMenuItem>
          </SubMenu>
        </NavLink> */}
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
