import styled from 'styled-components';

// Container for the entire profile section
export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  margin-top: 100px;
  gap: 120px;


  @media (max-width: 1024px) {
    gap: 60px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin-top: 50px;
    gap: 10px;
  }
`;

// Profile details on the left side
export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 45%;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-left: 40px;
  font-family: 'Poppins', sans-serif;


  @media (max-width: 768px) {
    width: 90%;
    margin-left: 0;
  }

  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid #5517A8;


  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  }
`;


export const EditIcon = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;  
  height: 30px;
  padding: 0;  
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  background: none;  
  border-radius: 50%;


  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
  }
`;



// User name
export const UserName = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
  color: #000;
  font-weight: 600;


  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

// User contact details
export const UserContact = styled.div`
  text-align: center;
  font-size: 14px;
  color: #000;


  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

// Buttons container
export const ButtonsContainer = styled.div`
  margin-top: 40px;
  width: 100%;


  @media (max-width: 480px) {
    margin-top: 30px;
    padding: 0 10px;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => (props.selected ? '#5517A8' : '#f9fafb')};
  color: ${(props) => (props.selected ? '#f9fafb' : '#000')}; 
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  padding: 12px;
  width: calc(100% - 30px);
  max-width: 100%;
  height: 50px;
  border: 1px solid #eaeaea;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px auto;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.selected ? '#5517A8' : '#d0d0d5')}; 
    color: ${(props) => (props.selected ? '#ffffff' : '#000')};
  }

  img {
    margin-left: 12px; 
    width: 58px;
    height: 58px;
    filter: drop-shadow(2px 4px 6px rgba(0, 0, 0, 0.3));

    

    @media (max-width: 480px) {
      width: 48px;
      height: 48px;
      text-align: left;
    }
  }
`;



// Summary section on the right side
export const SummaryContainer = styled.div`
  width: 50%;
  padding: 20px;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-right: 40px;


  @media (max-width: 1024px) {
    width: 60%;
    margin-right: 0;
  }


  @media (max-width: 768px) {
    width: 90%;
  }


  @media (max-width: 480px) {
    width: 100%;
    padding: 15px;
  }
`;

// Summary title
export const SummaryTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  color: #000;
  text-align: left;
  font-weight: 600;


  @media (max-width: 480px) {
    font-size: 20px;
  }
`;


export const SummaryImage = styled.img`
  max-width: 100%;
  height: auto;
  align-items: center;
  border-radius: 12px;


  @media (max-width: 768px) {
    max-width: 300px;
  }

  @media (max-width: 480px) {
    max-width: 250px;
  }
`;

// Table container
export const TableContainer = styled.div`
  width: 100%;
  /* border-collapse: collapse; */
  overflow-x: auto;
  display: block;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: auto;
  font-size: 14px;

  @media (max-width: 480px) {
    table-layout: fixed;
    font-size: 12px;
  }
`;

export const TableHeader = styled.th`
  text-align: center;
  padding: 8px;
  font-size: 14px;
  color: #000;
  white-space: normal;
  word-wrap: break-word;

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 4px;
  }
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #eaeaea;

  &:last-child {
    border-bottom: none; /* Remove border for the last row */
  }

  @media (max-width: 480px) {
    display: table-row; /* Maintain table structure */
  }
`;

export const TableData = styled.td`
  padding: 8px;
  font-size: 14px;
  white-space: normal;
  word-wrap: break-word;
  text-align: center;
  color: #000;
  font-family: 'Poppins', sans-serif;


  @media (max-width: 480px) {
    font-size: 12px;
    padding: 4px;
  }
`;

export const Status = styled.span`
  color: ${(props) => {
    if (props.status === 'Completed') return 'green';
    if (props.status === 'Pending') return 'orange';
    if (props.status === 'Cancelled') return 'red';
    return '#555';
  }};
  font-weight: bold;
`;

export const MeetingLink = styled.button`
  background-color: #ffffff;
  color: #5517A8;
  font-size: 14px;
  padding: 8px 16px;
  border: 1px solid #eaeaea;
  border-radius: 16px;
  cursor: pointer;

  &:hover {
    background-color: #eaeaea;
  }


  @media (max-width: 480px) {
    font-size: 12px;
    padding: 6px 12px;
  }
`;



export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px; /* Adjust spacing between buttons */
  margin-top: 20px;
`;

export const PaginationButton = styled.div`
  background-color: ${({ disabled, isActive }) =>
    disabled ? '#e0e0e0' : isActive ? '#5517A8' : '#5517A8'};
  color: ${({ disabled, isActive }) =>
    disabled ? '#9e9e9e' : isActive ? '#fff' : '#fff'};
  border: 1px solid ${({ disabled, isActive }) =>
    disabled ? '#e0e0e0' : isActive ? '#5517A8' : '#5517A8'};
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ disabled, isActive }) =>
      disabled ? '#e0e0e0' : isActive ? '#451390' : '#e6e6e6'};
    border-color: ${({ disabled, isActive }) =>
      disabled ? '#e0e0e0' : isActive ? '#451390' : '#ccc'};
    
    color: ${({ disabled, isActive }) =>
      disabled ? '#e0e0e0' : isActive ? '#000' : '#000'};
  }
`;



export const PaginationInfo = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #555;
  margin: 0 8px;
`;



