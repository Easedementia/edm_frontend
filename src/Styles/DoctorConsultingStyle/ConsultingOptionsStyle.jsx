import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px;
    margin-top: 100px;
    font-family: 'Poppins', sans-serif;
`;


export const Card = styled.div`
    background-color: #fff;
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    width: 30%;
    text-align: center;
    padding: 20px;
    
`;


export const Image = styled.img`
  width: 100%;
  border-radius: 25px;
  height: 200px;
  width: 200px;
  border-radius: 25px;
  cursor: pointer;
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  margin: 10px 0 10px;
  font-family: 'Poppins', sans-serif;
  color: #000;
  text-align: left;
  cursor: pointer;
`;

export const CardSubtitle = styled.p`
  font-size: 15px;
  color: #000;
  font-family: 'Poppins', sans-serif;
  text-align: left;
  cursor: pointer;
`;


export const ExploreMore = styled.button`
  align-self: flex-end;
  margin-top: auto;
  padding: 8px 10px;
  margin-left: 170px;
  color: #5517A8;
  text-decoration: none;
  font-size: 15px;
  display: flex;
  align-items: center;
  border: none;
  outline: none;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;

  &:hover {
    outline: none;
    color: #4738ca;
  }

  &:focus {
    outline: none; 
  }

  &::after {
    content: '→';
    margin-left: 5px;
  }
`;
