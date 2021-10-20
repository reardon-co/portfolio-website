import React from "react";
import styled from "styled-components";
import AboutInfo from "../../molecules/AboutInfo";

const StyleWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function AboutLayout({ id, techList }) {
    console.log("About layout tech list: " + techList);
  return (
    <StyleWrapper id={id}>
      <AboutInfo techList={techList}/>
    </StyleWrapper>
  );
}
