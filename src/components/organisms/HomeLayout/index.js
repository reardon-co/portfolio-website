import React from "react";
import styled from "styled-components";
import ProfileIcon from "../../atoms/ProfileIcon";
import HeroLayout from "../../molecules/HeroLayout";

const StyleWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
`;

export default function HomeLayout({ flickerPhrases, flickerCharacters, id }) {
  return (
    <StyleWrapper id={id}>
        <HeroLayout
          flickerCharacters={flickerCharacters}
          flickerPhrases={flickerPhrases}
        ></HeroLayout>
    </StyleWrapper>
  );
}
