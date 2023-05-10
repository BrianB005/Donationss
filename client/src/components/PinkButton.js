import styled from "styled-components";
import React from "react";

const PinkButton = ({ onClick, title, disabled }) => {
  return (
    <Button onClick={onClick} disabled={disabled}>
      {title}
    </Button>
  );
};

const Button = styled.button`
  padding: 10px 30px 10px 30px;
  background-color: rgb(237, 30, 117);
  border: none;
  border-radius: 8px;
  width: fit-content;
  color: white;
  transition: all 0.7s ease-in-out;
  &:hover {
    border-radius: 20px;
    color: wheat;
  }
  &:disabled{
    background:gray ;
    cursor:not-allowed ;
  }
`;
export default PinkButton;
