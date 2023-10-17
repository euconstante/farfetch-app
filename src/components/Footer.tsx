// src/components/Footer.tsx

import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} Your Portfolio Name
    </FooterContainer>
  );
};

export default Footer;
