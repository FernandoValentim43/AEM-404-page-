import styled from "styled-components"

export const ImageStyle = styled.img`
     
    width: 400px;
    margin: auto;
    
    @media (max-width: 900px) {
         width: 310px;
         margin-bottom: 48px;
    }

    @media (max-width: 480px) {
         margin-bottom: 48px;
    }
`;