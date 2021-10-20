import React from "react";
import styled from "styled-components";
import Title from "../../atoms/Title";
import Subtitle from "../../atoms/Subtitle";
import Body from "../../atoms/Body";

const BackgroundDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.8);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 2;
`;

const ContentDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #2b2d37;
  position: fixed;
  z-index: 3;
	border-radius: 7px;
`;

const CloseButton = styled.button`
  border: none;
  background-color: #55f0ce;
  width: 25px;
  height: 25px;
  transition: 0.25s;
  text-decoration: none;
  border-radius: 50%;
  color: #2b2d37;
  margin: 1%;
  float: right;
`;

const Margins = styled.div`
  margin: 5%;
`;

const EmphasisColor = styled.span`
  color: #55f0ce;
`;
export default function DetailModal({ close, company, title, actionables }) {
  return (
    <>
      <BackgroundDiv></BackgroundDiv>
      <ContentDiv>
        <CloseButton onClick={close}>X</CloseButton>
        <Margins>
          <Title>{company}</Title>
          <Subtitle>{title}</Subtitle>
					<br />
          {actionables.map((item, index) => {
            return (
              <Body>
                <EmphasisColor key={index}>{">"}</EmphasisColor> {item}
              </Body>
            );
          })}
        </Margins>
      </ContentDiv>
    </>
  );
}
