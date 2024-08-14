import styled from "styled-components";


export const AddServiceContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

export const AddButton = styled.button`
  padding: 10px 20px;
  margin-top: 40px;
  font-size: 16px;
  cursor: pointer;
  background-color: #5517A8;
  border-radius: 15px;
  color: white;
`;

export const ServiceForm = styled.form`
  display: ${props => (props.show ? 'block' : 'none')};
  margin-top: 20px;
`;

export const FormField = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-family: 'Poppins', sans-serif;
  color: #000;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #f9f9f9;
  border-radius: 10px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #f9f9f9;
  border-radius: 10px;
`;


export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;



export const CancelButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #5517A8;
  border-radius: 15px;
  color: white;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #5517A8;
  border-radius: 15px;
  color: white;
`;

