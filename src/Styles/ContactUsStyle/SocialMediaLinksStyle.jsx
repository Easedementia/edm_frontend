import styled from 'styled-components';

export const SocialMediaContainer = styled.div`
  text-align: center;
  margin: 20px 0;
  margin-top: 60px;
  margin-bottom: 100px;
`;

export const ConnectText = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #000;
`;

export const IconLink = styled.a`
  margin: 0 10px;
  color: black;
  text-decoration: none;
  font-size: 30px;
  
  &:hover {
    color: #5517A8; /* Change color on hover if desired */
  }
`;

export const Icon = styled.div`
  transition: color 0.3s;
`;
