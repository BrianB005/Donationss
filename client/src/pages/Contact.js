import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputWithLabel from "../components/InputWithLabel";
import PinkButton from "../components/PinkButton";
import ContactItem from "../components/SingleContactItem";
import TextAreaWithLabel from "../components/TextWithLabel";
import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocation } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { sendMail } from "../redux/actions/emailActions";
const contactItems = [
  { id: 1, title: "Address: ", value: "Thika,Kenya", icon: <IoLocation /> },
  {
    id: 2,
    title: "Phone: ",
    value: "+254 720390918",
    icon: <BsTelephoneFill />,
  },
  {
    id: 3,
    title: "Email: ",
    value: "sancontributions@gmail.com",
    icon: <HiOutlineMail />,
  },
];
const Contact = ({ showLinks, setShowLinks }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(sendMail(email, name, title, message));
  };
  const { feedback, error, loading } = useSelector((state) => state.sendMail);

  useEffect(() => {
    if (error) {
      alert(error);
    }
  }, [error]);
  useEffect(() => {
    if (feedback) {
      alert("Email sent successfully!");
      setEmail("");
      setName("");
      setMessage("");
      setSubject("");
    }
  }, [feedback]);
  return (
    <Wrapper>
      <Navbar showLinks={showLinks} setShowLinks={setShowLinks} />
      {showLinks && <Modal onClick={() => setShowLinks(false)} />}
      <ContentWrapper>
        <Title>Message us.</Title>
        <Form>
          <Left>
            <InputWithLabel
              placeholder="Enter your name"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputWithLabel
              placeholder="Enter your email address"
              label="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputWithLabel
              placeholder="Enter message subject"
              label="Message subject"
              value={title}
              onChange={(e) => setSubject(e.target.value)}
            />

            <TextAreaWithLabel
              rows={8}
              placeholder="Enter message"
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <PinkButton
              title={loading ? "Sending ..." : "Send Message"}
              disabled={!email || !(title && message) || loading}
              onClick={(e) => handleClick(e)}
            />
          </Left>
          <Right>
            <Title>Contact Information</Title>
            <SubTitle style={{ marginBottom: "20px" }}>
              We're open for any suggestions or information
            </SubTitle>
            {contactItems.map((item) => (
              <ContactItem key={item.id} {...item} />
            ))}
            <SubTitle style={{ marginTop: "30px", marginBottom: "8px" }}>
              Social Media :
            </SubTitle>
            <Socials>
              <Social>
                <FaFacebookF style={{ color: "#fff" }} size={14} />
              </Social>
              <Social>
                <FaTwitter style={{ color: "#fff" }} size={14} />
              </Social>
              <Social>
                <FaInstagram style={{ color: "#fff" }} size={14} />
              </Social>
              <Social>
                <FaTiktok style={{ color: "#fff" }} size={14} />
              </Social>
            </Socials>
          </Right>
        </Form>
      </ContentWrapper>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  flex-direction: column;
  @media screen and (max-width: 700px) {
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
  overflow-y: auto;
  margin-top: 5px;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Form = styled.form`
  background: #ffffff;
  box-shadow: 0px 5px 21px rgba(0, 0, 0, 0.13);
  border-radius: 5px;
  width: 680px;
  padding: 31px 41px 40px;
  display: flex;

  @media screen and (max-width: 700px) {
    width: 100%;
    flex-direction: column;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin-right: 20px;
  @media screen and (max-width: 700px) {
    margin-bottom: 40px;
    width: 100%;
    margin-right: 0px;
  }
`;
const Social = styled.div`
  background: rgb(237, 30, 117);
  border-radius: 50%;
  width: 30px;

  height: 30px;
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
const Socials = styled.div`
  display: flex;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-family: "Dm Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 123%;
  color: #07174b;
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  font-family: "Dm Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 123%;
  color: gray;
`;

export default Contact;
