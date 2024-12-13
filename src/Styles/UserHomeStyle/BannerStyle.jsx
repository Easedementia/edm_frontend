import { Link } from "react-router-dom";
import styled from "styled-components";


export const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    background-color: #f9fafb;


    @media (max-width: 1024px) {
        padding: 40px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 30px;
        margin-top: 60px;
        text-align: center;
    }

    @media (max-width: 480px) {
        padding: 20px;
    }
`


export const TextContainer = styled.div`
    max-width: 50%;


    @media (max-width: 768px) {
        max-width: 100%;
        text-align: center;
        margin-bottom: 20px;
    }

    @media (max-width: 480px) {
        margin-bottom: 15px;
    }
`


export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 48px;
    font-weight: 700;
    color: #000;
    padding-top: 30px;
    text-align: left;


    @media (max-width: 768px) {
        font-size: 36px;
        text-align: center;
        padding-top: 20px;
    }

    @media (max-width: 480px) {
        font-size: 28px;
        padding-top: 15px;
        text-align: center;
    }
`


export const Subtitle = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #2f2e2e;
    margin-top: 20px;
    line-height: 1.5;
    text-align: left;
    word-wrap: break-word;
    overflow-wrap: break-word;

    @media (max-width: 768px) {
        font-size: 14px;
        text-align: center;
        margin-top: 15px;
        max-width: 60%; /* Ensures the text wraps within 90% of the container width */
        margin-left: auto; 
        margin-right: auto;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        max-width: 60%; /* Constrains the text further for smaller screens */
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        word-wrap: break-word;
        margin-bottom: 30px;
    }
`;



export const ContactButton = styled(Link)`
    display: flex; 
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px; /* Adjust padding */
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


    @media (max-width: 768px) {
        align-self: center;
        margin-left: 300px;
    }

    @media (max-width: 480px) {
        font-size: 14px;
        height: 35px;
        width: 140px;
        align-items: center;
        margin-left: 300px;
    }
`;

export const ArrowIcon = styled.img`
    margin-left: 10px;
    width: 65px;
    height: 65px; 
    transition: transform 0.2s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.2); 
    }


    @media (max-width: 768px) {
        width: 50px;
        height: 50px;
    }

    @media (max-width: 480px) {
        width: 40px;
        height: 40px;
    }
`;




export const ImageContainer = styled.div`
    max-width: 50%;


    @media (max-width: 768px) {
        max-width: 100%;
        text-align: center;
    }

    @media (max-width: 480px) {
        max-width: 100%;
    }
`


export const BannerImage = styled.img`
    max-width: 100%;
    height: auto;


    @media (max-width: 768px) {
        width: 70%;
        margin-left: 120px;
        margin-top: -60px;
    }

    @media (max-width: 480px) {
        width: 50%;
        margin-left: 170px;
        margin-bottom: -70px;
    }
`;

