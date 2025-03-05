import styled from 'styled-components';

export const VisionMissionContainer = styled.div`
  display: flex;
  padding: 2rem;
  background-color: white;
  margin-top: 100px;
  border-radius: 25px;
  flex-wrap: wrap;


  @media (max-width: 768px) {
    padding: 1.5rem;
    margin-top: 80px;
  }

  @media (max-width: 480px) {
    padding: 1rem;
    margin-top: 60px;
    flex-direction: column; /* Stacks the left and right containers vertically */
  }
`;

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding-right: 2rem;


  @media (max-width: 768px) {
    padding-right: 1rem;
  }

  @media (max-width: 480px) {
    text-align: center; /* Centers the text on smaller screens */
    padding-right: 0;
    margin-bottom: 1rem;
  }
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;


  @media (max-width: 768px) {
    padding-left: 1rem;
  }

  @media (max-width: 480px) {
    justify-content: center;
    margin-bottom: 1rem;
  }
`;


export const CardsContainer = styled.div`
  display: flex;
  gap: 1.5rem;


  @media (max-width: 768px) {
    gap: 1rem;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center; /* Centers the cards on smaller screens */
  }
  
`;

export const Card = styled.div`
  background-color: #f9fafb;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  width: 250px;
  text-align: left;


  @media (max-width: 768px) {
    width: 220px;
  }

  @media (max-width: 480px) {
    width: 100%; /* Cards will take full width on smaller screens */
    margin-bottom: 1rem;
  }
`;

export const CardIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CardIcon = styled.img`
  width: 65px;
  height: 65px;
  margin-bottom: 1px;
  margin-top: -25px;


  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

export const CardHeading = styled.h3`
  font-size: 17px;
  color: #000;
  font-weight: bold;
  margin-top: 25px;
  white-space: nowrap;
  overflow: visible;
  


  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;


export const CardDescription = styled.p`
  font-size: 16px;
  color: #2f2e2e;
  text-align: left;
  margin-top: -10px;


  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const Heading = styled.h2`
  font-size: 1.1rem;
  color: #5517A8;
  font-weight: 300;
  margin-bottom: 0.5rem;


  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: left;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    text-align: left;
  }
`;

export const SubHeading = styled.h1`
  font-size: 2.3rem;
  color: #000;
  font-weight: bold;
  margin-bottom: 1rem;


  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: #2f2e2e;
  margin-bottom: 2rem;


  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
