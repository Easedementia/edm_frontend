import styled from 'styled-components';

export const SocialMediaContainer = styled.div`
  text-align: center;
  margin: 20px 0;
  margin-top: 60px;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConnectText = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 0; 
  color: #000;
  margin-right: 20px; 
  margin-top: 45px;
`;

export const IconLink = styled.a`
  margin: 0 10px;
  margin-top: 40px;
  color: black;
  text-decoration: none;
  font-size: 30px;
  
  &:hover {
    color: #5517A8; 
  }
`;

export const Icon = styled.div`
  transition: color 0.3s;
`;
