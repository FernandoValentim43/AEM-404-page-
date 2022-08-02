import styled from "styled-components";

export const StyledButton = styled.button`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;

  font-size: 14px;
  line-height: 21px;
  color: white;

  width: 170px;
  height: 66px;
  border: none;

  text-transform: uppercase;
  background-color: #333333;
  cursor: pointer;

  margin-bottom: 85px;

  @media (max-width: 940px) {
    font-size: 0.9rem;
    line-height: normal;
    margin-bottom: 156px
  }

  @media (max-width: 690px) {
        margin-bottom: 20px;
    }

  @media (max-width: 390px) {
        margin-bottom: 1.2rem;
    }
`;
