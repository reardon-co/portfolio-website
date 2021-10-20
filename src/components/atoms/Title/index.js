import styled from "styled-components";

const Title = styled.div`
    font-size: 4rem;
    font-family: 'Varela Round', sans-serif;
    font-weight: bold;
    color: ${props => props.color || '#F5FAFE'};
    background-color: transparent;
`;

export default Title;