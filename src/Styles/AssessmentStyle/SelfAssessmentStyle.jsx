import styled from "styled-components";

export const AssessmentContainer = styled.div`
  max-width: 60%;
  margin: 105px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  overflow-x: hidden;


  @media (max-width: 1024px) {
    max-width: 85%;
    overflow-x: hidden;
  }

  @media (max-width: 768px) {
    max-width: 95%;
    padding: 15px;
    overflow-x: hidden;
  }

  @media (max-width: 480px) {
    max-width: 95%;
    padding: 10px;
    overflow-x: hidden;
  }
`;

export const QuestionText = styled.h2`
  font-size: 18px;
  font-weight: 400;
  color: #000;
  margin-bottom: 20px;
  text-align: left;
  font-family: 'Poppins', sans-serif;


  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
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


  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 15px;


  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const StyledImageInput = styled.div`
  text-align: center;
  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
    margin-left: 30px;

    @media (max-width: 768px) {
      width: 80px;
      height: 80px;
    }

    @media (max-width: 480px) {
      width: 70px;
      height: 70px;
    }
  }

  input {
    display: block;
    margin-top: 5px;
    text-align: center;
  }
`;

export const ImageOption = styled.img`
  width: 135px;
  height: 125px;
  object-fit: cover;
  cursor: pointer;
  border: ${(props) => (props.isSelected ? "3px solid #5517A8" : "none")};
  border-radius: 8px;
  transition: border 0.3s ease;


  @media (max-width: 768px) {
    width: 110px;
    height: 100px;
  }

  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;


export const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;


  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
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


  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;
