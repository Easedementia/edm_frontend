import styled from "styled-components";

export const AddressContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 20px;
    text-align: left;
    margin-top: 80px;


    @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
  }

  @media (max-width: 768px) {
    padding: 15px;
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    padding: 10px;
    margin-top: 40px;
  }
`;


export const ContactInfo = styled.div`
    flex: 1;
    margin-right: 20px;


    @media (max-width: 1024px) {
    max-width: 100%;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    padding: 0 10px;
    margin-right: 0;
  }
`;
    

export const MapContainer = styled.div`
    flex: 1;
    
    iframe {
        width: 100%; /* Make iframe responsive */
        height: 330px;
        border: none;
    }

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
        font-size: 1rem;
        text-align: center;
    }

    @media (max-width: 480px) {
        font-size: 0.9rem;
        text-align: center;
    }
`;


export const Paragraph = styled.p`
    font-size: 1rem;
    margin: 5px 0;


    @media (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
    text-align: center;
  }
`;
