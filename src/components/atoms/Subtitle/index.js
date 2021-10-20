import styled from "styled-components";
import React from "react";

const Subtitle = styled.div`
    font-size: 2rem;
    font-family: 'Varela Round', sans-serif;
    color: ${props => props.color || '#F5FAFE'};
    background-color: transparent;
`;

export default Subtitle;