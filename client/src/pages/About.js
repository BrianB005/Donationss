import React from "react";
import styled from "styled-components";
import don1 from "../images/don1.jpg";
import don2 from "../images/don2.jpg";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
const About = ({ showLinks, setShowLinks }) => {
  return (
    <Wrapper>
      {showLinks && <Modal onClick={() => setShowLinks(false)} />}
      <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
      <ContentWrapper>
        <Left>
          <Title>
            About <span>EmpowerHer</span>
          </Title>
          <Subtitle>
            We are a non-profit organization that provides sanitary towels to
            young ladies who cannot afford them. Our mission is to ensure that
            every girl has access to menstrual products and education,
            regardless of their socioeconomic background. We work with schools,
            community organizations, and other non-profits to identify those in
            need. By breaking down the stigma surrounding menstruation and
            providing education, we empower the next generation of women. Your
            support can make a significant difference. Join us in our mission to
            provide access to menstrual products for all.
          </Subtitle>
        </Left>
        <Right>
          <Image src={don1} alt=" image " />
          <Image src={don2} alt=" image " />
          <Image src={don2} alt=" image " />
          <Image src={don1} alt=" image " />
        </Right>
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
  overflow-y: auto;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    padding: 60px 20px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;
  margin-right: 30px;
  @media screen and (max-width: 800px) {
    margin-right: 0px;
    width: 100%;
  }
`;
const Right = styled.div`
  display: grid;
  height: 400px;
  width: 40%;

  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;
const Image = styled.img`
  object-fit: cover;
  border-radius: 15px;
  height: 100%;
  width: 100%;
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
export default About;
