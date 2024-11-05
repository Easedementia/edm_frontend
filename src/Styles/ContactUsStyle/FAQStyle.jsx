import styled from "styled-components";

export const FAQContainer = styled.div`
    padding: 20px;
    background-color: #f9fafb;
    border-radius: 8px;
    width: 80%;
    margin: 0 auto;
    margin-top: 70px;
`;


export const FAQTitle = styled.h2`
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
    color: #000;
    font-weight: 700;
`;


export const QuestionContainer = styled.div`
    margin-bottom: 10px;
`;


export const Question = styled.div`
    background: #fff;
    padding: 15px;
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    color: #000;

    &:hover{
        background: #f1f1f1;
    }
`;


export const Answer = styled.div`
    background: #fff;
    padding: 15px;
    border-radius: 8px;
    margin-top: 5px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    color: #000;
`;


export const ArrowIcon = styled.img`
    display: inline-block;
    transition: transform 0.3s ease;
    transform: rotate(${props => props.rotate}deg);
    transform-origin: center;
    height: 50px;
    width: 50px;
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.2); 
    }
`;