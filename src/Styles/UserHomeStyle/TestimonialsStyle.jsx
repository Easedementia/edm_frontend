import styled from "styled-components";
// import starrating_new from '../../assets/images/starrating_new.png'

export const TestimonialsWrapper = styled.div`
    padding: 50px 20px;
    background-color: white;
    text-align: center;
    border-radius: 25px;
    margin-top: 40px;

    @media (max-width: 768px) {
        padding: 40px 15px;
    }

    @media (max-width: 480px) {
        padding: 30px 10px;
    }
`;

export const Title = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 36px;
    color: #000;
    margin-bottom: 40px;
    font-weight: 700;

    @media (max-width: 768px) {
        font-size: 28px;
        margin-bottom: 30px;
    }

    @media (max-width: 480px) {
        font-size: 24px;
        margin-bottom: 20px;
        margin-top: 50px;
    }
`;

export const TestimonialsContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;

    @media (min-width: 1024px) {
        flex-wrap: nowrap; 
    }

    @media (max-width: 768px) {
        gap: 15px;
        flex-wrap: nowrap;
    }

    @media (max-width: 480px) {
        gap: 50px;
        flex-direction: column;
        align-items: center;
    }
`;

export const TestimonialCard = styled.div`
    background-color: #f9fafb;
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 100%;
    max-width: 300px;
    text-align: left;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 768px) {
        width: 250px;
        padding: 15px;
    }

    @media (max-width: 480px) {
        width: 320px;
        padding: 10px;
    }
`;

export const TestimonialText = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #000;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        font-size: 14px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
        margin-bottom: 15px;
        margin-top: 5px;
    }
`;

export const Stars = styled.div`
    width: 80%;
    height: 50px;
    background-image: url("https://d2mzeyyrjif26w.cloudfront.net/assets/images/starrating_new.png");
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        height: 40px;
    }

    @media (max-width: 480px) {
        height: 30px;
        margin-bottom: 15px;
        margin-left: 100px;
    }
`;

export const Profile = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 480px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const ProfileImage = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-right: 10px;

    @media (max-width: 768px) {
        width: 60px;
        height: 60px;
    }

    @media (max-width: 480px) {
        width: 50px;
        height: 50px;
        margin-right: 0;
        margin-bottom: 10px;
    }
`;

export const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 480px) {
        align-items: center;
    }
`;

export const ProfileName = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: bold;
    color: #000;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 13px;
    }

    @media (max-width: 480px) {
        font-size: 12px;
    }
`;

export const ProfileTitle = styled.p`
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    color: #000;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 11px;
    }

    @media (max-width: 480px) {
        font-size: 10px;
    }
`;