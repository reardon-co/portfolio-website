import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

const StyleShell = styled.div`
  position: fixed;
  width: 100vw;
  height: 7.5vh;
  display: flex;
  justify-content: flex-end;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.3);
  align-items: center;
`;

const LeftAlign = styled.div`
  justify-content: flex-start;
`;

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  color: #f5fafe;
  padding: 10px 20px;
  font-family: "Source Code Pro", "monospace";
  font-size: 1rem;
  text-decoration: none;
  margin: 0px 5px 0px 5px;
`;

const EmphasisColor = styled.span`
  color: #dda1f6;
`;
export default function NavBar() {
  return (
    <StyleShell>
      <nav>
        <Link to="page2" spy={true} smooth={true} duration={500}>
          <StyledButton>
            <EmphasisColor>1.</EmphasisColor> About
          </StyledButton>
        </Link>
        <Link to="page3" spy={true} smooth={true} duration={500}>
          <StyledButton>
            <EmphasisColor>2.</EmphasisColor> Work
          </StyledButton>
        </Link>
        <Link to="page4" spy={true} smooth={true} duration={500}>
          <StyledButton>
            <EmphasisColor>3.</EmphasisColor> Projects
          </StyledButton>
        </Link>
        <Link to="page5" spy={true} smooth={true} duration={500}>
          <StyledButton>
            <EmphasisColor>4.</EmphasisColor> Contact
          </StyledButton>
        </Link>
      </nav>
    </StyleShell>
  );
}
