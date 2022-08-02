import styled from "styled-components";

export const StyledText = styled.header`
    display: flex;
    flex-wrap: wrap;

    color: #4f4f4f;
    font-family: 'Space Mono', monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 2rem;
    letter-spacing: -0.035em;

    margin-bottom: 3.5rem;

    

    @media (max-width: 950px) {
        font-size: 1rem;
        line-height: normal;
        margin-bottom: 2.5rem;
    }

    @media (max-width: 390px) {
        font-size: 0.8rem;
        line-height: normal;
        margin-bottom: 2rem;
    }
`;