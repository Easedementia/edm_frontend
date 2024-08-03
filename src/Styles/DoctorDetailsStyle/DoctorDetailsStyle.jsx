import styled from 'styled-components';

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
  background: ${({ active }) => (active ? '#e0e0e0' : '#f0f0f0')};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  color: ${({ available }) => (available ? 'green' : 'gray')};
  margin-top: 8px;
`;


export const TodayDate = styled.div`
  color: #000;
  display: flex;
  align-items: center;
  span {
    margin-left: 0;
  }

  input {
    border: none;
    background: none;
    font-size: 16px;
    cursor: pointer;
  }

  .react-datepicker-wrapper {
    display: flex;
    align-items: center;
  }

  .react-datepicker__input-container input {
    width: 120px;
    font-family: 'Poppins';
    font-size: inherit;
    color: inherit;
    padding: 0;
    font-weight: 600;
  }
`;