import styled from "styled-components";
import { MDBTableHead } from 'mdb-react-ui-kit';


export const TableContainer = styled.div`
    margin-top: 150px;
`;

export const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  color: #000;
`;

export const StyledTableHead = styled(MDBTableHead)`
  background-color: #f8f9fa;
`;

export const StyledTableRow = styled.tr`
  td:nth-child(5) {
    color: ${props => (props.isActive ? 'green' : 'red')};
  }
`;



export const ActionButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  color: white;
  background-color: ${(props) => props.color};
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;


export const ActiveStatus = styled.span`
  color: ${(props) => (props.isActive ? 'green' : 'red')};
  font-weight: ${(props) => (props.isActive ? 'bold' : 'bold')};
`;