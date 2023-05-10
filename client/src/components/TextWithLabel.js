import React from "react";
import styled from "styled-components";
const TextAreaWithLabel = ({
  label,
  placeholder,
  required,
  onChange,
  rows,
  value,
}) => {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        value={value}
        rows={rows}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: 10px;
`;
const Label = styled.h1`
  font-family: "Dm Sans";
  font-style: bold;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  margin-bottom: 14px;
  color: rgb(237, 30, 117);
`;
const Input = styled.textarea`
  background: rgba(217, 217, 217, 0.16);
  border: 0.611479px solid rgba(0, 0, 0, 0.1);
  border-radius: 5.10855px;
  padding: 12px 16px;
  font-family: "Dm Sans";

  font-weight: 500;
  font-size: 15px;
  line-height: 17px;
  color: #07174b;
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(0, 0, 0, 0.38);
  }
`;
export default TextAreaWithLabel;
