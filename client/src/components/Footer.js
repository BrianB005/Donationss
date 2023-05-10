import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <Wrapper>
      <Social>
        <FaFacebookF style={{ color: "#fff" }} size={17} />
      </Social>
      <Social>
        <FaTwitter style={{ color: "#fff" }} size={17} />
      </Social>
      <Social>
        <FaInstagram style={{ color: "#fff" }} size={18} />
      </Social>
      <Social>
        <FaTiktok style={{ color: "#fff" }} size={17} />
      </Social>
      <Copyright>
        <span>&copy;</span>Copyright {new Date().getFullYear()}
      </Copyright>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Social = styled.div`
  background: rgb(237, 30, 117);
  border-radius: 50%;
  width: 40px;

  height: 40px;
  color: blue;
  display: grid;
  margin-right: 20px;
  place-items: center;
  cursor: pointer;
  transition: all 0.8s linear;
  &:hover {
    transform: scale(1.1);
  }
`;
const Copyright = styled.h2`
  font-family: "Dm Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: rgb(237, 30, 117);
  margin-left: 14px;
  height: 100%;
  align-items: center;

  text-align: center;
  span {
    color: black;

    margin-right: 5px;
  }
`;
export default Footer;
