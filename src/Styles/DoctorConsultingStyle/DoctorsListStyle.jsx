import styled from "styled-components";
import { FaStar } from 'react-icons/fa';


export const Container = styled.div`
  overflow: hidden;
  width: 100%;
  padding: 20px 0;
  font-family: 'Poppins', sans-serif;
`;

export const Slider = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const Track = styled.div`
  display: flex;
  animation: scroll 20s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

export const Card = styled.div`
  min-width: 300px;
  margin: 80px 50px;
  padding: 20px;
  border-radius: 10px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

export const TopRow = styled.div`
  display: flex;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  flex: 0 0 80px;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
`;

export const DoctorInfo = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
`;

export const Name = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #000;
`;

export const Specialized = styled.p`
  margin: 5px 0;
  color: #000;
`;

export const DetailsRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  white-space: nowrap;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  color: black;
  margin-right: 10px;
`;

export const StarIcon = styled(FaStar)`
  color: #ffcc00;
  margin-left: 5px;
`;

export const Schedule = styled.div`
  margin-right: 10px;
  color: #000;
`;

export const Time = styled.div`
  margin-right: 10px;
  color: #000;
`;

export const Description = styled.p`
  margin: 10px 0;
  color: #000;
  text-align: left;
`;

export const ExploreMore = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: #5517A8;
  cursor: pointer;
`;