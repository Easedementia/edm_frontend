import styled, { css } from 'styled-components';

export const ServicesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: #f9f9f9;
  font-family: 'Poppins', sans-serif;
  margin-top: 200px;
`;

export const HeadingContainer = styled.div`
  max-width: 50%;
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
`;

export const Description = styled.p`
  font-size: 1.2rem;
  color: #000;
  text-align: left;
  font-weight: 300;
`;

export const ServiceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  background-color: #f9f9f9;
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
  font-size: 15px;
  margin-bottom: 20px;
  color: #000;
  font-weight: 300;
`;

export const BookButton = styled.button`
  background-color: #5517A8;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 50px;

  &:hover {
    background-color: #5553d7;
  }
`;

export const StyledImage = styled.img`
  width: 30%;
  height: 150px;
  width: 150px;
  object-fit: cover;
`;

export const FirstRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2rem;
  background-color: #f9f9f9;
  font-family: 'Poppins', sans-serif;
  margin-top: 100px;
`;