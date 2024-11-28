import styled from "styled-components";

export const FAQContainer = styled.div`
    padding: 20px;
    background-color: #f9fafb;
    border-radius: 8px;
    width: 80%;
    margin: 0 auto;
    margin-top: 70px;


    @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }

  @media (max-width: 480px) {
    width: 95%;
    margin-top: 50px;
  }
`;


export const FAQTitle = styled.h2`
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
    color: #000;
    font-weight: 700;


    @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;


export const QuestionContainer = styled.div`
    margin-bottom: 10px;


    @media (max-width: 480px) {
    margin-bottom: 8px;
  }
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


    @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
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


    @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
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


    @media (max-width: 768px) {
    height: 40px;
    width: 40px;
  }

  @media (max-width: 480px) {
    height: 35px;
    width: 35px;
  }
`;