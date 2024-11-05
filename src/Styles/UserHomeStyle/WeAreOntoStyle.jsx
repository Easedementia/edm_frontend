import styled from "styled-components";


export const WeAreOntoWrapper = styled.div`
    padding: 50px 20px;
    background-color: #f9fafb;
    text-align: center;
    border-radius: 25px;
    margin-top: 40px;

    h2{
        font-family: 'Poppins', sans-serif;
        font-size: 36px;
        color: #000;
        margin-bottom: 40px;
        font-weight: 700;
    }
`;


export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    flex-wrap: wrap;
`;


export const Card = styled.div`
    background-color: white;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
    padding: 20px;
    width: 480px;
    height: 360px;
    text-align: center;
`;


export const CardImage = styled.img`
    width: 130px;
    height: 70px;
    margin-bottom: 10px;
    margin-left: 35%;
`;


export const CardTitle = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    color: #000;
    margin-bottom: 15px;
    font-weight: 700;
`;



export const CardDescription = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: #282626;
    margin-bottom: 20px;
    text-align: left;
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
    margin-left: 120px;
    font-weight: 300;
    cursor: pointer;
    
    transition: transform 0.3s;


    &:hover {
        transform: scale(1.05);
        color: #5517A8;
    }

    img {
        width: 56px;
        height: 56px;
    }
`;
