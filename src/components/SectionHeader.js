import React from "react";
import styled from "styled-components";

const NumberStyle = styled.span``;

const TitleStyle = styled.span``;

export default function SectionHeader({ sectionNumber, sectionTitle }) {

    return (
        <div>
            <NumberStyle>{sectionNumber}. </NumberStyle>
        </div>
    )
}