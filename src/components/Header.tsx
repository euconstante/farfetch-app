import React, { useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { navLinks } from "../constants/data";

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

const Navigation = styled.nav`
  display: flex;
`;

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
  top: 100;
  left: 100;
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
  const [hoveredSubMenu, setHoveredSubMenu] = useState<string | null>(null);

  const handleSubMenuHover = (submenuId: string) => {
    setHoveredSubMenu(submenuId);
  };

  const handleSubMenuLeave = () => {
    setHoveredSubMenu(null);
  };

  return (
    <HeaderContainer>
      <Link href="/">
        {" "}
        <Logo>Your Name</Logo>
      </Link>
      <Navigation>
        {navLinks.map((link, index) => (
          <div
            key={index}
            onMouseEnter={() => handleSubMenuHover(link.name)}
            onMouseLeave={handleSubMenuLeave}
          >
            <NavLink href={link.path}>{link.name}</NavLink>
            <SubMenu
              id={link.name}
              style={{
                display: hoveredSubMenu === link.name ? "block" : "none",
              }}
            >
              {link.submenuId.map((sublink, subIndex) => (
                <SubMenuItem key={subIndex}>
                  <SubMenuLink href={`${link.path}#${sublink}`}>
                    {sublink}
                  </SubMenuLink>
                </SubMenuItem>
              ))}
            </SubMenu>
          </div>
        ))}
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
