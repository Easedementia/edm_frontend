import { Link } from "react-router-dom";
import styled from "styled-components";

export const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 80px;
    margin-top: 0;
    background-color: #f9fafb;
    min-height: calc(100vh - 80px);

    @media (max-width: 1024px) {
        padding: 40px;
        min-height: auto;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 30px;
        margin-top: 60px;
        text-align: center;
    }

    @media (max-width: 480px) {
        padding: 20px;
    }
`

export const TextContainer = styled.div`
    max-width: 45%;
    padding-right: 40px;

    @media (max-width: 768px) {
        max-width: 100%;
        text-align: center;
        margin-bottom: 20px;
        padding-right: 0;
    }

    @media (max-width: 480px) {
        margin-bottom: 15px;
    }
`

export const Title = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 56px;
    font-weight: 700;
    color: #1A1A1A;
    line-height: 1.2;
    margin-bottom: 24px;
    text-align: left;

    @media (max-width: 1200px) {
        font-size: 48px;
    }

    @media (max-width: 768px) {
        font-size: 36px;
        text-align: center;
        br {
            display: none;
        }
    }

    @media (max-width: 480px) {
        font-size: 28px;
        text-align: center;
    }
`

export const Subtitle = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    color: #4A4A4A;
    margin: 24px 0;
    line-height: 1.6;
    text-align: left;
    max-width: 90%;

    @media (max-width: 768px) {
        font-size: 16px;
        text-align: center;
        margin: 20px auto;
        max-width: 100%;
    }

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

export const ContactButton = styled(Link)`
    display: inline-flex;
    align-items: center;
    padding: 12px 24px;
    background-color: #5517A8;
    color: white;
    border: none;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    margin-top: 16px;
    position: relative;
    width: fit-content;

    &:hover {
        background-color: #6d22d1;
        transform: translateY(-2px);
    }

    @media (max-width: 768px) {
        margin: 20px auto;
        font-size: 14px;
        padding: 10px 20px;
    }
`;

export const ArrowIcon = styled.img`
    width: 20px;
    height: 20px;
    margin-left: 12px;
    transition: transform 0.2s ease;

    ${ContactButton}:hover & {
        transform: translateX(4px);
    }

    @media (max-width: 768px) {
        width: 16px;
        height: 16px;
    }
`;

export const ImageContainer = styled.div`
    max-width: 55%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        max-width: 100%;
        margin-top: 40px;
    }
`

export const BannerImage = styled.img`
    width: 100%;
    max-width: 600px;
    height: auto;
    object-fit: contain;
    animation: float 6s ease-in-out infinite;

    @keyframes float {
        0% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px);
        }
        100% {
            transform: translateY(0px);
        }
    }

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 480px) {
        width: 90%;
    }
`;

