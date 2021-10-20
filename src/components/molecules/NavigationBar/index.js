import React from "react";
import styled from "styled-components";
import PageLink from "../../atoms/PageLink";

const NavBackground = styled.div`
  width: 100vw;
  height: 7.5vh;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  z-index: 1;
`;

/**
 * A navigation bar that navigates to each given spot on the page via labels
 *
 * @param {Object[]} idToLabelList An array of objects have id: label
 * @param {hex color} labelColor optional: a hexadecimal color value that colors the list labels
 */
export default function NavigationBar({ idToLabelList, labelColor }) {
  return (
    <NavBackground>
      {idToLabelList.map((item, index) => {
        return (
          <PageLink
            destId={Object.keys(item)[0]}
            sectionNumber={index + 1}
            numberColor={labelColor}
            key={index}
          >
            {Object.values(item)[0]}
          </PageLink>
        );
      })}
    </NavBackground>
  );
}
