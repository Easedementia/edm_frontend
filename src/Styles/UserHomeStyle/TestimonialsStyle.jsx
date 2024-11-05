import styled from "styled-components";
import starrating_new from '../../assets/images/starrating_new.png'

export const TestimonialsWrapper = styled.div`
    padding: 50px 20px;
    background-color: white;
    text-align: center;
    border-radius: 25px;
    margin-top: 40px;
`;


export const Title = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 36px;
    color: #000;
    margin-bottom: 40px;
    font-weight: 700;
`;


export const TestimonialsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
`;


export const TestimonialCard = styled.div`
    background-color: #f9fafb;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
    padding: 20px;
    width: 300px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const TestimonialText = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #000;
    margin-bottom: 20px;
`;


export const Stars = styled.div`
  width: 80%;  /* Full width since it will always show all 5 stars */
  height: 50px; /* Adjust the height as needed */
  background-image: url(${starrating_new});
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 20px;
  margin-right: 80px;
`;


export const Profile = styled.div`
    display: flex;
    align-items: center;
    margin-right: 60px;
`;


export const ProfileImage = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 10px;
`;


export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
`;


export const ProfileName = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: #000;
    margin: 0;
`;


export const ProfileTitle = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    color: #000;
    margin: 0;
`;


