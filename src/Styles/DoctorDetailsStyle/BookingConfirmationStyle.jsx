import styled from "styled-components";
import { Button } from "react-bootstrap";


export const Container = styled.div`
  background: #f9f9f9;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  margin-top: 120px;
  margin-bottom: 150px;
`;

export const Header = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  color: #000;
  text-align: center;
  margin-bottom: 20px;
`;

export const Detail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const DetailLabel = styled.div`
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  color: #000;
`;

export const DetailValue = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #000;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ConfirmButton = styled(Button)`
  background-color: #5517A8;
  border: none;
  &:hover {
    background-color: #451285;
  }
`;