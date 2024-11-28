import styled from "styled-components";


export const PageWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 80vh;
    background-color: #f9fafb;
    margin-top: 80px;
    font-family: 'Poppins', sans-serif;


    @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
    padding: 40px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    min-height: auto;
    padding: 10px;
  }
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


  @media (max-width: 1024px) {
    padding: 3rem;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
  }
`;

export const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-right: 20px;


  @media (max-width: 1024px) {
    margin: 30px 0;
    width: 100%;
  }
`;

export const InfoSection = styled.div`
    max-width: 400px;
    text-align: left;
    margin-bottom: 80px;


    @media (max-width: 1024px) {
    text-align: center;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;


export const Title = styled.h1`
    font-size: 3rem;
    margin-bottom: 1rem;
    padding-bottom: 10px;
    color: #000;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;


    @media (max-width: 1024px) {
    font-size: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
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
`;


export const Description = styled.p`
    font-size: 1rem;
    color: #2f2e2e;
    margin-bottom: 1.5rem;


    @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
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
    width: 138px; 
    align-self: flex-start;
    margin-top: 15px;
    margin-right: 375px;
    white-space: nowrap; 

    &:hover {
        background-color: #6d22d1;
        color: #fff;
    }


    @media (max-width: 480px) {
    font-size: 14px;
    padding: 10px 14px;
  }
`;


export const ArrowIcon = styled.img`
    margin-right: 20px;
    width: 65px;
    height: 65px; 
    transition: transform 0.2s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.2); 
    }


    @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;


export const FormWrapper = styled.div`
    padding: 2rem;
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    background-color: #f9f9f9;
    max-width: 400px;
    width: 80%;
    height: 50%;
    text-align: center;


    @media (max-width: 1024px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
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
    font-weight: 600;


    @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
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
    font-weight: 500;
    color: #2f2e2e;
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


    @media (max-width: 768px) {
    padding: 0.65rem;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 12px;
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


    @media (max-width: 768px) {
    padding: 0.65rem;
    font-size: 13px;
  }

  @media (max-width: 480px) {
    padding: 0.6rem;
    font-size: 12px;
  }
`;


export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;


export const FormButton = styled.button`
    font-size: 1rem;
    background-color: #5517A8;
    color: #fff;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    width: 100px;
    height: 40px;

    &:hover{
        background-color: #5753d9;
    }


    @media (max-width: 768px) {
    padding: 8px 18px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 7px 16px;
    font-size: 0.85rem;
  }
`;



export const ErrorMessage = styled.p`
    color: red;
    font-size: 12px;
    margin: -10px 0 10px 0;


    @media (max-width: 768px) {
    font-size: 11px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;