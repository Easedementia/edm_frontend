import styled from "styled-components";
import { FaStar } from 'react-icons/fa';

export const Container = styled.div`
  width: 100%;
  padding: 20px 0;
  font-family: 'Poppins', sans-serif;


  @media (max-width: 768px) {
    padding: 15px 0;
  }

  @media (max-width: 480px) {
    padding: 10px 0;
  }
`;

export const CategorySection = styled.div`
  margin-bottom: 40px;


  @media (max-width: 768px) {
    margin-bottom: 30px;
  }

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #000;
  font-weight: 700;
  margin-top: 50px;


  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;


export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;


  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const Card = styled.div`
  flex: 1 1 calc(50% - 10px);
  max-width: calc(50% - 10px);
  margin: 10px 0;  /* Adjust margin to fit within the row */
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    flex: 1 1 calc(100% - 10px);
    max-width: calc(100% - 10px);
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;



export const TopRow = styled.div`
  display: flex;
  align-items: center;


  @media (max-width: 480px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const ImageWrapper = styled.div`
  flex: 0 0 80px;

  img {
    width: 100%;
    max-width: 80px;
    height: auto;
    border-radius: 50%;

    @media (max-width: 768px) {
      max-width: 70px;
    }

    @media (max-width: 480px) {
      max-width: 60px;
    }
  }
`;


export const DoctorInfo = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;


  @media (max-width: 480px) {
    margin-left: 0;
    margin-top: 10px;
  }
`;

export const Name = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #000;
  text-align: left;


  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const Specialized = styled.p`
  margin: 5px 0;
  color: #000;
  text-align: left;


  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const DetailsRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  flex-wrap: wrap;


  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  color: black;
  margin-right: 10px;


  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const StarIcon = styled(FaStar)`
  color: #ffcc00;
  margin-left: 5px;
`;

export const Schedule = styled.div`
  margin-right: 10px;
  color: #000;


  @media (max-width: 480px) {
    margin-right: 0;
  }
`;

export const Time = styled.div`
  margin-right: 10px;
  color: #000;


  @media (max-width: 480px) {
    margin-right: 0;
    flex-direction: row;
  }
`;

export const Description = styled.p`
  margin: 10px 0;
  color: #000;
  text-align: left;


  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

export const ExploreMore = styled.div`
  display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    color: #000;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    margin: auto;
    font-weight: 300;
    cursor: pointer;
    
    transition: transform 0.3s;


    &:hover {
        transform: scale(1.05);
        color: #5517A8;
    }

    img {
        width: 56px;
        height: 56px;


        @media (max-width: 768px) {
      width: 40px;
      height: 40px;
    }

    @media (max-width: 480px) {
      width: 35px;
      height: 35px;
    }
    }
`;
