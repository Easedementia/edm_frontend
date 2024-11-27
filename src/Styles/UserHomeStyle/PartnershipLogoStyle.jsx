import styled from "styled-components";

export const PartnershipLogosWrapper = styled.div`
  background-color: #f9fafb;
  padding: 20px;
  margin-top: 80px;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 10px;
  }
`;

export const LogosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  width: 100%;
  max-width: 900px;
  background-color: #f9fafb;
  flex-wrap: nowrap; /* Allow logos to wrap on smaller screens */

  @media (max-width: 768px) {
    padding-top: 10px;
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const LogoImage = styled.img`
  max-height: 90px;
  margin: 0 10px;
  filter: grayscale(100%);
  transition: transform 0.3s, filter 0.3s;

  /* Add hover effect */
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    max-height: 70px;
    margin: 0 8px;
  }

  @media (max-width: 768px) {
    max-height: 60px;
    margin: 0 5px;
  }

  @media (max-width: 480px) {
    max-height: 50px;
    margin: 5px;
  }
`;
