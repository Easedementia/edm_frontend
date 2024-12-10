import { Link } from "react-router-dom";
import styled from "styled-components";


export const OptionsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 2rem;
    gap: 2rem;
    background-color: #f9fafb;


    @media (max-width: 768px) {
        gap: 1.5rem; /* Reduce gap between cards */
    }

    @media (max-width: 480px) {
        flex-direction: column; /* Stack the cards vertically */
        gap: 1rem;
        padding: 1rem;
    }
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


    @media (max-width: 768px) {
        max-width: 250px; /* Slightly reduce card width */
    }

    @media (max-width: 480px) {
        max-width: 100%; /* Full width on mobile */
        padding: 1.5rem;
    }
`;  


export const OptionImage = styled.img`
    width: 120px;
    height: 120px;
    margin-bottom: 1px;
    margin-top: -40px;
    align-items: center;
    margin-left: 60px;


    @media (max-width: 480px) {
        width: 100px;
        height: 100px;
        margin: -30px auto 8px;
    }
`;


export const OptionTitle = styled.h3`
    font-size: 20px;
    font-weight: bold;
    margin: 1rem 0;
    color: black;
    margin-top: -10px;


    @media (max-width: 480px) {
        font-size: 18px; /* Adjust font size for mobile */
        margin: 0.8rem 0;
    }
`;


export const OptionDescription = styled.p`
    font-size: 14px;
    color: #2f2e2e;
    margin: 1rem 0;
    text-align: left;


    @media (max-width: 480px) {
        font-size: 13px; /* Slightly smaller font on mobile */
        margin: 0.8rem 0;
        text-align: center; /* Center text for mobile */
    }
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

        @media (max-width: 480px) {
            width: 40px;
            height: 40px;
        }
    }


    @media (max-width: 480px) {
        font-size: 13px;
        padding: 8px 16px; /* Reduce padding for smaller screens */
    }
`;