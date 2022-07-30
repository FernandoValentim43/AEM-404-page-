import styled from "styled-components";

export const HeaderContainer = styled.header`
  font-family: "Inconsolata";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: -0.08em;
  text-transform: uppercase;
  color: #333333;

  margin-bottom: 100px;
  @media (max-width: 780px) {
    margin-bottom: 10px;
  }
`;

export const HeaderText = styled.h3`
  font-family: "Inconsolata", monospace !important;
  text-transform: uppercase;
  color: #333333;
  font-style: normal;
  font-weight: 400;
  font-size: 1.3rem;
  margin: 0;
  padding: 0.5rem 3rem;

  @media (max-width: 780px) {
    font-size: 1rem;
    padding: 0rem 1rem;
  }
`;
