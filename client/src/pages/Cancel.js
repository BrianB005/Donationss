import React from "react";

import styled from "styled-components";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { switchPage } from "../redux/actions/activePageActions";
const Cancel = ({ showLinks, setShowLinks }) => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      {showLinks && <Modal onClick={() => setShowLinks(false)} />}
      <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
      <ContentWrapper>
        <Title>Oops! You've cancelled the donation transaction</Title>
        <Subtitle>Click the button below to go back to the home page!</Subtitle>
        <Link to="/">
          <Button onClick={() => dispatch(switchPage("home"))}>
            <div>
              <BsArrowLeft />
            </div>
            Back
          </Button>
        </Link>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  padding: 100px;
  display: flex;
  height: fit-content;
  align-items: center;
  flex-direction: column;
  height: 100%;

  @media screen and (max-width: 800px) {
    padding: 60px 20px;
  }
`;

const Title = styled.h1`
  font-family: "DM Serif Display";
  font-style: bold;
  font-weight: 800;
  max-width: 640px;
  font-size: 52px;
  line-height: 80px;
  color: #141414;
  margin-bottom: 20px;
  span {
    font-size: 62px;
    color: rgb(237, 30, 117);
  }

  @media screen and (max-width: 700px) {
    font-size: 40px;
    line-height: 40px;
    span {
      font-size: 42px;
    }
  }
  @media screen and (max-width: 500px) {
    font-size: 34px;
    line-height: 38px;
    span {
      font-size: 37px;
    }
  }
`;

const Subtitle = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 40px;
  color: #141414;
  margin-bottom: 20px;
  @media screen and (max-width: 700px) {
    font-size: 17px;
    line-height: 30px;
  }
`;

const Button = styled.button`
  margin-left: 50px;
  display: flex;
  align-items: center;

  padding: 10px 30px 10px 30px;
  background-color: #082032;
  color: #fff;
  transition: all 0.7s linear;
  border-radius: 8px;

  border: none;
  &:hover {
    opacity: 0.9;
    border-radius: 20px;
  }
  div {
    margin-right: 8px;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;
export default Cancel;
