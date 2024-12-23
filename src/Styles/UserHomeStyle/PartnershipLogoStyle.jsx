import styled from "styled-components";

export const PartnershipLogosWrapper = styled.div`
  background-color: #f9fafb;
  padding: 20px;
  margin: 80px auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    margin: 60px auto;
    padding: 15px;
  }

  @media (max-width: 768px) {
    margin: 40px auto;
    padding: 10px;
  }

  @media (max-width: 480px) {
    margin: 20px auto;
    padding: 5px;
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
  flex-wrap: nowrap;

  @media (max-width: 1024px) {
    gap: 15px;
    max-width: 750px;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    gap: 10px;
    max-width: 600px;
    flex-wrap: wrap;
  }

  @media (max-width: 480px) {
    gap: 5px;
    flex-wrap: wrap;
  }
`;

export const LogoImage = styled.img`
  max-height: 90px;
  margin: 5px;
  filter: grayscale(100%);
  transition: transform 0.3s, filter 0.3s;

  /* Add hover effect */
  &:hover {
    filter: grayscale(0%);
    transform: scale(1.1);
  }

  @media (max-width: 1024px) {
    max-height: 70px;
  }

  @media (max-width: 768px) {
    max-height: 60px;
  }

  @media (max-width: 480px) {
    max-height: 50px;
  }
`;
