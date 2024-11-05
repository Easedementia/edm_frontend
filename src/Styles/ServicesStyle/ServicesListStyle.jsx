import styled, { css } from 'styled-components';

export const ServicesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: #f9fafb;
  font-family: 'Poppins', sans-serif;
  margin-top: 200px;
`;

export const HeadingContainer = styled.div`
  max-width: 50%;
  background-color: #f9fafb;
`;

export const SubHeading = styled.h2`
  font-size: 1.3rem;
  font-weight: 350;
  color: #5517A8;
  text-align: left;
`;

export const MainHeading = styled.h1`
  font-size: 2.5rem;
  color: black;
  margin: 0.5rem 0;
  text-align: left;
  font-weight: 700;
`;

export const Description = styled.p`
  font-size: 17px;
  color: #000;
  text-align: left;
  font-weight: 300;
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
`;

export const CardContainer = styled.div`
  max-width: 50%;
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
`;

export const ServiceContent = styled.div`
  padding: 20px;
  width: 60%;
`;

export const ServiceTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #000;
`;

export const ServiceDescription = styled.p`
  font-size: 14px;
  margin-bottom: 20px;
  color: #2f2e2e;
  font-weight: 380;
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
`;

export const StyledImage = styled.img`
  width: 30%;
  height: 150px;
  width: 150px;
  object-fit: cover;
  margin-left: 80px;
`;

export const FirstRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2rem;
  background-color: #f9fafb;
  font-family: 'Poppins', sans-serif;
  margin-top: 100px;
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
`;