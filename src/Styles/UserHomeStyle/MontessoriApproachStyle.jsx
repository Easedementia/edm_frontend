import styled from "styled-components";

export const MontessoriApproachContainer = styled.div`
    padding: 50px 20px;
    background-color: #f9fafb;
    text-align: center;
    border-radius: 25px;
    margin-top: 40px;

    @media (max-width: 768px) {
        padding: 40px 15px;
    }

    @media (max-width: 480px) {
        padding: 30px 10px;
    }
`;

export const ApproachImage = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        width: 90px;
        height: 90px;
    }

    @media (max-width: 480px) {
        width: 70px;
        height: 70px;
    }
`;

export const Title = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 36px;
    color: #000;
    margin-bottom: 40px;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 30px;
    }

    @media (max-width: 480px) {
        font-size: 24px;
        margin-bottom: 30px;
    }
`;

export const ApproachContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;

    @media (max-width: 768px) {
        gap: 20px;
    }

    @media (max-width: 480px) {
        gap: 15px;
    }
`;

export const ApproachCard = styled.div`
    background-color: #f9fafb;
    border-radius: 15px;
    padding: 20px;
    width: 120px;
    text-align: center;

    @media (max-width: 768px) {
        width: 100px;
        padding: 15px;
    }

    @media (max-width: 480px) {
        width: 80px;
        padding: 10px;
    }
`;

export const ApproachTitle = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    color: #000;
    font-weight: 500;

    @media (max-width: 768px) {
        font-size: 11px;
    }

    @media (max-width: 480px) {
        font-size: 10px;
    }
`;
