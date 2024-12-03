import styled from "styled-components";
import { Link } from "react-router-dom";


export const ConsultingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    background-color: #f9fafb;
    font-family: 'Poppins', sans-serif;
    margin-top: 80px;


    @media (max-width: 1024px) {
    flex-wrap: nowrap;
    padding: 1.5rem;
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    text-align: center;
    margin-top: 40px;
  }
`;


export const HeadingContainer = styled.div`
    max-width: 50%;
    margin-top: 70px;


    @media (max-width: 1024px) {
    max-width: 100%;
    margin-top: 50px;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;


export const SubHeading = styled.h2`
    font-size: 1.5rem;
    font-weight: 350;
    color: #5517A8;
    text-align: left;


    @media (max-width: 768px) {
    font-size: 1.3rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;


export const MainHeading = styled.h1`
    font-size: 3rem;
    color: black;
    margin: 0.5rem 0;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;


    @media (max-width: 768px) {
    font-size: 2.5rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;


export const Description = styled.p`
    font-size: 1.1rem;
    color: #2f2e2e;
    text-align: left;


    @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;


export const ImageContainer = styled.div`
    max-width: 68%;


    @media (max-width: 1024px) {
    max-width: 100%;
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    max-width: 80%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;


export const StyledImage = styled.img`
    width: 120%;
    height: auto;
    object-fit: cover;
    margin-left: 50px;


    @media (max-width: 1024px) {
    width: 100%;
    margin-left: 0;
  }

  @media (max-width: 768px) {
    width: 90%;
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
    width: 252px; 
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
    font-size: 14px;
    padding: 10px 14px;
    width: auto;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 8px 12px;
  }
`


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

