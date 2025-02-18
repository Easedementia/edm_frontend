import styled from "styled-components";


export const ServiceListingWrapper = styled.div`
  padding: 50px;
  background-color: white;
  text-align: center;
  border-radius: 20px;
  margin: 100px auto;
  width: 100%;
  position: relative;
  box-sizing: border-box;


  @media (max-width: 1024px) {
    width: 95%; /* Slightly smaller width for tablets and smaller laptops */
    padding: 40px; /* Reduce padding */
    margin: 80px auto;
  }

  @media (max-width: 768px) {
    width: 90%; /* Narrower for tablets and larger phones */
    padding: 30px; /* Further reduce padding */
    margin: 60px auto;
  }

  @media (max-width: 480px) {
    width: 90%; /* Ensure it fits within small screens */
    padding: 20px; /* Minimal padding for small devices */
    margin: 40px auto;
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
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    
  }
`;


export const ServiceCard = styled.div`
  background-color: #f9fafb;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  width: calc(100% - 40px); /* Adjust width to fit smaller screens */
  max-width: 240px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    width: calc(50% - 20px); /* 2 cards in a row for medium screens */
    padding: 15px;
  }

  @media (max-width: 768px) {
    width: calc(50% - 20px); /* Ensure 2 cards per row for tablets */
  }

  @media (max-width: 480px) {
    width: 100%; /* Full width for small screens */
    padding: 8px;
  }
`;



export const ServiceIcon = styled.img`
  height: 80px;
  margin-bottom: 20px;
  margin-left: 20px;
  

  @media (max-width: 1024px) {
    height: 90px;
  }

  @media (max-width: 768px) {
    height: 80px;
  }

  @media (max-width: 480px) {
    height: 70px;
    margin: 10px auto; /* Center the icon */
    display: block;
  }
`;


export const ServiceTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
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
  font-size: 14px;
  color: #2e2e2e;
  margin-bottom: 20px;
  text-align: center;
  max-width: 100%;

  @media (max-width: 1024px) {
    font-size: 13px;
    margin-bottom: 15px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 10px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    margin-bottom: 8px;
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
      width: 40px;
      height: 40px;
    }

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
    }

    @media (max-width: 480px) {
      width: 35px;
      height: 35px;
    }
  }


  @media (max-width: 480px) {
      margin-top: 10px;
    }
`;

