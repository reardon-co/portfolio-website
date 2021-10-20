import React from "react";
import styled from "styled-components";
import Body from "../../atoms/Body";
import SelfPhoto from "../../atoms/SelfPhoto";
import Title from "../../atoms/Title";
import TechList from "../TechList";

const EmphColor = styled.span`
  color: #dda1f6;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1%;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 1%;
`;

const StyleWrapper = styled.div`
    width: 60%;
    display: flex;
    align-items: center;
`;

export default function AboutInfo({ techList }) {
  return (
    <StyleWrapper>
      <FlexColumn>
        <Title>
          <EmphColor>2.</EmphColor> About
        </Title>
        <FlexRow>
          <FlexColumn>
            <Body>
              Greetings! My name is Cole and I love creating aesthetically
              pleasing and functional software experiences. I find passion in
              creating digital tools that make life easier - or at least more
              fun! I fondly remember creating small games in GameMaker Studio as
              a kid, which opened the door to a whole new world of interesting
              technology. The more I learned, the more I fell in love with
              software development.
            </Body>
            <Body>
              Now, I have had the pleasure of working as a Systems Engineer for
              Fidelity Investments, which has given me real-world development
              experience. Fidelity, in combination with my academic and personal
              experience, has driven me to explore the realm of web development.
              I especially enjoy front-end work and the creative elements that
              are integrated into the development process. However, I am open to
              working in a variety of different roles with a variety of
              different software!
            </Body>
          </FlexColumn>
          <SelfPhoto />
        </FlexRow>
        <br />
        <TechList techList={techList}/>
      </FlexColumn>
    </StyleWrapper>
  );
}
