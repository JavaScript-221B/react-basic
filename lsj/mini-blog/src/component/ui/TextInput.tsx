import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea<{ height?: string }>`
  width: calc(100% - 2rem);
  ${(props) => props.height && `height: ${props.height}px;`}
  padding: 1rem;
  font-size: 1rem;
  line-height: 1.25rem;
`;

type TextInputProps = {
  height?: string;
  value: string;
  onChange: (event: any) => void;
};

function TextInput({ height, value, onChange }: TextInputProps) {
  return <StyledTextArea height={height} value={value} onChange={onChange} />;
}

export default TextInput;
