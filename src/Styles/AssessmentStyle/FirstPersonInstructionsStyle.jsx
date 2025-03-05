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


export const InstructionsList = styled.ul`
    font-size: 16px;
    line-height: 1.8;
    padding-left: 20px;
    margin-bottom: 20px;


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


export const CheckboxWrapper = styled.div`
    margin-bottom: 20px;
    text-align: left;


    @media (max-width: 768px) {
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;





export const Button = styled.button`
    display: flex;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    background-color: ${(props) => (props.disabled ? '#cccccc' : '#5517A8')};
    color: white;
    padding: 10px 20px;
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: bold;
    border: none;
    border-radius: 25px;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 40px;
    width: 140px;
    gap: 2px;


    &:hover{
        background-color: ${(props) => (props.disabled ? '#cccccc' : '#5b00d0')};
    }


    @media (max-width: 768px) {
    width: 130px;
    padding: 8px 18px;
    font-size: 12px;
  }

  @media (max-width: 480px) {
    width: 110px;
    padding: 8px 15px;
    font-size: 10px;
    height: 30px;

  }    
`;


export const ArrowIcon = styled.img`
    margin-left: 75px;
    width: 56px;
    height: 56px; 
    flex-shrink: 0;
    position: absolute;
    transition: transform 0.2s ease;
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
    opacity: ${(props) => (props.disabled ? 0.5 : 1)};
    &:hover {
        transform: scale(1.2); 
        opacity: ${(props) => (props.disabled ? 0.5 : 1)}; 
    }


    @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
    margin-left: 60px;
  }
`;

