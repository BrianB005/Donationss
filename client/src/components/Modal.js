import React from "react";
import styled from "styled-components";

const Modal = ({ children ,onClick}) => {
  return <MyModal onClick={onClick}>{children}</MyModal>;
};
const MyModal = styled.div`
  width: 100vw;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: absolute;
  display: grid;
  place-items: center;
  z-index: 10000;
`;

export default Modal;
