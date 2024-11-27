import { Link } from "react-router-dom";
import styled from "styled-components";


export const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    background-color: #f9fafb;
    flex-wrap: wrap; /* Allows wrapping on smaller screens */

    @media (max-width: 1024px) {
        padding: 30px;
    }

    @media (max-width: 768px) {
        padding: 20px;
        flex-direction: column; /* Stack the elements vertically on small screens */
        text-align: center; /* Center align text */
    }
`;

export const TextContainer = styled.div`
    max-width: 50%;
    @media (max-width: 1024px) {
        max-width: 60%;
    }

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 48px;
    font-weight: 700;
    color: #000;
    padding-top: 30px;
    text-align: left;

    @media (max-width: 1024px) {
        font-size: 36px; /* Slightly smaller font on tablets */
    }

    @media (max-width: 768px) {
        font-size: 28px; /* Smaller font on mobile */
        text-align: center; /* Center align title on mobile */
    }

    @media (max-width: 480px) {
        font-size: 24px; /* Even smaller on very small screens */
    }
`;

export const Subtitle = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #2f2e2e;
    margin-top: 20px;
    line-height: 1.5;
    text-align: left;

    @media (max-width: 1024px) {
        font-size: 14px; /* Smaller font on tablets */
    }

    @media (max-width: 768px) {
        font-size: 12px; /* Smaller font on mobile */
        text-align: center; /* Center align subtitle on mobile */
    }

    @media (max-width: 480px) {
        font-size: 10px; /* Even smaller on very small screens */
    }
`;

export const ContactButton = styled(Link)`
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

    @media (max-width: 1024px) {
        width: 150px; /* Adjust button width on tablets */
    }

    @media (max-width: 768px) {
        margin-right: 0; /* Remove right margin on mobile */
        width: 140px;
        justify-content: center; /* Center the button on mobile */
    }

    @media (max-width: 480px) {
        width: 120px; /* Smaller button on very small screens */
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

    @media (max-width: 1024px) {
        width: 50px;
        height: 50px; /* Adjust icon size on tablets */
    }

    @media (max-width: 768px) {
        width: 45px;
        height: 45px; /* Adjust icon size on mobile */
    }

    @media (max-width: 480px) {
        width: 40px;
        height: 40px; /* Even smaller icon on very small screens */
    }
`;

export const ImageContainer = styled.div`
    max-width: 50%;
    @media (max-width: 768px) {
        max-width: 80%; /* Increase image container width on mobile */
        margin-top: 20px; /* Add some space between text and image on mobile */
    }

    @media (max-width: 480px) {
        max-width: 100%; /* Full width image container on small screens */
    }
`;

export const BannerImage = styled.img`
    max-width: 100%;
    height: auto;

    @media (max-width: 1024px) {
        max-width: 80%; /* Adjust image width on tablets */
    }

    @media (max-width: 768px) {
        max-width: 100%; /* Full width image on mobile */
    }
`;


