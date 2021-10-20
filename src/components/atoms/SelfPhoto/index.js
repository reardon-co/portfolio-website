import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
    clip-path: inset(0px round 7% 7% 7% 7%);
`;

export default function SelfPhoto() {
    return (
        <StyledDiv>
            <StaticImage src="../../../images/selfphoto.jpeg" width={2000} height={2000} alt="portrait"/>
        </StyledDiv>
        
    );
}