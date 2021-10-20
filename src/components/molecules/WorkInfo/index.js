import React from "react";
import styled from "styled-components";
import Subtitle from "../../atoms/Subtitle";
import Title from "../../atoms/Title";
import ProjectTileList from "../ProjectTileList";
import WorkTileList from "../WorkTileList";

const StyledDiv = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  > * {
    margin-top: 2vh;
    margin-bottom: 2vh;
  }
`;

const Center = styled.div`
  align-self: center;
`;

const EmphasisColor = styled.span`
  color: #dda1f6;
`;
export default function WorkInfo({ workTiles, projectTiles }) {
  return (
    <StyledDiv>
      <Title>
        <EmphasisColor>3. </EmphasisColor> Work
      </Title>
      <Center>
        <Subtitle>Career</Subtitle>
      </Center>
      <WorkTileList workTiles={workTiles} />
      <Center>
        <Subtitle>Projects</Subtitle>
      </Center>
      <ProjectTileList projectTiles={projectTiles} />
    </StyledDiv>
  );
}
