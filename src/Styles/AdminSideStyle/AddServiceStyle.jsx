import styled from "styled-components";


export const AddServiceContainer = styled.div`
  margin-top: 20px;
  text-align: center;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

export const AddButton = styled.button`
  padding: 10px 20px;
  margin-top: 40px;
  font-size: 16px;
  cursor: pointer;
  background-color: #5517A8;
  border-radius: 15px;
  color: white;
  transition: background-color 0.3s ease;


  &:hover {
    background-color: #6d22d1;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 6px 12px;
  }
`;

export const ServiceForm = styled.form`
  display: ${props => (props.show ? 'block' : 'none')};
  margin-top: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem;
  }
`;

export const FormField = styled.div`
  margin-bottom: 20px;

  @media (max-width: 480px) {
    margin-bottom: 15px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  color: #000;


  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 10px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #5517A8;
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 6px;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 10px;
  resize: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #5517A8;
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 6px;
  }
`;


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;



export const CancelButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #5517A8;
  border-radius: 15px;
  color: white;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #6d22d1;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    padding: 6px 12px;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #5517A8;
  border-radius: 15px;
  color: white;
`;

