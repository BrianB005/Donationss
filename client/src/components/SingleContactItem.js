import React from "react";
import styled from "styled-components";

const ContactItem = ({ icon, title, value }) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Title>{title} </Title>
      <Text>{value}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: fit-content;
  align-items: center;
  text-align: center;
  padding: 8px 0;
`;
const Text = styled.h2`
  font-family: "Dm Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  color: gray;
`;

const Icon = styled.div``;

const Title = styled.h1`
  font-family: "Dm Sans";
  font-style: bold;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  color: rgb(237, 30, 117);
  margin: 0 5px 0 8px;
`;

export default ContactItem;
