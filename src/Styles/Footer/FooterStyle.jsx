import styled from "styled-components";

export const FooterContainer = styled.footer`
  position: relative;
  background-color: #f9fafb;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  margin-top: 50px;


  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;


  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;


  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;


export const Logo = styled.img`
  width: 150px;
  margin-bottom: 20px;


  @media (max-width: 480px) {
    width: 120px;
  }
`;

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;


  @media (max-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }
`;

export const NewsletterText = styled.p`
  margin-bottom: 10px;
  color: #000;


  @media (max-width: 480px) {
    font-size: 14px;
  }
`;


export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 400px;


  @media (max-width: 768px) {
    max-width: 100%;
  }
`;


export const EmailInput = styled.input`
  width: 100%;
  padding: 12px 50px 12px 20px;
  border: 1px solid #ccc;
  border-radius: 25px;
  margin-right: 10px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;

  &:focus {
    border-color: #5517A8;
  }


  @media (max-width: 480px) {
    font-size: 14px;
  }
`;


export const ArrowIcon = styled.img`
  position: absolute;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  width: 80px;
  height: 80px;
  cursor: pointer;
  transition: transform 0.2s;

  &:hover{
    transform: translateY(-50%) scale(1.1);
  }


  @media (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;


export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #5517A8;
  color: white;
  border: none;
  border-radius: 25px;
  cursor: pointer;

  &:hover {
    background-color: #3700b3;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 280px;


  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
    text-align: center;
    margin-left: 0;
  }
`;

export const ContactDetails = styled.div`
  margin-bottom: 20px;
  text-align: left;
  color: #000;


  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ContactItem = styled.p`
  margin: 5px 0;


  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;


  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export const LinkItem = styled.a`
  margin: 5px 10px;
  text-decoration: none;
  color: #5517A8;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #6d22d1;
  }


  @media (max-width: 480px) {
    font-size: 14px;
  }
`;


export const BottomSection = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;


  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;


export const FooterWrapper = styled.div`
    text-align: center;
    padding: 20px;


    @media (max-width: 480px) {
    padding: 10px;
  }
`;


export const FooterBottomText = styled.p`
  margin: 0;


  @media (max-width: 480px) {
    font-size: 14px;
  }
`;


export const SocialMediaIconsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 120px;

  & > span {
    margin-right: 12px;
  }


  @media (max-width: 768px) {
    justify-content: center;
  }
`;


export const SocialMediaIconLink = styled.a`
  margin-right: 15px;
  font-size: 24px;
  color: #000;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.2);
    color: #5517A8;
  }


  @media (max-width: 480px) {
    font-size: 20px;
  }
`;


export const HeartIcon = styled.img`
  position: relative;
  top: 20px;
  left: 25px;
  width: 100px;
  height: 100px;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }


  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
  } 
`;