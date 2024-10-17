import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #f9f9f9;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Poppins', sans-serif;
  margin-top: 50px;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 20px;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 60%;
`;


export const Logo = styled.img`
  width: 150px;
  margin-bottom: 20px;
`;

export const NewsletterContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NewsletterText = styled.p`
  margin-bottom: 10px;
  color: #000;
`;

export const EmailInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #6200ea;
  color: white;
  border: none;
  border-radius: 4px;
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
`;

export const ContactDetails = styled.div`
  margin-bottom: 20px;
  text-align: left;
  color: #000;
`;

export const ContactItem = styled.p`
  margin: 5px 0;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: left;
`;

export const LinkItem = styled.a`
  margin: 5px 10px;
  text-decoration: none;
  color: #5517A8;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;


export const BottomSection = styled.div`
  border-top: 1px solid #ccc;
  padding-top: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


export const FooterWrapper = styled.div`
    text-align: center;
    padding: 20px;
`;


export const FooterBottomText = styled.p`
  margin: 0;
`;

