import { GalleryContainer, Caption, ImageGrid, ImageItem, SocialMediaContainer, SocialMediaText, SocialMediaIcons } from '../../Styles/AboutUsStyle/GalleryStyle'
import gallery1 from '../../assets/images/gallery1.jpg'
import gallery2 from '../../assets/images/gallery2.jpg'
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Gallery = () => {
    const images = [gallery1, gallery2, gallery1, gallery2, gallery1, gallery2, gallery1, gallery2, gallery1, gallery2]
    const socialMediaLinks = {
        instagram: 'https://www.instagram.com/easedementia__/?igshid=MzRlODBiNWFlZA%3D%3D',
        facebook: 'https://www.facebook.com/people/Easedementia/61550949666708/?mibextid=LQQJ4d',
        linkedin: 'https://www.linkedin.com/company/ease-dementia/',
        twitter: 'https://x.com/easedementia',
      };
  return (
    <>
    <GalleryContainer>
    <Caption>Snap Speaks...</Caption>
      <ImageGrid>
        {images.map((image, index) => (
          <ImageItem key={index}>
            <img src={image} alt={`gallery-${index}`} />
          </ImageItem>
        ))}
      </ImageGrid>
      <SocialMediaContainer>
        <SocialMediaText>For more stories...</SocialMediaText>
        <SocialMediaIcons>
            <a href={socialMediaLinks.instagram} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href={socialMediaLinks.facebook} target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href={socialMediaLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>
            <a href={socialMediaLinks.twitter} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
        </SocialMediaIcons>
      </SocialMediaContainer>
    </GalleryContainer>
    </>
  )
}

export default Gallery