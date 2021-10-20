import React from "react";
import styled from "styled-components";
import Body from "../Body";

const EmphColor = styled.span`
  color: #55f0ce;
`;

export default function TechLabel({ tech }) {
  return (
      <Body>
        <EmphColor>{"> "}</EmphColor>
        {tech}
      </Body>
  );
}
