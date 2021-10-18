import React from "react";
import FlickerText from "./FlickerText";
import styled from "styled-components";
import ResumeButton from "./ResumeButton";

const TitleText = styled.section`
  font-size: 3rem;
  font-weight: 900;
`;
const SubtitleText = styled.section`
  font-size: 1.5rem;
  color: #dda1f6;
`;

const FlickerStyle = styled.section`
  font-weight: 400;
  font-size: 2.5rem;
  color: #55f0ce;
  margin-bottom: 20px;
`;
const CenterShell = styled.div`
  height: 100vh;
  width: auto;
  display: flex;
  align-items: center;
  grid-column: 4 / 10;
`;

function HeroLayout({ children, introSummary, flickerStart, flickerPhrases, flickerCharacters }) {
  return (
      <CenterShell>
        <div>
            <SubtitleText>Hello, my name is</SubtitleText>
            <TitleText>Cole Reardon, a</TitleText>
            <FlickerStyle>
              <FlickerText start={ flickerStart } phrases={ flickerPhrases } characters={ flickerCharacters } />
            </FlickerStyle>
            <div>{introSummary}</div>
          <ResumeButton />
        </div>
      </CenterShell>
  );
}

export default HeroLayout;
