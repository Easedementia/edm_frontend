import styled from "styled-components";
import { Link } from "react-router-dom";


export const ConsultingContainer = styled.div`
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


export const SubHeading = styled.h2`
    font-size: 1.5rem;
    font-weight: 350;
    color: #5517A8;
    text-align: left;
`;


export const MainHeading = styled.h1`
    font-size: 3rem;
    color: black;
    margin: 0.5rem 0;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
`;


export const Description = styled.p`
    font-size: 1.2rem;
    color: gray;
    text-align: left;
`;


export const ImageContainer = styled.div`
    max-width: 50%;
`;


export const StyledImage = styled.img`
    width: 100%;
    height: auto;
`;



export const ContactButton = styled(Link)`
    display: inline-flex;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
    margin-right: 24.5rem;
    margin-top: 25px;
    background-color: #5517A8;
    color: white;
    border: none;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 10.5px;
    text-decoration: none;
    transition: background-color 0.3s ease;

    &:hover{
        background-color: #50186C;
    }
`


export const Arrow = styled.span`
    margin-left: 10px;
`

