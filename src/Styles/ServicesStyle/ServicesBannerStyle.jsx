import styled from "styled-components";



export const ServicesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    background-color: #f9fafb;
    margin: 80px auto;


    @media (max-width: 1024px) {
        padding: 40px;
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
`;


export const HeadingContainer = styled.div`
    max-width: 50%;


    @media (max-width: 768px) {
        max-width: 100%;
        text-align: center;
        margin-bottom: 20px;
    }

    @media (max-width: 480px) {
        margin-bottom: 15px;
    }
`;


export const SubHeading = styled.h2`
    font-size: 1.5rem;
    font-weight: 350;
    color: #5517A8;
    text-align: left;


    @media (max-width: 768px) {
        font-size: 24px;
        text-align: center;
    }

    @media (max-width: 480px) {
        font-size: 18px;
    }
`;


export const MainHeading = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 48px;
    font-weight: 700;
    color: #000;
    text-align: left;


    @media (max-width: 768px) {
        font-size: 36px;
        text-align: center;
    }

    @media (max-width: 480px) {
        font-size: 28px;
        text-align: center;
    }
`;


export const Description = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    color: #2f2e2e;
    margin-top: 20px;
    line-height: 1.5;
    text-align: left;
    word-wrap: break-word;
    overflow-wrap: break-word;


    @media (max-width: 768px) {
        font-size: 14px;
        text-align: center;
        margin-top: 15px;
        width: 90%;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        width: 90%;
        text-align: center;
        word-wrap: break-word;
        margin-bottom: 30px;
    }
`;


export const ImageContainer = styled.div`
    max-width: 50%;


    @media (max-width: 768px) {
        max-width: 100%;
        text-align: center;
    }

    @media (max-width: 480px) {
        max-width: 100%;
    }
`;


export const StyledImage = styled.img`
    max-width: 100%;
    height: auto;
    margin: 0 auto;
    display: block;


    @media (max-width: 768px) {
        width: 70%;
        margin: 20px auto;
    }

    @media (max-width: 480px) {
        width: 80%;
        margin: 20px auto;
    }
`;


