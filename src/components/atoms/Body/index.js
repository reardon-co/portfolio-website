import styled from "styled-components";
import React from 'react';

const Body = styled.div`
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
    color: ${props => props.color || '#F5FAFE'};
    background-color: transparent;
    line-height: 1.5;
`;

export default Body;