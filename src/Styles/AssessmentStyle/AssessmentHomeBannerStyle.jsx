import { Link } from "react-router-dom";
import styled from "styled-components";


export const AssessmentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    background-color: #f9f9f9;
    font-family: 'Poppins', sans-serif;
`;


export const HeadingContainer = styled.div`
    max-width: 50%;
`;


export const MainHeading = styled.h1`
    font-size: 3rem;
    color: black;
    margin: 0.5rem 0;
    text-align: left;
    font-weight: 700;
`;


export const SubHeading = styled.h2`
    font-size: 2rem;
    font-weight: 350;
    color: #5517A8;
    text-align: left;
`;


export const Description = styled.p`
    font-size: 1.2rem;
    color: gray;
    text-align: left;
    max-width: 400px;
`;


export const ButtonContainer = styled.div`
    margin-top: 20px;
    margin-right: 150px;
`;


export const AssessmentButton = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    background-color: #5517A8;
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 1rem;
    text-decoration: none;
    transition: background-color 0.3s ease;

    &:hover{
        background-color: #50186C;
    }
`;


export const Icon = styled.span`
    margin-left: 10px;
`;


export const ImageContainer = styled.div`
    max-width: 50%;
`;


export const StyledImage = styled.img`
    width: 100%;
    height: auto;
`;