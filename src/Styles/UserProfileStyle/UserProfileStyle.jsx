import styled from 'styled-components';

// Container for the entire profile section
export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  margin-top: 100px;
  gap: 120px;
`;

// Profile details on the left side
export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: 45%;
  background-color: #f8f8f8;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-left: 40px;
  font-family: 'Poppins', sans-serif;
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
`;



// User name
export const UserName = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
  color: #000;
  font-weight: 600;
`;

// User contact details
export const UserContact = styled.div`
  text-align: center;
  font-size: 14px;
  color: #000;
`;

// Buttons container
export const ButtonsContainer = styled.div`
  margin-top: 40px;
  width: 100%;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.selected ? '#5517A8' : '#ffffff')};
  color: ${(props) => (props.selected ? '#ffffff' : '#000')}; 
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  padding: 12px;
  width: 100%;
  height: 50px;
  border: 1px solid #eaeaea;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
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
  }
`;



// Summary section on the right side
export const SummaryContainer = styled.div`
  width: 75%;
  padding: 20px;
  background-color: #f8f8f8;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  margin-right: 40px; 
`;

// Summary title
export const SummaryTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  color: #000;
  text-align: left;
  font-weight: 600;
`;


export const SummaryImage = styled.img`
  width: 400px;
  height: 400px;
  align-items: center;
  border-radius: 12px;
`;

// Table container
export const TableContainer = styled.div`
  width: 100%;
  border-collapse: collapse;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHeader = styled.th`
  text-align: left;
  padding: 12px;
  font-size: 16px;
  color: #000;
  text-align: center;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #eaeaea;
`;

export const TableData = styled.td`
  padding: 12px;
  font-size: 14px;
  white-space: nowrap;
  text-align: left;
  color: #000;
  font-family: 'Poppins', sans-serif;
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
`;