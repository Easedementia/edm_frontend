import styled from "styled-components";


export const PageWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 80vh;
    background-color: #f9fafb;


    @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
  }
`;


export const LeftSide = styled.div`
  flex: 1;
  padding: 9rem;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  font-family: 'Poppins', sans-serif;


  @media (max-width: 768px) {
    padding: 2rem;
    align-items: center;
    text-align: center;
  }
`;

export const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;


  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2rem;
  }
`;

export const InfoSection = styled.div`
    max-width: 400px;
    text-align: left;


    @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;


export const Title = styled.h1`
    font-size: 2.2rem;
    margin-bottom: 1rem;
    padding-bottom: 10px;
    color: #000;
    font-weight: 700;


    @media (max-width: 768px) {
    font-size: 1.8rem;
  }
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


  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;


export const Description = styled.p`
    font-size: 1rem;
    color: #000;
    margin-bottom: 1.5rem;


    @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;


export const Button = styled.button`
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
    width: 100%;
    justify-content: center;
    margin-right: 0;
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


    @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;


export const FormWrapper = styled.div`
    padding: 2rem;
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    background-color: #fff;
    max-width: 400px;
    width: 100%;
    text-align: center;


    @media (max-width: 768px) {
    max-width: 100%;
    padding: 1.5rem;
  }
`;


export const FormTitle = styled.h2`
    font-size: 28px;
    margin-bottom: 10px;
    margin-top: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #000;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;


    @media (max-width: 768px) {
    font-size: 24px;
  }
`;


export const Icon = styled.img`
    font-size: 1rem;
    margin-right: 0.5rem;
    color: #5517A8;
    height: 80px;
    width: 80px;


    @media (max-width: 768px) {
    height: 60px;
    width: 60px;
  }
`;


export const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: left;


    @media (max-width: 768px) {
    text-align: center;
  }
`;


export const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: #000;
    margin-bottom: 0.5rem;


    @media (max-width: 768px) {
    font-size: 13px;
  }
`;


export const Input = styled.input`
    padding: 0.75rem;
    margin-bottom: 1rem;
    border: 1px solid #000;
    border-radius: 10px;
    font-size: 15px;
    height: 45px;
    font-family: 'Poppins', sans-serif;

    &:focus{
        border-color: #5517A8;
        outline: none;
    }


    @media (max-width: 768px) {
    font-size: 14px;
  }
`;


export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;


    @media (max-width: 768px) {
    justify-content: center;
  }
`;


export const FormButton = styled.button`
    font-size: 1rem;
    background-color: #5517A8;
    color: #f9fafb;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    width: 100px;
    height: 40px;
    font-weight: 600;

    &:hover{
        background-color: #5753d9;
    }


    @media (max-width: 768px) {
    width: 100%;
  }
`;


