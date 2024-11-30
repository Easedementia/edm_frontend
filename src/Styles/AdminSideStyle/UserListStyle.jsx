import styled from "styled-components";
import { MDBTableHead } from 'mdb-react-ui-kit';


export const TableContainer = styled.div`
    margin-top: 150px;
    padding: 0 2rem;

  @media (max-width: 768px) {
    margin-top: 100px;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    margin-top: 80px;
    padding: 0 0.5rem;
  }
`;

export const Heading = styled.h1`
  margin-bottom: 20px;
  font-size: 2rem;
  font-family: 'Poppins', sans-serif;
  color: #000;


  @media (max-width: 768px) {
    font-size: 1.8rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const StyledTableHead = styled(MDBTableHead)`
  background-color: #f8f9fa;

  th {
    font-size: 1rem;
    font-weight: bold;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 0.9rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
    }
  }
`;



export const StyledTableRow = styled.tr`
  td {
    font-size: 0.95rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 0.85rem;
    }

    @media (max-width: 480px) {
      font-size: 0.8rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  td:nth-child(5) {
    color: ${(props) => (props.isActive ? 'green' : 'red')};
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


  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 5px 8px;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 4px 6px;
  }
`;


export const ActiveStatus = styled.span`
  color: ${(props) => (props.isActive ? 'green' : 'red')};
  font-weight: ${(props) => (props.isActive ? 'bold' : 'bold')};


  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;