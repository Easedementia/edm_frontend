import styled from 'styled-components';
import {Button} from 'react-bootstrap'
import calendar1 from '../../assets/images/calendar1.svg'

export const Container = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  margin-top: 120px;
  margin-bottom: 150px;


  @media (max-width: 768px) {
    padding: 15px;
    margin-top: 80px;
    margin-bottom: 100px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin-top: 60px;
    margin-bottom: 80px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;


  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;


  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;

export const DoctorInfo = styled.div`
  flex-grow: 1;
  margin-left: 20px;
  text-align: left;

  h2 {
    font-size: 24px;
    font-weight: 700;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 15px;
    text-align: center;

    h2 {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 18px;
    }
  }
`;

export const Specialization = styled.p`
  color: #000;
  margin: 5px 0;
  font-family: 'Poppins', sans-serif;


  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  span {
    margin-left: 5px;
  }


  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const IconGroup = styled.div`
  display: flex;
  gap: 10px;


  @media (max-width: 768px) {
    margin-top: 15px;
    justify-content: center;
  }
`;

export const Icon = styled.div`
  background: #fff;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
        transform: scale(1.2); 
    }


    @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

export const Details = styled.div`
  margin-top: 40px;
  h3{
    font-family: 'Poppins', sans-serif;
    text-align: left;
    font-size: 16px;
    font-weight: 700;
    color: #000;
  }
`;

export const DetailsText = styled.p`
  color: #000;
  line-height: 1.6;
  text-align: left;
  font-family: 'Poppins', sans-serif;
`;

export const WorkingHours = styled.div`
  margin-top: 50px;
  text-align: left;
  color: #000;
  font-family: 'Poppins', sans-serif;
  margin-top: 10px;
  
  
  h3{
    font-size: 16px;
    font-weight: 700;
  }


  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;


export const WorkingHoursHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;


  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;


export const Hours = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;


  @media (max-width: 480px) {
    justify-content: center;
  }
`;

export const TimeSlot = styled.div`
  background: ${({ selected, available }) => (selected ? 'green' : available ? '#f0f0f0' : '#e0e0e0')};
  color: ${({ selected, available }) => (selected ? 'white' : available ? 'green' : 'gray')};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: ${({ available }) => (available ? 'pointer' : 'not-allowed')};
  user-select: none;
  margin-top: 8px;


  @media (max-width: 480px) {
    padding: 8px 15px;
    font-size: 14px;
  }
`;


export const TodayDate = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  

  .react-datepicker-wrapper {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    padding: 8px 12px;
    border-radius: 5px;
    background-color: #f9fafb;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }

  .react-datepicker-wrapper:hover {
    border-color: #451285;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .calendar-icon {
    width: 80px;
    height: 80px;
    margin-right: 9px;
    background-image: url(${calendar1});
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: 40px;
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
          transform: scale(1.2); 
      }
      
  }

  .react-datepicker__input-container {
    display: flex;
    align-items: center;
  }

  .react-datepicker__input-container input {
    border: none;
    background: none;
    font-size: 16px;
    cursor: pointer;
    width: 159px;
    font-family: 'Poppins';
    font-size: inherit;
    color: inherit;
    padding: 0;
    font-weight: 600;
    outline: none;
  }


  .react-datepicker__input-container input:focus {
    box-shadow: none;
  }


  @media (max-width: 480px) {
    .calendar-icon {
      width: 40px;
      height: 40px;
    }
  }
`;




export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;


  @media (max-width: 480px) {
    margin-top: 15px;
  }
`;


export const BookButton = styled(Button)`
  background-color: #5517A8;
  border: none;
  &:hover{
    background-color: #451285;
  }
  
  &:disabled {
    background-color: #8a8a8a;
    cursor: not-allowed;
  }


  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 14px;
  }

`;