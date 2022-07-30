import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: left;

 
`;

export const HeaderText = styled.h3`
  font-family: 'Inconsolata', monospace !important;
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