import styled from "styled-components";


export const Container = styled.div`
    width: 1100px;
    background-color: #fff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    font-family: 'Poppins', sans-serif;
    margin: 50px auto;
    margin-top: 150px;


    @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 1024px) {
    width: 85%;
    padding: 25px;
  }

  @media (max-width: 768px) {
    width: 95%;
    margin-top: 100px;
    padding: 20px;
  }

  @media (max-width: 480px) {
    margin-top: 60px;
    padding: 15px;
  }
`;


export const Title = styled.h1`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
    color: black;
    text-align: left;


    @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;


export const Subtitle = styled.h2`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 10px;
    text-align: left;
    color: #1a1919;


    @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;


export const InstructionsList = styled.ol`
    font-size: 16px;
    line-height: 1.8;
    padding-left: 20px;
    margin-bottom: 20px;
    list-style-type: decimal;

    @media (max-width: 768px) {
      font-size: 14px;
    }

    @media (max-width: 480px) {
      font-size: 12px;
    }
`;

export const InstructionItem = styled.li`
    margin-bottom: 10px;
    text-align: left;
    color: black;

    @media (max-width: 768px) {
      margin-bottom: 8px;
    }

    @media (max-width: 480px) {
      margin-bottom: 6px;
    }
`;
