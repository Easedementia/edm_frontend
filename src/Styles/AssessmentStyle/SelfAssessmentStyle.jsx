import styled from "styled-components";

export const AssessmentContainer = styled.div`
  max-width: 500px;
  margin: 105px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const QuestionText = styled.h2`
  font-size: 18px;
  font-weight: 400;
  color: #000;
  margin-bottom: 20px;
  text-align: left;
  font-family: 'Poppins', sans-serif;
`;

export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  margin-top: 10px;

  &:focus {
    border-color: #5517A8;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 15px;
`;

export const StyledImageInput = styled.div`
  text-align: center;
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
  }
  input {
    display: block;
    margin-top: 5px;
    text-align: center;
  }
`;

export const ImageOption = styled.img`
  width: 170px;
  height: 100px;
  object-fit: cover;
  cursor: pointer;
  border: ${(props) => (props.isSelected ? "3px solid #5517A8" : "none")};
  border-radius: 8px;
  transition: border 0.3s ease;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

export const NavigationButton = styled.button`
  background: #5517A8;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #3d0f77;
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;
