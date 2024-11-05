// src/Styles/UserSignup/UserSignupStyle.jsx
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 80vh;
  background-color: #fff;
  width: 100%;
`;

export const LeftSide = styled.div`
  flex: 1;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: 'Poppins', sans-serif;
  margin-top: 60px;
`;

export const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;



export const MainTitle = styled.h1`
  font-size: 2.5rem;
  line-height: 0.5;
  text-align: left;
  color: black;
  font-weight: 700;
  margin-bottom: 30px;
`;



export const TitleSpan = styled.span`
  display: block;
  text-align: left;
`;



export const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 0;
  color: #5517A8;
  a {
    color: #5517A8;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #000;
  text-align: left;
`;

export const KnowMoreButton = styled.button`
  display: flex; 
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px; /* Adjust padding */
    background-color: #5517A8;
    color: white;
    border: none;
    border-radius: 50px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    text-decoration: none;
    transition: background-color 0.3s ease;
    height: 40px; 
    width: 165px; 
    align-self: flex-start;
    margin-top: 15px;
    margin-right: 375px;
    white-space: nowrap; 

    &:hover {
        background-color: #6d22d1;
        color: #fff;
    }
`;


export const ArrowIcon = styled.img`
    margin-left: 10px;
    width: 65px;
    height: 65px; 
    transition: transform 0.2s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.2); 
    }
`;

export const FormWrapper = styled.div`
  padding: 1.5rem;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  background-color: #f9fafb;
  max-width: 400px;
  width: 100%;
  height: 85vh;
  text-align: center;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const FormTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  color: #000;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
`;

export const Icon = styled.img`
  font-size: 1rem;
  margin-right: 0.5rem;
  color: #5517A8;
  height: 60px;
  width: 60px;
`;



export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;



export const Label = styled.label`
  text-align: left;
  font-size: 0.8rem;
  font-weight: 650;
  color: #000;
  margin-bottom: 0.2rem;
  font-family: 'Poppins', sans-serif;
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  height: 35px;
  border-radius: 10px;
  font-size: 1rem;
  &:focus {
    border-color: #5517A8;
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  height: 35px;
  font-size: 1rem;
  background-color: #5517A8;
  color: #fff;
  border: none;
  border-radius: 25px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  width: 120px; 
  &:hover {
    background-color: #6d22d1;
  }
`;
