// src/Styles/UserHomeStyle/SpecialitiesStyle.jsx
import styled from 'styled-components';

export const SpecialitiesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  background-color: #f9fafb;
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
  width: 80%;

  /* Define grid areas to customize the layout */
  grid-template-areas:
    "card1 card2 card3 card4"
    "card1 card5 card6 card6"
    "card7 card8 card6 card6";

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "card1 card2"
      "card3 card4"
      "card5 card6"
      "card7 card8";
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "card1"
      "card2"
      "card3"
      "card4"
      "card5"
      "card6"
      "card7"
      "card8";
  }
`;

export const SpecialityCard = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 150px;
  grid-area: ${({ area }) => area};
`;

export const SpecialityImage = styled.img`
  width: 100px;
  height: auto;
  margin-top: 10px;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #5517A8;
  font-family: 'Poppins', sans-serif;
`;

export const SubTitle = styled.p`
  font-size: 14px;
  color: #333;
  font-family: 'Poppins', sans-serif;
  margin: 10px 0;
`;

export const HighlightedText = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #5517A8;
  margin: 5px 0;
`;
