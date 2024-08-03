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
    margin-top: 80px;
`;


export const TextContainer = styled.div`
    max-width: 50%;
`


export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 32px;
    font-weight: 700;
    color: #000;
    margin-top: 10px;
`;


export const Subtitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #5517A8 ;
`


export const Description = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #666;
    line-height: 1.5;
`;


export const AssessmentButton = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    margin-top: 20px;
    background-color: #5517A8;
    color: white;
    border: none;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    text-decoration: none;
    transition: background-color 0.3s ease;

    &:hover{
        background-color: #50186c;
    }
`;


export const Arrow = styled.span`
    margin-left: 10px;
`;


export const DetailsContainer = styled.div`
    max-width: 45%;
`;

