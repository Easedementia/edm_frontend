import { Link } from "react-router-dom";
import styled from "styled-components";


export const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    background-color: #f9fafb;
`


export const TextContainer = styled.div`
    max-width: 50%;
`


export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 48px;
    font-weight: 700;
    color: #000;
    padding-top: 30px;
    text-align: left;
`


export const Subtitle = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #2f2e2e;
    margin-top: 20px;
    line-height: 1.5;
    text-align: left;
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
`;




export const ImageContainer = styled.div`
    max-width: 50%;
`


export const BannerImage = styled.img`
    max-width: 100%;
    height: auto;
`;

