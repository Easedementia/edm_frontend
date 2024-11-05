import { Link } from "react-router-dom";
import styled from "styled-components";


export const AssessmentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    background-color: white;
    border-radius: 15px;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    margin-top: 30px;
    max-width: 85%;
    margin-left: 78px;
`;


export const TextContainer = styled.div`
    max-width: 45%;
`


export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 26px;
    font-weight: 700;
    color: #000;
    margin-top: 10px;
    text-align: left;
`;


export const Subtitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #5517A8 ;
    text-align: left;
`


export const Description = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 14.5px;
    color: #252323;
    line-height: 1.5;
    text-align: left;
`;


export const AssessmentButton = styled(Link)`
    display: flex; 
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    background-color: #5517A8;
    color: white;
    border: none;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    text-decoration: none;
    transition: background-color 0.3s ease;
    height: 40px; 
    width: 165px; 
    align-self: flex-start;
    margin-top: 15px;
    margin-right: 375px;
    white-space: nowrap; 

    &:hover {
        background-color: #6d22d1;
        color: #fff;
    }
`;


export const ArrowIcon = styled.img`
    margin-left: 1px;
    width: 65px;
    height: 65px; 
    transition: transform 0.2s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
    }
`;


export const DetailsContainer = styled.div`
    max-width: 45%;
`;

