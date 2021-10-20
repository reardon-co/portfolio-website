import React from "react";
import styled from "styled-components";
import Title from "../../atoms/Title";
import ContactForm from "../ContactForm";

const StyledDiv = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
`;

const EmphasisText = styled.span`
  color: #dda1f6;
`;
export default function ContactInfo() {
  return (
    <StyledDiv>
      <Title>
        <EmphasisText>4. </EmphasisText> Contact
      </Title>
      <br />
      <ContactForm />
    </StyledDiv>
  );
}
