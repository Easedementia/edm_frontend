import styled from "styled-components";



export const ServicesContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    background-color: #f9fafb;
    font-family: 'Poppins', sans-serif;
    margin-top: 90px;
    margin-bottom: 90px;


    @media (max-width: 768px) {
        flex-direction: column;
        padding: 1.5rem;
        margin-top: 60px;
        margin-bottom: 60px;
    }

    @media (max-width: 480px) {
        padding: 1rem;
        margin-top: 50px;
        margin-bottom: 50px;
    }
`;


export const HeadingContainer = styled.div`
    max-width: 50%;


    @media (max-width: 768px) {
        max-width: 100%;
        text-align: center;
        margin-bottom: 2rem;
    }

    @media (max-width: 480px) {
        margin-bottom: 1.5rem;
    }
`;


export const SubHeading = styled.h2`
    font-size: 1.5rem;
    font-weight: 350;
    color: #5517A8;
    text-align: left;


    @media (max-width: 768px) {
        font-size: 1.3rem;
        text-align: center;
    }

    @media (max-width: 480px) {
        font-size: 1.1rem;
    }
`;


export const MainHeading = styled.h1`
    font-size: 3rem;
    color: black;
    margin: 0.5rem 0;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;


    @media (max-width: 768px) {
        font-size: 2.2rem;
        text-align: center;
    }

    @media (max-width: 480px) {
        font-size: 1.8rem;
    }
`;


export const Description = styled.p`
    font-size: 1.1rem;
    color: #2f2e2e;
    text-align: left;


    @media (max-width: 768px) {
        font-size: 1rem;
        text-align: center;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
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
    width: 100%;
    height: auto;


    @media (max-width: 768px) {
        width: 90%;
    }

    @media (max-width: 480px) {
        width: 100%;
    }
`;


