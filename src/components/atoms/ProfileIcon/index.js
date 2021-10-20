import React from "react";
import styled from "styled-components";
import { StaticImage } from "gatsby-plugin-image";

const OuterDiv = styled.div`
    clip-path: circle(50% at 50% 50%);
    background-color: #dda1f6;
    z-index: 0;
`

export default function ProfileIcon() {
    return (
        <OuterDiv>
            <StaticImage src="../../../images/IMG_5520.PNG" alt="Profile" width={200} height={200}/>
        </OuterDiv>
        
    )
}