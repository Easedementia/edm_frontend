import { Link } from "react-router-dom";
import styled from "styled-components";


export const AssessmentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    background-color: #f9fafb;
    font-family: 'Poppins', sans-serif;
    margin-top: 140px;


    @media (max-width: 1024px) {
    flex-direction: column-reverse; /* Stack image and text for tablets */
    text-align: center;
    padding: 1.5rem;
    margin-top: 100px;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 80px;
  }

  @media (max-width: 480px) {
    margin-top: 60px;
    padding: 0.5rem;
  }
`;


export const HeadingContainer = styled.div`
    max-width: 50%;


    @media (max-width: 1024px) {
    max-width: 100%;
    margin-top: 1rem;
  }
`;


export const MainHeading = styled.h1`
    font-size: 48px;
    color: black;
    margin: 0.5rem 0;
    text-align: left;
    font-weight: 700;


    @media (max-width: 1024px) {
    font-size: 36px;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;


export const SubHeading = styled.h2`
    font-size: 24px;
    font-weight: 350;
    color: #5517A8;
    text-align: left;


    @media (max-width: 1024px) {
    font-size: 20px;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;


export const Description = styled.p`
    font-size: 16px;
    color: #2f2e2e;
    text-align: left;
    max-width: 400px;


    @media (max-width: 1024px) {
    max-width: 100%;
    text-align: center;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;


export const ButtonContainer = styled.div`
    margin-top: 20px;
    margin-right: 150px;


    @media (max-width: 1024px) {
    margin: 20px auto;
    text-align: center;
  }

  @media (max-width: 480px) {
    margin: 15px auto;
  }
`;


export const AssessmentButton = styled(Link)`
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
    width: 290px; 
    align-self: flex-start;
    margin-top: 15px;
    margin-right: 375px;
    white-space: nowrap; 

    &:hover {
        background-color: #6d22d1;
        color: #fff;
    }


    @media (max-width: 768px) {
    font-size: 14px;
    width: 250px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    width: 200px;
  }
`;


export const Icon = styled.img`
    margin-left: 0;
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


    @media (max-width: 1024px) {
    max-width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }

  @media (max-width: 480px) {
    max-width: 100%;
  }
`;


export const StyledImage = styled.img`
    width: 100%;
    height: auto;
`;