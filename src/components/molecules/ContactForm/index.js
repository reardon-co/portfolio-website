import React from "react";
import styled from "styled-components";
import InputBox from "../../atoms/InputBox";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2vh;
`;

const StyledSubmit = styled.input`
  border: 2px solid #55f0ce;
  background-color: #55f0ce;
  padding: 10px 20px;
  border-radius: 4px;
  transition: 0.25s;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  color: #2B2D37;

  &:hover {
      background-color: #7EF6DE;
  }
`;

export default function ContactForm() {
  return (
    <form>
      <StyledForm>
        <InputBox label="First Name" name="fname"></InputBox>
        <InputBox label="Last Name" name="lname"></InputBox>
        <InputBox label="Email Address" name="email"></InputBox>
        <InputBox label="Message" name="message" size="long"></InputBox>
        <StyledSubmit type="submit"></StyledSubmit>
      </StyledForm>
    </form>
  );
}
