import { useState } from 'react'
import { FooterContainer, TopSection, LeftContainer, Logo, NewsletterContainer, NewsletterText, EmailInput, ArrowIcon, InputWrapper, RightContainer, ContactDetails, ContactItem, LinksContainer, LinkItem, BottomSection, FooterWrapper, FooterBottomText, SocialMediaIconsContainer, SocialMediaIconLink, HeartIcon } from '../../Styles/Footer/FooterStyle'
import easedementia_logo from '../../assets/images/easedementia_logo.png'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { baseURL } from '../../api/api'
import { toast } from 'react-toastify'
import arrow from '../../assets/images/arrow.svg'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import footerelement1 from '../../assets/images/footerelement1.svg'


const Footer = () => {
    const [email, setEmail] = useState('');
    

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };


    const handleSubscribe = async () => {
        try {
            const response = await axios.post(`${baseURL}/subscribe-newsletter/`, {email});
            if (response.status === 201 || response.status === 200) {
                setEmail('');
            }
            toast.success("Subscribed to the news letter successfully");
        } catch (error) {
            toast.error('An error occurred. Please try again.');
        }
    }

  return (
    <FooterContainer>
        <TopSection>
            <LeftContainer>
                <Logo src={easedementia_logo} alt='easedementia-logo' />
                <NewsletterContainer>
                    <NewsletterText>Stay in the loop and sign up for the newsletter:</NewsletterText>
                    <InputWrapper>
                    <EmailInput
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <ArrowIcon src={arrow} alt="Submit" onClick={handleSubscribe} />
                    
                    </InputWrapper>
                    <SocialMediaIconsContainer>
                        <span>Connect us on</span> 
                        <SocialMediaIconLink href="https://www.instagram.com/easedementia__/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noopener noreferrer">
                            <FaInstagram />
                        </SocialMediaIconLink>
                        <SocialMediaIconLink href="https://www.facebook.com/people/Easedementia/61550949666708/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
                            <FaFacebookF />
                        </SocialMediaIconLink>
                        <SocialMediaIconLink href="https://www.linkedin.com/company/ease-dementia/" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn />
                        </SocialMediaIconLink>
                    </SocialMediaIconsContainer>
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
                <HeartIcon src={footerelement1} alt="Heart Icon" />
            </LinksContainer>
            
        </RightContainer>
        </TopSection>
        <BottomSection>
            <FooterBottomText>© All Rights Reserved 2024</FooterBottomText>
            <FooterWrapper>
                <Link to="/terms-conditions">
                    <FooterBottomText>Terms & Conditions</FooterBottomText>
                </Link>
            </FooterWrapper>
            
            
        </BottomSection>
    </FooterContainer>
  )
}

export default Footer