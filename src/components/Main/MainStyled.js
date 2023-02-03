import styled from "styled-components";
import LargeLogo from "../../assets/reactjs-icon.png";

export const MainStyled = styled.main`
   padding-top: 57px;
   background-image: url(${LargeLogo});
   background-repeat: no-repeat;
   background-position-x: right;
   background-position-y: 75%; 
`;

export const MainHeading = styled.h1`
    margin-bottom: 46px;

    font-weight: 700;
    font-size: 39.06px;
    line-height: 47px;
    letter-spacing: -0.05em;

    color: #FFFFFF;
`;

export const FactsList = styled.ul`
    max-width: 400px;
    margin-left: 47px;
`;

export const FactsItem = styled.li`
    margin-bottom: 20.36px;

    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #FFFFFF;  

    &::marker {
        color: #61DAFB;
        font-size: 1.4rem;
    }
`;