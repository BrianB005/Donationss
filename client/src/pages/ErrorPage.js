import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ErrorPage = () => {
  return (
    <Wrapper>
      <Content>
        <VerticalWrapper>
          <Text1>Oops....</Text1>
          <Text2>Page not found</Text2>
          <Text3>This Page doesn`t exist or was removed! Go back home.</Text3>
          <Link to="/">
            <BackHomeBtn>
              <AiOutlineArrowLeft style={{ marginRight: "8px" }} />
              Back to home
            </BackHomeBtn>
          </Link>
        </VerticalWrapper>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3wEJPrLg8VSGOCdkJUckok1uK-wvN8qwMZsaNwJYFQQ&s" />
      </Content>
      <Right1 />
      <Left1 />
      <Right2 />
      <Left2 />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const Image = styled.img`
  width: 50%;
  object-fit: cover;
  margin: auto;
  @media screen and (max-width: 900px) {
    width: 100px;
    margin-top: 20px;
    object-fit: center;
  }
`;
const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  width: 800px;
  z-index: 100;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    width: 90vw;
    margin: auto;
  }
`;
const Text1 = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  /* identical to box height */

  color: rgba(0, 0, 0, 0.69);
`;
const Text2 = styled.h2`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 48px;
  margin: 10px 0;
  color: rgba(0, 0, 0, 0.69);
`;
const Text3 = styled.h3`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.04em;
  color: #4b4b4b;
`;

const BackHomeBtn = styled.button`
  display: flex;
  align-items: center;

  border-radius: 5px;
  padding: 13px 26px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  border: 4px solid rgb(237, 30, 117);
  color: #082032;
  margin-top: 45px;
  width: fit-content;
  cursor: pointer;
  transition: all 0.6s linear;
  &:hover {
    border-radius: 18px;
  }
`;

const Right1 = styled.div`
  position: absolute;
  width: 894.9px;
  height: 901px;
  right: -491px;
  top: -750px;
  border-radius: 50%;
  z-index: 3;
  background: linear-gradient(
    180deg,
    rgb(230, 18, 117) 17.19%,
    rgb(237, 30, 117) 100%
  );

  @media screen and (max-width: 700px) {
    display: none;
  }
`;
const Right2 = styled.div`
  position: absolute;
  width: 1161.09px;
  height: 1169px;
  right: -680px;
  top: -900px;
  border-radius: 50%;
  background: linear-gradient(180deg, pink 17.19%, rgb(237, 30, 117) 100%);
  border-radius: 50%;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
const Left1 = styled.div`
  position: absolute;
  width: 493.69px;
  height: 497.06px;

  background: linear-gradient(180deg, white 17.19%, #07174b 100%);
  transform: rotate(-93.76deg);
  border-radius: 50%;
  left: -337.63px;
  z-index: 200;
  bottom: -230px;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
const Left2 = styled.div`
  position: absolute;
  width: 601.17px;
  height: 605.27px;
  left: -360.58px;
  bottom: -280px;
  background: linear-gradient(180deg, pink 17.19%, rgb(237, 30, 117) 100%);
  transform: rotate(-93.76deg);
  border-radius: 50%;
  z-index: 200;
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
export default ErrorPage;
