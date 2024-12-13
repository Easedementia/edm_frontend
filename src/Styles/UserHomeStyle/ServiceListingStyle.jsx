import styled from "styled-components";


export const ServiceListingWrapper = styled.div`
  padding: 50px;
  background-color: white;
  text-align: center;
  border-radius: 20px;
  margin-top: 50px;
  width: 100%;
  position: relative;
  box-sizing: border-box;


  @media (max-width: 480px) {
    width: 80%;
    margin-left: 80px;
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    font-size: 36px;
    color: #000;
    margin-bottom: 40px;
    font-weight: 700;

    @media (max-width: 1024px) {
      font-size: 30px;
    }

    @media (max-width: 768px) {
      font-size: 24px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
      margin-bottom: 20px;
    }
  }
`;

export const ServiceContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 1024px) {
    gap: 20px;
  }

  @media (max-width: 768px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 50px;
    justify-content: center; /* Center items on smaller screens */
  }
`;


export const ServiceCard = styled.div`
  background-color: #f9fafb;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    width: 200px;
    padding: 15px;
  }

  @media (max-width: 768px) {
    width: calc(50% - 10px);
    padding: 10px;
  }

  @media (max-width: 480px) {
    width: 70%;
    padding: 8px;
  }
`;


export const ServiceIcon = styled.img`
  height: 80px;
  margin-bottom: 20px;
  align-items: center;
  margin-left: 9px;

  @media (max-width: 1024px) {
    height: 90px;
  }

  @media (max-width: 768px) {
    height: 80px;
  }

  @media (max-width: 480px) {
    height: 70px;
    align-items: center;
    margin-left: 200px;
  }
`;


export const ServiceTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 16.9px;
  color: #000;
  margin-bottom: 15px;
  font-weight: 700;

  @media (max-width: 1024px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;



export const ServiceDescription = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  color: #2e2e2e;
  margin-bottom: 20px;
  text-align: left;

  @media (max-width: 1024px) {
    font-size: 13px;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
    margin-bottom: 8px;
    text-align: center;
    max-width: 60%;
    margin-left: 100px;
  }
`;

export const ServiceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 1px;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  letter-spacing: 1px;
  color: #000;
  text-decoration: none;
  font-weight: 350;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
    color: #5517a8;
  }

  img {
    width: 48px;
    height: 48px;

    @media (max-width: 1024px) {
      width: 28px;
      height: 28px;
    }

    @media (max-width: 768px) {
      width: 25px;
      height: 25px;
    }

    @media (max-width: 480px) {
      width: 20px;
      height: 20px;
    }
  }


  @media (max-width: 480px) {
      margin-top: 10px;
    }
`;

