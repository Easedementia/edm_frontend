import styled from 'styled-components';

export const VisionMissionContainer = styled.div`
  display: flex;
  padding: 2rem;
  background-color: white;
  margin-top: 100px;
  border-radius: 25px;
`;

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding-right: 2rem;
`;

export const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  
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
`;

export const CardIconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CardIcon = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 1px;
  margin-left: 0;
  margin-top: -30px;
`;

export const CardHeading = styled.h3`
  font-size: 17px;
  color: #000;
  font-weight: bold;
  margin-top: 25px;
  white-space: nowrap;
  overflow: visible;
  
`;


export const CardDescription = styled.p`
  font-size: 15px;
  color: #2f2e2e;
  text-align: left;
  margin-top: -10px;
`;

export const Heading = styled.h2`
  font-size: 1.5rem;
  color: #5517A8;
  font-weight: 300;
  margin-bottom: 0.5rem;
`;

export const SubHeading = styled.h1`
  font-size: 2.3rem;
  color: #000;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: 1.1rem;
  color: #2f2e2e;
  margin-bottom: 2rem;
`;
