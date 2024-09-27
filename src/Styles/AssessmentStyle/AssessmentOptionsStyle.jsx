import { Link } from "react-router-dom";
import styled from "styled-components";


export const OptionsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 2rem;
    gap: 2rem;
`;


export const OptionCard = styled.div`
    background-color: #fff;
    border-radius: 16px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    max-width: 300px;
    cursor: pointer;
`;  


export const OptionImage = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 1px;
`;


export const OptionTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem 0;
    color: black;
`;


export const OptionDescription = styled.p`
    font-size: 1rem;
    color: #666;
    margin: 1rem 0;
    text-align: left;
`;


export const OptionLink = styled(Link)`
    display: inline-block;
    margin-top: 1rem;
    font-size: 1rem;
    color: #5517A8;
    font-weight: bold;
    text-decoration: none;
    position: relative;
    transition: color 0.3s ease;

    &:hover{
        color: #331256;
    }

    &::after{
        content: '→';
        font-size: 1rem;
        margin-left: 5px;
    }
`;