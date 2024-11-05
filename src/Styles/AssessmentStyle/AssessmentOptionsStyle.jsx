import { Link } from "react-router-dom";
import styled from "styled-components";


export const OptionsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 2rem;
    gap: 2rem;
    background-color: #f9fafb;
`;


export const OptionCard = styled.div`
    background-color: #fff;
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    max-width: 300px;
    cursor: pointer;
    height: 305px;
`;  


export const OptionImage = styled.img`
    width: 120px;
    height: 120px;
    margin-bottom: 1px;
    margin-top: -40px;
    align-items: center;
    margin-left: 60px;
`;


export const OptionTitle = styled.h3`
    font-size: 20px;
    font-weight: bold;
    margin: 1rem 0;
    color: black;
    margin-top: -10px;
`;


export const OptionDescription = styled.p`
    font-size: 14px;
    color: #2f2e2e;
    margin: 1rem 0;
    text-align: left;
`;


export const OptionLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    color: #000;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    margin-left: 15px;
    margin-top: -15px;
    font-weight: 300;
    cursor: pointer;
    white-space: nowrap;
    
    transition: transform 0.3s;


    &:hover {
        transform: scale(1.05);
        color: #5517A8;
    }

    img {
        width: 56px;
        height: 56px;
    }
`;