import styled from 'styled-components';

export const ValuesContainer = styled.div`
  padding: 10px;
  background-color: #f9fafb;
  text-align: center;
  margin-top: 50px;


  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 30px;
  }
`;

export const Heading = styled.h2`
  font-size: 2rem;
  color: #000;
  font-weight: bold;
  margin-bottom: 2rem;


  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const SingleCardContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 2rem;


  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    gap: 1rem;
  }
`;

export const ValuesContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;


  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const ValuesIcon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 0.1rem;
  margin-top: 10px;


  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const ValuesHeading = styled.h3`
  font-size: 1.1rem;
  color: #000;
  font-weight: bold;
  margin-bottom: 0.3rem;


  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }
`;

export const ValuesDescription = styled.p`
  font-size: 15px;
  color: #2f2e2e;


  @media (max-width: 768px) {
    font-size: 12px;
    text-align: center;
  }
`;
