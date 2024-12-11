import styled from 'styled-components';

export const SocialMediaContainer = styled.div`
  text-align: center;
  margin: 20px 0;
  margin-top: 60px;
  margin-bottom: 100px;
  display: flex;
  align-items: center;
  justify-content: center;


  @media (max-width: 768px) {
    margin-top: 40px;
    margin-bottom: 80px;
    flex-wrap: nowrap;
    align-items: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    margin-top: 30px;
    margin-bottom: 50px;
  }
`;

export const ConnectText = styled.p`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 0; 
  color: #000;
  margin-right: 20px; 
  margin-top: 0;


  @media (max-width: 768px) {
    font-size: 24px;
    margin-right: 15px;
    margin-top: 0;
  }

  @media (max-width: 480px) {
    font-size: 20px;
    margin-right: 0;
    margin-bottom: 10px;
    margin-top: 0;
  }
`;

export const IconLink = styled.a`
  margin: 0 10px;
  margin-top: 40px;
  color: black;
  text-decoration: none;
  font-size: 30px;
  transition: transform 0.2s ease;
  
  &:hover {
    color: #5517A8; 
    transform: scale(1.2); 
  }


  @media (max-width: 768px) {
    font-size: 25px;
    margin: 0 8px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
    margin: 5px 0;
  }
`;

export const Icon = styled.div`
  transition: color 0.3s;
  
`;
