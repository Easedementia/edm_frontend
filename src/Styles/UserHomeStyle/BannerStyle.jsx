import { Link } from "react-router-dom";
import styled from "styled-components";


export const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    background-color: #f9f9f9;
`


export const TextContainer = styled.div`
    max-width: 50%;
`


export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 48px;
    font-weight: 700;
    color: #000;
    padding-top: 120px;
    text-align: left;
`


export const Subtitle = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    color: #666;
    margin-top: 20px;
    line-height: 1.5;
    text-align: left;
`


export const ContactButton = styled(Link)`
    display: inline-flex;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;
    margin-top: 30px;
    background-color: #5517A8;
    color: white;
    border: none;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    text-decoration: none;
    transition: background-color 0.3s ease;

    &:hover{
        background-color: #50186C;
    }
`


export const Arrow = styled.span`
    margin-left: 10px;
`


export const ImageContainer = styled.div`
    max-width: 50%;
`


export const BannerImage = styled.img`
    padding-top: 50px;
    max-width: 80%;
    height: auto;
`

