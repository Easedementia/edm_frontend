import styled from "styled-components";


export const WeAreOntoWrapper = styled.div`
    padding: 50px 20px;
    background-color: #f9f9f9;
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
    width: 300px;
    text-align: center;
`;


export const CardImage = styled.img`
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
`;


export const CardTitle = styled.h3`
    font-family: 'Poppins', sans-serif;
    font-size: 20px;
    color: #000;
    margin-bottom: 15px;
    font-weight: 600;
`;



export const CardDescription = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: #6c757d;
    margin-bottom: 20px;
`;




export const CardButton = styled.button`
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: white;
    background-color: #5517A8;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #5a34a1;
    }
`;