import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const FormWrapper = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
  max-width: 100%;
`;

export const FormTitle = styled.h2`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-bottom: 24px;
  font-weight: 600;
`;

export const Icon = styled.img`
  margin-left: 10px;
  width: 32px;
  height: 32px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: #333;
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
`;

export const Message = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: green;
`;
