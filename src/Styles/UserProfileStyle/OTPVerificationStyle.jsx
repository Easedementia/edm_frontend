import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;


  @media (max-width: 768px) {
    padding: 10px;
    height: auto; /* Adjust height for smaller screens */
  }
`;

export const FormWrapper = styled.div`
  background: #f9f9f9;
  padding: 40px;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 100%;


  @media (max-width: 768px) {
    width: 90%; /* Adjust width for tablets */
    padding: 30px;
  }

  @media (max-width: 480px) {
    width: 95%; /* Adjust width for mobile screens */
    padding: 20px;
  }
`;

export const FormTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-bottom: 24px;
  font-weight: 700;
  text-align: center;
  font-family: 'Poppins', sans-serif;


  @media (max-width: 480px) {
    font-size: 20px; /* Slightly smaller font on mobile */
    margin-bottom: 20px;
  }
`;

export const Icon = styled.img`
  margin-left: 10px;
  width: 32px;
  height: 32px;


  @media (max-width: 480px) {
    width: 28px; /* Adjust icon size */
    height: 28px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #000;
  font-family: 'Poppins', sans-serif;
  border-radius: 25px;


  @media (max-width: 480px) {
    font-size: 13px; /* Slightly smaller font on mobile */
  }
`;

export const Input = styled.input`
  margin-bottom: 16px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  &.error {
    border-color: red;
  }


  @media (max-width: 480px) {
    padding: 8px; /* Adjust padding for mobile */
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  background-color: #5517A8;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #000000;
  }


  @media (max-width: 480px) {
    padding: 10px 18px; /* Adjust padding for mobile */
    font-size: 14px; /* Smaller font size on mobile */
  }
`;

export const Message = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: green;


  @media (max-width: 480px) {
    font-size: 12px; /* Adjust font size for mobile */
  }
`;
