import styled from "styled-components";

export const AddressContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
    text-align: left;
    margin-top: 150px;


    @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 100px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    margin-top: 80px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin-top: 50px;
  }
`;


export const ContactInfo = styled.div`
    max-width: 50%;


    @media (max-width: 1024px) {
    max-width: 100%;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;
    

export const MapContainer = styled.div`
    max-width: 50%;


    @media (max-width: 1024px) {
    max-width: 100%;
  }

  @media (max-width: 768px) {
    iframe {
      height: 250px;
    }
  }

  @media (max-width: 480px) {
    iframe {
      height: 200px;
    }
  }
`;


export const Heading = styled.h2`
    font-size: 1.1rem;
    margin-bottom: 10px;
    color: #000;


    @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;


export const Paragraph = styled.p`
    font-size: 1rem;
    margin: 5px 0;


    @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;
