import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-width: 1px;
  border-radius: 0.5rem;
  cursor: pointer;
`;

type ButtonProps = {
  title?: string;
  onClick: () => void;
};

function Button({ title, onClick }: ButtonProps) {
  return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default Button;
