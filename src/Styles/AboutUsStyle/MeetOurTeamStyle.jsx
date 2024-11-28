import styled from "styled-components";



export const OuterContainer = styled.div`
  background-color: #ffffff;
  padding: 0;
  border-radius: 5px;
  margin-bottom: 150px;
  margin-top: 100px;


  @media (max-width: 768px) {
    margin-top: 50px;
    margin-bottom: 80px;
  }
`;



export const InnerContainer = styled.div`
  background-color: #f9fafb;
  border-radius: 10px;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;


  @media (max-width: 768px) {
    padding: 1rem;
  }
`;



export const TeamContainer = styled.div`
    text-align: center;
`;


export const TeamSubHeading = styled.h2`
    font-size: 1.3rem;
    color: #5517A8;
    margin-bottom: 10px;
    font-weight: 400;


    @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;


export const TeamHeading = styled.h3`
    font-size: 2rem;
    color: #000;
    font-weight: bold;
    margin-bottom: 2rem;


    @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;


export const TeamGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    justify-items: center;


    @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;


export const TeamMemberCard = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    text-align: center;


    @media (max-width: 768px) {
    padding: 0.8rem;
  }
`;


export const TeamMemberImage = styled.img`
    width: 160px;
    height: 160px;
    border-radius: 10%;
    margin-bottom: 0.1rem;


    @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }

  @media (max-width: 480px) {
    width: 100px;
    height: 100px;
  }
`;


export const TeamMemberName = styled.h4`
    font-size: 1rem;
    color: #000;
    font-weight: bold;
    margin-bottom: 0;
    margin-top: 10px;


    @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;


export const TeamMemberRole = styled.p`
    font-size: 1rem;
    color: #2f2e2e;


    @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;
