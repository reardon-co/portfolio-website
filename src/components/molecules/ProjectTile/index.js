import React from "react";
import styled from "styled-components";
import Subtitle from "../../atoms/Subtitle";
import Body from "../../atoms/Body";

const TileStyleWrapper = styled.div`
  height: 25vh;
  width: 25vh;
  overflow-wrap: break-word;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 7px;
  text-decoration: none;
  > * {
    margin-left: 1vw;
  }
  transition: 0.25s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export default function ProjectTile({ name, keyLanguages, link }) {
  return (
    <TileStyleWrapper as="a" href={link} target="_blank">
      <Subtitle>{name}</Subtitle>
      <Body>{keyLanguages}</Body>
    </TileStyleWrapper>
  );
}
