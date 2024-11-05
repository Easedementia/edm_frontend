import styled from "styled-components";


export const ServiceListingWrapper = styled.div`
    padding: 50px;
    background-color: white;
    text-align: center;
    border-radius: 20px;
    margin-top: 40px;
    width: 100%;
    position: relative;
    box-sizing: border-box;

    h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 36px;
        color: #000;
        margin-bottom: 40px;
        font-weight: 700;
    }
`;


export const ServiceContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 20px;
`;


export const ServiceCard = styled.div`
    background-color: #f9fafb;
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    width: 200px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;


export const ServiceIcon = styled.img`
    height: 80px;
    margin-bottom: 20px;
    align-items: center;
    margin-left: 9px;
`;


export const ServiceTitle = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 16.9px;
    color: #000;
    margin-bottom: 15px;
    font-weight: 700;
`;


export const ServiceDescription = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    color: #2e2e2e;
    margin-bottom: 20px;
    text-align: left;
`;


export const ServiceLink = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 1px; 
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    color: #000;
    text-decoration: none;
    font-weight: 350;
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.05);
        color: #5517A8;
    }

    img {
        width: 48px;
        height: 48px;
    }
`;
