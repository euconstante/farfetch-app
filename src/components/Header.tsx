import React, { useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { navLinks } from "../constants/data";
import Image from "next/image";

const HeaderContainer = styled.header`
  background-color: var(--white);
  color: var(--dark);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--grey);
  position: sticky;
  heigth: 5.6rem;
`;
const HeaderTitle = styled.h1`
  font-size: var(--font-size-md);
  font-weight: 300;
  text-transform: uppercase;
  margin-left: var(--space-md);
`;
const Logo = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  width: 100%;
`;

const Navigation = styled.nav`
  display: flex;
`;

const NavLink = styled.a`
  margin: 0 1rem;
  font-size: var(--font-size-xsm);
  color: var(--dark-gray-100);
  line-height: 1.375;
  text-transform: capitalize;
  font-weight: 350;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const SubMenu = styled.ul`
  list-style: none;
  padding: 0.5rem;
  position: absolute;
  top: 90%;
  left: 100;
  display: none;
  background-color: var(--white);
  border: 1px solid var(--dark);
  color: var(--dark);
  border-radius: 5px;
  &::before {
    content: "";
    position: absolute;
    top: -12px;
    left: 30%;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-bottom-color: var(--dark);
    border-top: 0;
    margin-left: -12px;
  }
  &::after {
    content: "";
    position: absolute;
    top: -11px;
    left: 30%;
    width: 0;
    height: 0;
    border: 11px solid transparent;
    border-bottom-color: var(--white);
    border-top: 0;
    margin-left: -11px;
  }
`;

const SubMenuItem = styled.li`
  padding: 0.5rem 1rem;
  text-transform: capitalize;
`;

const SubMenuLink = styled.a`
  display: block;
  &:hover {
    text-decoration: underline;
  }
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
      <Link href="/" style={{ textDecoration: "none" }}>
        <Logo>
          <Image src="/logo.png" width={200} height={27} alt="farfetch logo" />{" "}
          <HeaderTitle>Bianca Guedert</HeaderTitle>
        </Logo>
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
