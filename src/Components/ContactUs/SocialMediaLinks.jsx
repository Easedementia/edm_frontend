import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SocialMediaContainer, ConnectText, IconLink, Icon } from '../../Styles/ContactUsStyle/SocialMediaLinksStyle'

const SocialMediaLinks = () => {
  return (
    <SocialMediaContainer>
        <ConnectText>Connect us on</ConnectText>
        <IconLink href="https://www.instagram.com/easedementia__/?igshid=MzRlODBiNWFlZA%3D%3D" target="_blank" rel="noopener noreferrer">
        <Icon as={FaInstagram} />
        </IconLink>
        <IconLink href="https://www.facebook.com/people/Easedementia/61550949666708/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
        <Icon as={FaFacebookF} />
        </IconLink>
        <IconLink href="https://www.linkedin.com/company/ease-dementia/" target="_blank" rel="noopener noreferrer">
        <Icon as={FaLinkedinIn} />
        </IconLink>
    </SocialMediaContainer>
  )
}

export default SocialMediaLinks