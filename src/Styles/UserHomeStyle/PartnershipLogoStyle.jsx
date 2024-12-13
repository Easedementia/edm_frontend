import styled from "styled-components";

export const PartnershipLogosWrapper = styled.div`
  background-color: #f9fafb;
  padding: 20px;
  margin-top: 80px;
  margin-bottom: 80px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    max-width: 80%;
    margin: 60px 0;
    padding: 15px;
    margin-left: 110px;
  }

  @media (max-width: 768px) {
    margin: 40px 0;
    padding: 10px;
    max-width: 70%;
    margin-left: 145px;
    margin-top: 70px;
  }

  @media (max-width: 480px) {
    margin: 20px 0;
    padding: 5px;
    max-width: 60%;
    margin-left: 170px;
    margin-top: 80px;
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
  }

  @media (max-width: 768px) {
    gap: 10px;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    gap: 5px;
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
  }

  @media (max-width: 768px) {
    max-height: 60px;
  }

  @media (max-width: 480px) {
    max-height: 50px;
  }
`;
