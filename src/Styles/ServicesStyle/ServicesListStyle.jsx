import styled, { css } from 'styled-components';

export const ServicesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: #f9fafb;
  font-family: 'Poppins', sans-serif;
  margin-top: 200px;


  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 100px;
  }
`;

export const HeadingContainer = styled.div`
  max-width: 50%;
  background-color: #f9fafb;


  @media (max-width: 768px) {
    max-width: 100%;
    text-align: center;
  }
`;

export const SubHeading = styled.h2`
  font-size: 1.3rem;
  font-weight: 350;
  color: #5517A8;
  text-align: left;


  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const MainHeading = styled.h1`
  font-size: 2.5rem;
  color: black;
  margin: 0.5rem 0;
  text-align: left;
  font-weight: 700;


  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const Description = styled.p`
  font-size: 17px;
  color: #000;
  text-align: left;
  font-weight: 300;


  @media (max-width: 768px) {
    text-align: center;
    font-size: 15px;
  }
`;

export const ServiceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: #f9fafb;
  font-family: 'Poppins', sans-serif;
  ${({ reverse }) =>
    reverse &&
    css`
      flex-direction: row-reverse;
    `}


    @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CardContainer = styled.div`
  max-width: 50%;


  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 1rem;
  }
`;

export const ServiceCard = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  flex-direction: row;
  text-align: left;


  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

export const ServiceContent = styled.div`
  padding: 20px;
  width: 60%;


  @media (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;

export const ServiceTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #000;


  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

export const ServiceDescription = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  color: #2f2e2e;
  font-weight: 400;


  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const BookButton = styled.button`
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
    width: 243px; 
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
    margin-right: 0;
  }

  @media (max-width: 480px) {
    width: 200px;
    font-size: 14px;
  }
`;

export const StyledImage = styled.img`
  width: 30%;
  height: 150px;
  width: 150px;
  object-fit: cover;
  margin-left: 80px;


  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 1rem;
    width: 100px;
    height: 100px;
  }
`;

export const FirstRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2rem;
  background-color: #f9fafb;
  font-family: 'Poppins', sans-serif;
  margin-top: 100px;


  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;


export const ArrowIcon = styled.img`
    margin-left: 0;
    width: 65px;
    height: 65px;
    transition: transform 0.2s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.2);
    }


    @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;