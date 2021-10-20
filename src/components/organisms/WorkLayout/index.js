import React from "react";
import styled from "styled-components";
import WorkInfo from "../../molecules/WorkInfo";

const StyledDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function WorkLayout({ workTiles, id, projectTiles }) {
  return (
    <StyledDiv id={id}>
      <WorkInfo workTiles={workTiles} projectTiles={projectTiles}></WorkInfo>
    </StyledDiv>
  );
}
