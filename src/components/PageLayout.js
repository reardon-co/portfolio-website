import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  height: 100vh;
  width: 60vw;
  display: flex;
  padding-left: 20vw;
  padding-right: 20vw;
`;

export default function PageLayout({ children }) {
    return (
        <Page>
            {children}
        </Page>
    )
}