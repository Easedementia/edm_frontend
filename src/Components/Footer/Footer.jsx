import { FooterContainer, TopSection, LeftContainer, Logo, NewsletterContainer, NewsletterText, EmailInput, SubmitButton, RightContainer, ContactDetails, ContactItem, LinksContainer, LinkItem, BottomSection, FooterBottomText } from '../../Styles/Footer/FooterStyle'
import easedementia_logo from '../../assets/images/easedementia_logo.png'
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    <FooterContainer>
        <TopSection>
            <LeftContainer>
                <Logo src={easedementia_logo} alt='easedementia-logo' />
                <NewsletterContainer>
                    <NewsletterText>Stay in the loop and sign up for the newsletter:</NewsletterText>
                    <div style={{display:'flex'}} >
                        <EmailInput type='email' placeholder='Enter your email' />
                        <SubmitButton>➔</SubmitButton>
                    </div>
                </NewsletterContainer>
            </LeftContainer>
            <RightContainer>
            <ContactDetails>
                <ContactItem><strong>Address</strong></ContactItem>
                <ContactItem>Ease Dementia Technologies pvt. ltd</ContactItem>
                <ContactItem>DS7, Heavenly Plaza</ContactItem>
                <ContactItem>Civil Line Road, Chembumukku</ContactItem>
                <ContactItem>Vazhakkala, Kakkanad, Kochi, Kerala 682021</ContactItem>
            </ContactDetails>
            <ContactDetails>
                <ContactItem><strong>Email Address</strong></ContactItem>
                <ContactItem>support@easedementia.com</ContactItem>
            </ContactDetails>
            <ContactDetails>
                <ContactItem><strong>Phone Number</strong></ContactItem>
                <ContactItem>+91 79077 40698</ContactItem>
                <ContactItem>+91 90616 60079</ContactItem>
            </ContactDetails>
            <LinksContainer>
                <LinkItem as={Link} to='/'>Home</LinkItem>
                <LinkItem as={Link} to='/about'>About Us</LinkItem>
                <LinkItem as={Link} to='/services'>Services</LinkItem>
                <LinkItem as={Link} to='/assessment'>Assessment</LinkItem>
                <LinkItem as={Link} to='/privacy-policy'>Privacy Policy</LinkItem>
                <LinkItem as={Link} to='/faq'>FAQ</LinkItem>
                <LinkItem as={Link} to='/contact'>Contact Us</LinkItem>
                <LinkItem as={Link} to='/careers'>Careers</LinkItem>
            </LinksContainer>
        </RightContainer>
        </TopSection>
        <BottomSection>
            <FooterBottomText>© All Rights Reserved 2024</FooterBottomText>
            <FooterBottomText>Terms & Conditions</FooterBottomText>
        </BottomSection>
    </FooterContainer>
  )
}

export default Footer