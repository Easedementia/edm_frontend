import styled from 'styled-components';
import {Button} from 'react-bootstrap'

export const Container = styled.div`
  background: #f9f9f9;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
  margin-top: 120px;
  margin-bottom: 150px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

export const DoctorInfo = styled.div`
  flex-grow: 1;
  margin-left: 20px;
  font-family: 'Poppins', sans-serif;
  text-align: left;
  margin-left: 80px;

  h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    margin: 0;
  }
`;

export const Specialization = styled.p`
  color: #000;
  margin: 5px 0;
  font-family: 'Poppins', sans-serif;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  color: #000;
  span {
    margin-left: 5px;
  }
`;

export const IconGroup = styled.div`
  display: flex;
  gap: 10px;
`;

export const Icon = styled.div`
  background: #f0f0f0;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
  
  h3{
    font-size: 16px;
    font-weight: 700;
  }
`;


export const WorkingHoursHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const Hours = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const TimeSlot = styled.div`
  background: ${({ selected, available }) => (selected ? 'green' : available ? '#f0f0f0' : '#e0e0e0')};
  color: ${({ selected, available }) => (selected ? 'white' : available ? 'green' : 'gray')};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: ${({ available }) => (available ? 'pointer' : 'not-allowed')};
  user-select: none;
  margin-top: 8px;
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
    background-color: #f9f9f9;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
  }

  .react-datepicker-wrapper:hover {
    border-color: #451285;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .calendar-icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
    background-image: url('/src/assets/images/calendar_icon.png');
    background-size: cover;
    background-repeat: no-repeat;
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
    width: 125px;
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
`;




export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
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

`;