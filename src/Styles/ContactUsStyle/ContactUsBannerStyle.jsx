import styled from "styled-components";


export const PageWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 80vh;
    background-color: #f9f9f9;
    margin-top: 80px;
    font-family: 'Poppins', sans-serif;
`;


export const LeftSide = styled.div`
  flex: 1;
  padding: 9rem;
  padding-left: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: 'Poppins', sans-serif;
`;

export const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-right: 20px;
`;

export const InfoSection = styled.div`
    max-width: 400px;
    text-align: left;
`;


export const Title = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;
    padding-bottom: 10px;
    color: #000;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
`;


export const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  line-height: 0;
  padding-bottom: 10px;
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
    font-size: 1rem;
    color: #000;
    margin-bottom: 1.5rem;
`;


export const Button = styled.button`
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    background-color: #5517A8;
    color: #fff;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;

    &:hover{
        background-color: #5753d9;
    }
`;


export const ArrowIcon = styled.span`
    margin-left: 0.5rem;
    display: inline-block;
    transform: translateX(5px);
`;


export const FormWrapper = styled.div`
    padding: 2rem;
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    background-color: #f6eefc;
    max-width: 400px;
    width: 80%;
    height: 50%;
    text-align: center;
`;


export const FormTitle = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 10px;
    margin-top: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #000;
`;


export const Icon = styled.img`
    font-size: 1rem;
    margin-right: 0.5rem;
    color: #5517A8;
    height: 100px;
    width: 100px;
`;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: left;
`;


export const Label = styled.label`
    font-size: 14px;
    font-weight: bold;
    color: #000;
    margin-bottom: 0.5rem;
`;


export const Input = styled.input`
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 13px;
    font-family: 'Poppins', sans-serif;

    &:focus{
        border-color: #5517A8;
        outline: none;
    }
`;


export const TextArea = styled.textarea`
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #ddd;
    border-radius: 10px;
    font-size: 13px;
    height: 150px;
    resize: vertical;
    font-family: 'Poppins', sans-serif;

    &:focus{
        border-color: #5517A8;
        outline: none;
    }
`;


export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;


export const FormButton = styled.button`
    padding: 0.75rem;
    font-size: 1rem;
    background-color: #5517A8;
    color: #fff;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    width: 100px;

    &:hover{
        background-color: #5753d9;
    }
`;



export const ErrorMessage = styled.p`
    color: red;
    font-size: 12px;
    margin: -10px 0 10px 0;
`;