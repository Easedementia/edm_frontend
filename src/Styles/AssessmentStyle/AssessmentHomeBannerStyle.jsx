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
`;


export const HeadingContainer = styled.div`
    max-width: 50%;
`;


export const MainHeading = styled.h1`
    font-size: 48px;
    color: black;
    margin: 0.5rem 0;
    text-align: left;
    font-weight: 700;
`;


export const SubHeading = styled.h2`
    font-size: 24px;
    font-weight: 350;
    color: #5517A8;
    text-align: left;
`;


export const Description = styled.p`
    font-size: 16px;
    color: #2f2e2e;
    text-align: left;
    max-width: 400px;
`;


export const ButtonContainer = styled.div`
    margin-top: 20px;
    margin-right: 150px;
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
`;


export const ImageContainer = styled.div`
    max-width: 50%;
`;


export const StyledImage = styled.img`
    width: 100%;
    height: auto;
`;