import styled from "styled-components";
import { Button } from "react-bootstrap";


export const Container = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 45%;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  margin-top: 120px;
  margin-bottom: 150px;


  @media (max-width: 768px) {
    width: 70%;
    padding: 15px;
    margin-top: 100px;
    margin-bottom: 100px;
  }

  @media (max-width: 480px) {
    width: 90%;
    padding: 10px;
    margin-top: 80px;
    margin-bottom: 80px;
  }
`;

export const Header = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin-bottom: 20px;


  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;


  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    font-size: 14px;
    margin-bottom: 15px;
  }
`;

export const DetailLabel = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #000;


  @media (max-width: 480px) {
    margin-bottom: 5px;
  }
`;

export const DetailValue = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #000;


  @media (max-width: 480px) {
    text-align: left;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;


  @media (max-width: 480px) {
    margin-top: 15px;
  }
`;

export const ConfirmButton = styled(Button)`
  background-color: #5517A8;
  border: none;
  &:hover {
    background-color: #451285;
  }


  @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 20px;
  }
`;