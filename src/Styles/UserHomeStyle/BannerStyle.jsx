import { Link } from "react-router-dom";
import styled from "styled-components";


export const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    background-color: #f9fafb;


    @media (max-width: 768px) {
        flex-direction: column;
        padding: 1.5rem;
        margin-top: 60px;
        margin-bottom: 60px;
    }

    @media (max-width: 480px) {
        padding: 1rem;
        margin-top: 50px;
        margin-bottom: 50px;
    }
`


export const TextContainer = styled.div`
    max-width: 50%;


    @media (max-width: 768px) {
        max-width: 100%;
        text-align: center;
        margin-bottom: 2rem;
    }

    @media (max-width: 480px) {
        margin-bottom: 1.5rem;
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
        font-size: 2.2rem;
        text-align: center;
    }

    @media (max-width: 480px) {
        font-size: 1.8rem;
    }
`


export const Subtitle = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #2f2e2e;
    margin-top: 20px;
    line-height: 1.5;
    text-align: left;


    @media (max-width: 768px) {
        font-size: 1rem;
        text-align: center;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
    }
`


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
    width: 140px; 
    font-size: 14px;
    padding: 10px 14px;
    margin-right: 200px; /* Adjusted for smaller screen alignment */
  }

  @media (max-width: 480px) {
    width: 120px;
    font-size: 12px;
    padding: 8px 12px;
    margin-right: 0; /* Center aligned for smaller screens */
    align-self: center;
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
    margin-left: 8px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px; 
    margin-left: 5px;
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
        width: 90%;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;

