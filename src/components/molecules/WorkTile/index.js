import React from "react";
import styled from "styled-components";
import Subtitle from "../../atoms/Subtitle";
import Body from "../../atoms/Body";
import { useState } from "react";
import DetailModal from "../DetailModal";

const TileStyleWrapper = styled.div`
  height: 25vh;
  width: 25vh;
  overflow-wrap: break-word;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 7px;
  > * {
    margin-left: 1vw;
  }
  transition: 0.25s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const PopupStyleWrapper = styled.div`
  height: 50vh;
  width: 50vw;
  background-color: rgb(255, 255, 255);
`;

export default function WorkTile({ company, title, actionables }) {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <TileStyleWrapper onClick={openModal}>
        <Subtitle>{company}</Subtitle>
        <Body>{title}</Body>
      </TileStyleWrapper>
      {open && (
        <DetailModal
          close={closeModal}
          company={company}
          title={title}
          actionables={actionables}
        />
      )}
    </>
  );
}
