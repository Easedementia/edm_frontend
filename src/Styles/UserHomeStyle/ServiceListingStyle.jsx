import styled from "styled-components";


export const ServiceListingWrapper = styled.div`
    padding: 50px;
    background-color: white;
    text-align: center;
    border-radius: 25px;
    margin-top: 40px;
    width: 100%;
    position: relative;
    box-sizing: border-box;

    h2 {
        font-family: 'Poppins', sans-serif;
        font-size: 36px;
        color: #000;
        margin-bottom: 40px;
    }
`;


export const ServiceContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 20px;
`;


export const ServiceCard = styled.div`
    background-color: #f9f9f9;
    border-radius: 15px;
    padding: 20px;
    text-align: center;
    width: 200px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;


export const ServiceIcon = styled.img`
    height: 80px;
    margin-bottom: 20px;
`;


export const ServiceTitle = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    color: #000;
    margin-bottom: 15px;
`;


export const ServiceDescription = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    color: #5a5a5a;
    margin-bottom: 20px;
`;


export const ServiceLink = styled.a`
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: #ffffff;
    background-color: #5517A8;
    padding: 10px 20px;
    border-radius: 25px;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    transition: background-color 0.3s;

    
    &::after{
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        border-right: 2px solid #fff;
        border-top: 2px solid #fff;
        transform: rotate(45deg);
        margin-left: 10px;
    }

    &:hover{
        background-color: #5b21b6;
    }
`;