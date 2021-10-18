import React from 'react';
import styled from 'styled-components';

const TextStyle = styled.div`
    grid-column: 4 / 10;
    display: flex;
    align-items: center;
`;

export default function AboutLayout({ aboutText }) {

    return (
        <TextStyle>{ aboutText }</TextStyle>
    );
}