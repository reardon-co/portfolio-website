import React from "react";
import styled from "styled-components";
import Body from "../Body/index";

const ButtonStyle = styled.button`
  border: 2px solid #55f0ce;
  background-color: transparent;
  padding: 10px 20px;
  border-radius: 4px;
  transition: 0.25s;
  text-decoration: none;

  &:hover {
    ${Body} {
      color: #2b2d37;
    }
    background-color: #55f0ce;
  }
`;

export default function Button({ path, children }) {
  return (
    <a href={path} target="_blank">
      <ButtonStyle>
        <Body>{children}</Body>
      </ButtonStyle>
    </a>
  );
}
