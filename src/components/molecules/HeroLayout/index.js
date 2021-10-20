import React from "react";
import styled from "styled-components";
import Title from "../../atoms/Title/index";
import Subtitle from "../../atoms/Subtitle/index";
import FlickerText from "../../atoms/FlickerText/index";
import Button from "../../atoms/Button/index";
import Body from "../../atoms/Body";
import resume from "../../../documents/resume.pdf";
import ProfileIcon from "../../atoms/ProfileIcon";

const FlickerStyle = styled(Title)`
  font-weight: 400;
  font-size: 2.5rem;
  color: #55f0ce;
  margin-bottom: 20px;
`;

const StyleWrapper = styled.div`
  margin-top: 2vh;
  margin-bottom: 2vh;
  display: flex;
  justify-content: space-between;
  width: 60%;
`;

const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function HeroLayout({ flickerPhrases, flickerCharacters }) {
  return (
    <StyleWrapper>
      <FlexItem>
        <Subtitle color={"#dda1f6"}>Hello, my name is</Subtitle>
        <Title>Cole Reardon, a</Title>
        <FlickerStyle>
          <FlickerText
            phrases={flickerPhrases}
            characters={flickerCharacters}
            start={"Software Developer"}
            spaceNumber={2}
          ></FlickerText>
        </FlickerStyle>
        <Button path={resume}>View my Resume</Button>
      </FlexItem>
      <FlexItem>
        <ProfileIcon />
      </FlexItem>
    </StyleWrapper>
  );
}
