import styled from "styled-components";

export const WeAreOntoWrapper = styled.div`
    padding: 50px 20px;
    background-color: #f9fafb;
    text-align: center;
    border-radius: 25px;
    margin-top: 40px;

    h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 36px;
        color: #000;
        margin-bottom: 40px;
        font-weight: 700;
    }

    @media (max-width: 768px) {
        padding: 40px 15px;
        h2 {
            font-size: 28px;
        }
    }

    @media (max-width: 480px) {
        padding: 30px 10px;
        h2 {
            font-size: 24px;
        }
    }
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
    width: 100%; 
    margin: 0 auto;

    @media (max-width: 768px) {
        gap: 30px;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        gap: 30px;
    }
`;

export const Card = styled.div`
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 100%; /* Responsive width */
    max-width: 480px; /* Constrain to 480px */
    height: auto;
    text-align: center;

    @media (max-width: 768px) {
        
        padding: 15px;
    }

    @media (max-width: 480px) {
        padding: 10px;
    }
`;

export const CardImage = styled.img`
    width: 130px;
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 768px) {
        width: 110px;
        
    }

    @media (max-width: 480px) {
        width: 90px;
    }
`;

export const CardTitle = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    color: #000;
    margin-bottom: 15px;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 18px;
    }

    @media (max-width: 480px) {
        font-size: 16px;
    }
`;

export const CardDescription = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: #282626;
    margin-bottom: 20px;
    text-align: left;

    @media (max-width: 768px) {
        font-size: 13px;
        margin-bottom: 15px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        margin-bottom: 10px;
    }
`;

export const CardButton = styled.button`
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
    font-weight: 300;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;

    transition: transform 0.3s;

    &:hover {
        transform: scale(1.05);
        color: #5517A8;
    }

    img {
        width: 56px;
        height: 56px;

        @media (max-width: 768px) {
            width: 48px;
            height: 48px;
        }

        @media (max-width: 480px) {
            width: 40px;
            height: 40px;
        }
    }

    @media (max-width: 768px) {
        padding: 8px 16px;
        font-size: 13px;
    }

    @media (max-width: 480px) {
        padding: 6px 12px;
        font-size: 12px;
    }
`;
