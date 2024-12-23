import styled from 'styled-components';

export const SpecialitiesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  background-color: #f9fafb;
  margin-top: 100px;
  box-sizing: border-box;


  @media (max-width: 1024px) {
    padding: 40px 0;
  }

  @media (max-width: 768px) {
    padding: 30px 0;
  }

  @media (max-width: 480px) {
    padding: 20px 0;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
  width: 80%;
  max-width: 1200px;

  /* Define grid areas to customize the layout */
  grid-template-areas:
    "card1 card2 card3 card4"
    "card1 card5 card6 card6"
    "card7 card8 card6 card6";

    @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "card1 card2 card3"
      "card4 card5 card6"
      "card7 card8 card6";
    grid-gap: 30px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "card1 card2"
      "card3 card4"
      "card5 card6"
      "card7 card8";
    grid-gap: 30px;
    width: 80%;
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
    grid-gap: 30px;
    width: 80%;
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

  @media (max-width: 1024px) {
    padding: 18px;
    min-height: 140px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    min-height: 130px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    min-height: 120px;
  }
`;

export const SpecialityImage = styled.img`
  width: 100px;
  height: auto;
  margin-top: 10px;
  max-width: 100%;

  @media (max-width: 1024px) {
    width: 90px;
  }

  @media (max-width: 768px) {
    width: 80px;
  }

  @media (max-width: 480px) {
    width: 70px;
  }
`;


export const Title = styled.h1`
  font-size: 24px;
  color: #5517a8;
  font-family: 'Poppins', sans-serif;

  @media (max-width: 1024px) {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const SubTitle = styled.p`
  font-size: 14px;
  color: #333;
  font-family: 'Poppins', sans-serif;
  margin: 10px 0;

  @media (max-width: 1024px) {
    font-size: 13px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    max-width: 100%;
    text-align: center;
  }
`;

export const HighlightedText = styled.h2`
  font-size: 28px;
  font-weight: bold;
  color: #5517a8;
  margin: 5px 0;

  @media (max-width: 1024px) {
    font-size: 26px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;
