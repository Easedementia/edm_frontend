import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 20px;
    margin-top: 100px;
    font-family: 'Poppins', sans-serif;
    flex-wrap: wrap;


    @media (max-width: 1024px) {
    margin-top: 80px;
    padding: 15px;
    gap: 15px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
  }
`;


export const Card = styled.div`
    background-color: #fff;
    border-radius: 25px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    width: 90%; /* Ensure it adapts to smaller screens */
    max-width: 310px;
    text-align: left;
    padding: 20px;
    display: flex;
    flex-direction: column;
    height: 380px;


    @media (max-width: 1024px) {
    width: 280px;
    height: 360px;
  }

  @media (max-width: 768px) {
    width: 90%;
    max-width: 400px;
    height: auto;
  }
`;


export const Image = styled.img`
    width: 100%; /* Scale based on the parent width */
    max-width: 280px; /* Prevents exceeding parent container */
    height: 100%; /* Maintain aspect ratio */
    border-radius: 25px;
    object-fit: cover;
    margin-bottom: 15px;


    @media (max-width: 1024px) {
    width: 250px;
    height: 250px;
    border-radius: 25px;
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 350px;
    height: auto;
    border-radius: 25px;
  }
`;

export const CardTitle = styled.h2`
    font-size: 18px;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    color: #000;
    text-align: left;
    width: 100%;


    @media (max-width: 768px) {
    font-size: 16px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;

export const CardSubtitle = styled.p`
    font-size: 15px;
    color: #2f2e2e;
    font-family: 'Poppins', sans-serif;
    text-align: left;
    width: 100%;
    margin-top: 5px;


    @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;


export const ExploreMore = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    letter-spacing: 1px;
    color: #000;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    font-weight: 300;
    cursor: pointer;
    white-space: nowrap;
    transition: transform 0.3s;
    margin: auto;
    

    &:hover {
        transform: scale(1.05);
        color: #5517A8;
    }

    img {
        width: 35px; /* Smaller size to fit well */
        height: 35px;


        @media (max-width: 768px) {
      width: 35px;
      height: 35px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        img {
            width: 30px;
            height: 30px;
        }
    }
    }
`;

