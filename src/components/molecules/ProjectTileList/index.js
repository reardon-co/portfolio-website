import React from "react";
import styled from "styled-components";
import ProjectTile from "../ProjectTile";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 1vw;
    overflow-x: scroll;
`;
export default function ProjectTileList({ projectTiles }) {
  return (
    <StyledDiv>
      {projectTiles.map((item, index) => {
        return (
          <ProjectTile
            name={item.name}
            keyLanguages={item.keyLanguages}
            link={item.link}
            key={index}
          />
        );
      })}
    </StyledDiv>
  );
}
