import { Link } from "react-router-dom";
import styled from "styled-components";


export const AssessmentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    background-color: white;
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    margin: 20px auto;
    max-width: 90%; 


    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 20px;
        margin-left: auto;
        margin-right: auto;
        max-width: 90%;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 15px;
        margin-left: auto;
        margin-right: auto;
        max-width: 90%;
        margin-top: -50px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 10px;
        margin-left: auto;
        margin-right: auto;
        max-width: 85%;
        margin-top: 10px;
    }
`;


export const TextContainer = styled.div`
    max-width: 45%;


    @media (max-width: 1024px) {
        max-width: 100%;
    }

    @media (max-width: 768px) {
        max-width: 100%;
    }

    @media (max-width: 480px) {
        max-width: 100%;
    }
`


export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 26px;
    font-weight: 700;
    color: #000;
    margin-top: 10px;
    text-align: left;


    @media (max-width: 768px) {
        font-size: 22px;
        text-align: center;
    }

    @media (max-width: 480px) {
        font-size: 20px;
        text-align: center;
    }
`;


export const Subtitle = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #5517A8 ;
    text-align: left;


    @media (max-width: 768px) {
        font-size: 16px;
        text-align: center;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        text-align: center;
        margin-top: 10px;
    }
`


export const Description = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    color: #252323;
    line-height: 1.5;
    text-align: left;


    @media (max-width: 768px) {
        font-size: 16px;
        text-align: center;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        text-align: center;
        margin-top: 12px;
    }
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
    align-self: center;
    margin: 15px auto;
    white-space: nowrap;
    margin-left: 0; /* Align the button to the left */

    &:hover {
        background-color: #6d22d1;
        color: #fff;
    }

    @media (max-width: 1024px) {
        margin: 15px auto;
        font-size: 14px;
    }

    @media (max-width: 768px) {
        margin: 10px auto;
        font-size: 14px;
    }

    @media (max-width: 480px) {
        margin: 10px auto;
        padding: 10px;
        font-size: 12px;
        width: 170px;
    }
`;


export const ArrowIcon = styled.img`
    margin-left: 14px;
    width: 35px;
    height: 35px; 
    transition: transform 0.2s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
    }


    @media (max-width: 768px) {
        width: 28px;
        height: 28px;
        margin-left: 32px;
    }

    @media (max-width: 480px) {
        width: 24px;
        height: 24px;
        margin-left: 59px;
    }
`;


export const DetailsContainer = styled.div`
    max-width: 45%;


    @media (max-width: 1024px) {
        max-width: 100%;
    }

    @media (max-width: 768px) {
        max-width: 100%;
    }

    @media (max-width: 480px) {
        max-width: 100%;
    }
`;

