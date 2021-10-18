import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column-gap: 1vw;
`;

export default function PageLayout({ children, id }) {
    return (
        <Page id={id}>
            {children}
        </Page>
    )
}