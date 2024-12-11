// src/Styles/UserSignup/UserSignupStyle.jsx
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: row;
  background-color: #f9fafb;
  width: 100%;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
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


  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;


export const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin-top: -20px;


  @media (max-width: 768px) {
    margin-top: 20px;
    width: 100%;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    margin-top: 10px;
    width: 100%;
    padding: 1rem;
  }
`;



export const MainTitle = styled.h1`
  font-size: 2.5rem;
  line-height: 0.5;
  text-align: left;
  color: black;
  font-weight: 700;
  margin-bottom: 30px;


  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;



export const TitleSpan = styled.span`
  display: block;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
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


  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #000;
  text-align: left;


  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
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


    @media (max-width: 768px) {
    align-self: center;
  }

  @media (max-width: 480px) {
    width: 140px;
    font-size: 14px;
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


    @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

export const FormWrapper = styled.div`
  padding: 1.5rem;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  max-width: 350px;
  width: 100%;
  height: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: visible;
  margin: auto;
  margin-top: 80px;


  @media (min-width: 1024px) {
    height: auto; /* Adjust for larger screens */
    padding: 2rem;
  }

  @media (max-width: 768px) {
    max-width: 85%;
    height: auto;
  }

  @media (max-width: 480px) {
    max-width: 90%;
    padding: 1rem;
  }
`;

export const FormTitle = styled.h2`
  font-size: 25px;
  margin-bottom: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0;
  color: #000;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;


  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

export const Icon = styled.img`
  font-size: 1rem;
  margin-right: 0.5rem;
  color: #5517A8;
  height: 60px;
  width: 60px;


  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
  }

  @media (max-width: 480px) {
    height: 40px;
    width: 40px;
    margin-right: 0.3rem;
  }
`;



export const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;


  @media (max-width: 768px) {
    flex-grow: unset;
    width: 100%;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0;
  }
`;



export const Label = styled.label`
  text-align: left;
  font-size: 0.8rem;
  font-weight: 650;
  color: #000;
  margin-bottom: 0.2rem;
  font-family: 'Poppins', sans-serif;


  @media (max-width: 768px) {
    font-size: 0.7rem;
  }

  @media (max-width: 480px) {
    font-size: 0.6rem;
    text-align: center;
  }
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #000;
  height: 35px;
  border-radius: 10px;
  font-size: 0.9rem;
  &:focus {
    border-color: #5517A8;
    outline: none;
  }


  @media (max-width: 480px) {
    font-size: 0.9rem;
    height: 30px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;


  @media (max-width: 768px) {
    justify-content: space-around;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Button = styled.button`
  height: 35px;
  font-size: 0.9rem;
  background-color: #5517A8;
  color: #fff;
  border: none;
  border-radius: 15px;
  font-weight: 700;
  text-align: center;
  cursor: pointer;
  width: 120px; 
  &:hover {
    background-color: #6d22d1;
  }


  @media (max-width: 480px) {
    width: 100px;
    font-size: 0.9rem;
    height: 30px;
  }
`;
