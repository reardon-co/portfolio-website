import React from 'react';
import styled from 'styled-components';
import resume from '../documents/resume.pdf'

const ButtonStyle = styled.button`
    border: 2px solid #55f0ce;
    background-color: transparent;
    margin-top: 20px;
    margin-bottom: 20px;
    color: #F5FAFE;
    padding: 10px 20px;
    font-family: "Source Code Pro", "monospace";
    font-size: 1rem;
    border-radius: 4px;
    transition: 0.25s;
    text-decoration: none;

    &:hover {
        background-color: #55f0ce;
        color: #2B2D37;
    }
`;
export default function ResumeButton() {

    return (
        <a href={ resume } target="_blank">
            <ButtonStyle>View my Resume</ButtonStyle>
        </a>
        
    )
}