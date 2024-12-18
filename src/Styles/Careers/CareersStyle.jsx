import styled from "styled-components";


export const CareersContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-color: #f9fafb;
    padding: 1rem;
    border-radius: 8px;
    margin-top: 150px;
    box-sizing: border-box;
    width: 100%;
`;


export const LeftSection = styled.div`
    max-width: 40%;
    margin-right: 200px;
    margin-top: 50px;
    flex-shrink: 0;
    box-sizing: border-box;
`;


export const CareersHeader = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    text-align: left;
    font-family: 'Poppins', sans-serif;
    color: #000;


    b {
        font-weight: bold;
    }
`;


export const CareersDescription = styled.p`
    font-size: 1rem;
    color: #000;
    margin-bottom: 1.5rem;
    font-family: 'Poppins', sans-serif;
    text-align: left;
`;


export const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;


    div {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        font-size: 1rem;
        color: #444;
    }
`;


export const EmailIcon = styled.span`
  display: inline-flex; 
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;

  img {
    width: 120px;
    height: 120px;
    object-fit: contain;
  }
`;


export const Icon = styled.div`
  background: #f9fafb;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
        transform: scale(1.2); 
    }


    @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;



export const PhoneIcon = styled.span`
    color: #7c3aed;
    font-size: 1.2rem;
`;


export const JobContainer = styled.div`
    flex-basis: 55%;
    padding: 20px;
    background-color: #f9fafb;
    border-radius: 8px;
    max-width: 600px; /* Fixed max width */
    margin: 0 auto;
    margin-top: 20px;
    box-sizing: border-box;
`;

export const JobTitle = styled.h2`
    text-align: center;
    font-size: 2rem;
    margin-bottom: 20px;
    color: #000;
    font-weight: 700;
`;


export const JobItemContainer = styled.div`
    margin-bottom: 10px;
`;



export const JobItem = styled.div`
    background: #fff;
    padding: 15px;
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    color: #000;
    width: 100%;
    box-sizing: border-box;

    &:hover {
        background: #f1f1f1;
    }
`;



export const JobDetails = styled.div`
    background: #fff;
    padding: 15px;
    border-radius: 8px;
    margin-top: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
    color: #000;
    text-align: left;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden; /* Prevents content from breaking layout */

    ul {
        padding-left: 20px;
    }

    strong {
        display: block;
        margin-bottom: 10px;
    }
`;



export const ApplyButton = styled.button`
  margin-top: 10px;
  background-color: #6c39e6;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #5028b3;
  }
`;

export const ArrowIcon = styled.img`
    display: inline-block;
    transition: transform 0.3s ease;
    transform: rotate(${props => props.rotate}deg);
    transform-origin: center;
    height: 50px;
    width: 50px;
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.2); 
    }
`;