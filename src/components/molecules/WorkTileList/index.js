import React from "react";
import styled from "styled-components";
import WorkTile from "../WorkTile";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    column-gap: 1vw;
    overflow-x: scroll;
`;
export default function WorkTileList({ workTiles }) {
  return (
    <StyledDiv>
      {workTiles.map((item, index) => {
        return (
          <WorkTile
            company={item.company}
            title={item.title}
            actionables={item.actionables}
            key={index}
          />
        );
      })}
    </StyledDiv>
  );
}
