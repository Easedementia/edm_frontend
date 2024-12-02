import styled from "styled-components";



export const AboutUsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem;
    background-color: #f9fafb;
    font-family: 'Poppins', sans-serif;
    margin-top: 110px;


    @media (max-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
        padding: 1rem;
    }


    @media (max-width: 480px) {
        flex-direction: row;
        padding: 0.5rem;
        margin-top: 80px;
    }
`;


export const HeadingContainer = styled.div`
    max-width: 50%;


    @media (max-width: 768px) {
        max-width: 100%;
        text-align: left;
    }


    @media (max-width: 480px) {
        text-align: left;
        max-width: 50%;
        padding: 0 0.5rem;
    }
`;


export const SubHeading = styled.h2`
    font-size: 1.5rem;
    font-weight: 350;
    color: #5517A8;
    text-align: left;


    @media (max-width: 768px) {
        font-size: 1.2rem;
        text-align: left;
    }


    @media (max-width: 480px) {
        font-size: 1.1rem;
        text-align: left;
    }
`;


export const MainHeading = styled.h1`
    font-size: 3rem;
    color: black;
    margin: 0.5rem 0;
    text-align: left;
    font-weight: 700;


    @media (max-width: 768px) {
        font-size: 2rem;
        text-align: left;
    }


    @media (max-width: 480px) {
        font-size: 1.8rem;
        text-align: left;
    }
`;


export const Description = styled.p`
    font-size: 16px;
    color: #2f2e2e;
    text-align: left;


    @media (max-width: 768px) {
        font-size: 14px;
        text-align: left;
    }


    @media (max-width: 480px) {
        font-size: 13px;
        text-align: left;
        padding: 0 1rem;
    }
`;


export const ImageContainer = styled.div`
    max-width: 50%;


    @media (max-width: 768px) {
        max-width: 50%;
        /* margin-top: 20px; */
    }


    @media (max-width: 480px) {
        margin-top: 15px;
        /* max-width: 50%; */
    }
`;


export const StyledImage = styled.img`
    width: 100%;
    height: auto;
    margin-bottom: 60px;
    margin-left: 30px;


    @media (max-width: 768px) {
        /* margin-left: 0; */
        /* margin-bottom: 30px; */
        width: 100%;
    }


    @media (max-width: 480px) {
        /* margin-left: 0;
        margin-bottom: 20px; */
        width: 100%;
    }
`;


