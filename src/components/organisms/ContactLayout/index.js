import React from "react";
import styled from "styled-components";
import ContactInfo from "../../molecules/ContactInfo";

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default function ContactLayout({ id }) {
  return (
    <StyledDiv id={id}>
      <ContactInfo />
    </StyledDiv>
  );
}
