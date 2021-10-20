import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: rgba(255, 255, 255, 0.1);
  color: #f5fafe;
  border: 2px solid #55f0ce;
  padding: 10px 10px;
  border-radius: 7px;
  font-family: "Montserrat", sans-serif;
`;
export default function InputBox({ label, name, size }) {
  if (size === "long") {
    return <StyledInput as="textarea" id={name} rows="5" placeholder={label} />;
  } else {
    return <StyledInput type="text" name={name} placeholder={label} />;
  }
}
