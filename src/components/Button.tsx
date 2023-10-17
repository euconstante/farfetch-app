// Button.tsx

import React from "react";
import styled from "@emotion/styled";

const ButtonContainer = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
  outline: none;

  &.primary {
    background-color: #0070f3;
    color: #fff;
  }

  &.secondary {
    background-color: #ccc;
    color: #333;
  }

  &:hover {
    background-color: #0050c9;
  }
`;

type ButtonProps = {
  variant: "primary" | "default" | "secondary";
  onClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ variant, onClick, children }) => {
  return (
    <ButtonContainer className={variant} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
