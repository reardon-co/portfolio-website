import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
import Body from "../Body";

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 10px 20px;
  text-decoration: none;
  margin: 0px 5px 0px 5px;
  color: #f5fafe;
  font-size: 1rem;
`;

const ColorText = styled.span`
  color: ${(props) => props.color || "#dda1f6"};
`;

export default function PageLink({
  destId,
  children,
  sectionNumber,
  numberColor,
}) {
  return (
    <Link to={destId} smooth={true} spy={true} duration={500}>
      <StyledButton>
        <Body>
          <ColorText color={numberColor}> {sectionNumber}. </ColorText>{" "}
          {children}
        </Body>
      </StyledButton>
    </Link>
  );
}
