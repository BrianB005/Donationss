import React from "react";
import styled from "styled-components";
import don1 from "../images/don1.jpg";
import don2 from "../images/don2.jpg";
import { Link } from "react-router-dom";
import PinkButton from "../components/PinkButton";

import { BsArrowRight } from "react-icons/bs";


import Footer from "../components/Footer";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";

const LandingPage = ({ showLinks, setShowLinks }) => {
  const handleClick = () => {
    window.open(
      "https://www.paypal.com/donate/?hosted_button_id=4QPQZUHK995GU"
    );
  };
  

  return (
    <Wrapper>
      <Wrapper2>
        <Navbar
          showLinks={showLinks}
          setShowLinks={setShowLinks}
         
        />
        <ContentWrapper>
          {showLinks && <Modal onClick={() => setShowLinks(false)} />}
          <Left>
            <Title>Let's make a difference together.</Title>
            <Subtitle>
              Period Poverty: Let's Help Provide Sanitary Towels to Women in
              Need.Join us in making a difference in the lives of girls and
              women by supporting our campaign to provide sanitary towels and
              promote menstrual hygiene.
            </Subtitle>
            <Buttons>
              <PinkButton title="Donate Now" onClick={handleClick} />

              <Link to="/about">
                <Button>
                  About us
                  <div>
                    <BsArrowRight />
                  </div>
                </Button>
              </Link>
            </Buttons>
          </Left>
          <Right>
            <Images>
              <Image1 src={don1} alt=" image 1" />
              <Image2 src={don2} alt=" image 2" />
            </Images>
            <Images>
              <Image3 src={don2} alt=" image 3" />
              <Image4 src={don1} alt=" image 4" />
            </Images>
          </Right>
        </ContentWrapper>

        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </Wrapper2>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

  height: 100vh;
  @media screen and (max-width: 1150px) {
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const FooterWrapper = styled.div`
  @media screen and (min-width: 1150px) {
    padding: 10px 100px;
  }
  @media screen and (max-width: 1150px) {
    padding: 10px 20px;
  }
`;
const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  @media screen and (max-width: 1150px) {
    overflow-y: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
const ContentWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px;

  @media screen and (max-width: 1150px) {
    flex-direction: column;
    padding: 0 20px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media screen and (max-width: 1150px) {
    width: 100%;
    margin-top: 100px;
  }
`;
const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media screen and (max-width: 1150px) {
    margin-top: 30px;
    width: 100%;
    align-items: flex-start;
  }
`;
const Subtitle = styled.h2`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 40px;
  color: #141414;
  margin-bottom: 20px;
  @media screen and (max-width: 700px) {
    font-size: 18px;
    line-height: 30px;
  }
`;
const Title = styled.h1`
  font-family: "DM Serif Display";
  font-style: bold;
  font-weight: 800;
  max-width: 640px;
  font-size: 64px;
  line-height: 80px;
  color: #141414;
  margin-bottom: 20px;

  @media screen and (max-width: 700px) {
    font-size: 50px;
    line-height: 50px;
  }
  @media screen and (max-width: 500px) {
    font-size: 40px;
    line-height: 50px;
  }
`;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1150px) {
    /* flex-direction: column; */
    align-self: flex-start;
    align-items: center;
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
    margin-left: 8px;
    height: 100%;
    display: flex;
    align-items: center;
  }
`;

const Image1 = styled.img`
  width: 350px;
  height: 280px;
  margin-right: 20px;
  border-radius: 15px;
  object-fit: cover;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Image2 = styled.img`
  width: 300px;
  height: 280px;
  object-fit: cover;
  border-radius: 15px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Image3 = styled.img`
  width: 300px;
  height: 280px;
  border-radius: 15px;
  object-fit: cover;
  margin-right: 20px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Image4 = styled.img`
  width: 350px;
  height: 280px;
  object-fit: cover;
  border-radius: 15px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;
const Images = styled.div`
  display: flex;
  margin-bottom: 20px;
  @media screen and (max-width: 500px) {
    display: grid;
    grid-column-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default LandingPage;
