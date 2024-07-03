import styled from "styled-components";



export const OuterContainer = styled.div`
  background-color: #ffffff;
  padding: 3rem 3rem;
  border-radius: 25px;
  margin-bottom: 150px;
`;



export const InnerContainer = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;



export const TeamContainer = styled.div`
    text-align: center;
`;


export const TeamSubHeading = styled.h2`
    font-size: 1.3rem;
    color: #5517A8;
    margin-bottom: 10px;
    font-weight: 400;
`;


export const TeamHeading = styled.h3`
    font-size: 2rem;
    color: #2b2b2b;
    font-weight: bold;
    margin-bottom: 2rem;
`;


export const TeamGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    justify-items: center;
`;


export const TeamMemberCard = styled.div`
    background-color: #fff;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
    text-align: center;
`;


export const TeamMemberImage = styled.img`
    width: 160px;
    height: 160px;
    border-radius: 10%;
    margin-bottom: 0.1rem;
`;


export const TeamMemberName = styled.h4`
    font-size: 1rem;
    color: #2b2b2b;
    font-weight: bold;
    margin-bottom: 0;
`;


export const TeamMemberRole = styled.p`
    font-size: 1rem;
    color: gray;
`;
