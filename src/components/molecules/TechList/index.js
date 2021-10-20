import React from "react";
import styled from "styled-components";
import Subtitle from "../../atoms/Subtitle";
import TechLabel from "../../atoms/TechLabel";

const StyledDivTechList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledDivMolecule = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function TechList({ techList }) {
    console.log("Tech list's tech list: " + techList);
  return (
    <StyledDivMolecule>
      <Subtitle>Tech I love:</Subtitle>
      <StyledDivTechList>
        {techList.map((item, index) => {
            return (
                <TechLabel tech={item} key={index} />
            );
        })}
      </StyledDivTechList>
    </StyledDivMolecule>
  );
}
