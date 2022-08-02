import styled from "styled-components";

export const StyledTitle = styled.header`
  display: flex;
  flex-wrap: wrap;
  color: #333333;
  font-family: "Space Mono", monospace;
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: -0.035em;
  line-height: 4rem;

  margin-bottom: 2.5rem;

  @media (max-width: 900px) {
    font-size: 2.5rem;
    line-height: 3rem;
    margin-bottom: 2.2rem;
  }

  @media (max-width: 500px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 390px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;
