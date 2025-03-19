import { GalleryContainer, Caption, ImageGrid, ImageItem, SocialMediaContainer, SocialMediaText, SocialMediaIcons, ModalOverlay, ModalContent, CloseButton } from '../../Styles/AboutUsStyle/GalleryStyle'
// import gallery1 from '../../assets/images/gallery1.jpg'
// import gallery2 from '../../assets/images/gallery2.jpg'
// import gallery3 from '../../assets/images/gallery3.jpg'
// import gallery4 from '../../assets/images/gallery4.jpg'
// import gallery5 from '../../assets/images/gallery5.jpg'
// import gallery6 from '../../assets/images/gallery6.jpg'
// import gallery7 from '../../assets/images/gallery7.jpg'
// import gallery8 from '../../assets/images/gallery8.jpg'
// import gallery9 from '../../assets/images/gallery9.jpg'
// import gallery10 from '../../assets/images/gallery10.jpg'
// import gallery11 from '../../assets/images/gallery11.jpg'
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react'


const Gallery = () => {
    const images = ["https://d2mzeyyrjif26w.cloudfront.net/assets/compressed-images/gallery1_new.jpg", "https://d2mzeyyrjif26w.cloudfront.net/assets/compressed-images/gallery2_new.jpg", "https://d2mzeyyrjif26w.cloudfront.net/assets/compressed-images/gallery3_new.jpg", "https://d2mzeyyrjif26w.cloudfront.net/assets/compressed-images/gallery4_new.jpg", "https://d2mzeyyrjif26w.cloudfront.net/assets/compressed-images/gallery5_new.jpg", "https://d2mzeyyrjif26w.cloudfront.net/assets/compressed-images/gallery6_new.jpg", "https://d2mzeyyrjif26w.cloudfront.net/assets/compressed-images/gallery7_new.jpg", "https://d2mzeyyrjif26w.cloudfront.net/assets/compressed-images/gallery8_new.jpg", "https://d2mzeyyrjif26w.cloudfront.net/assets/compressed-images/gallery11_new.jpg", "https://d2mzeyyrjif26w.cloudfront.net/assets/compressed-images/gallery9_new.jpg"]
    const socialMediaLinks = {
        instagram: 'https://www.instagram.com/easedementia__/?igshid=MzRlODBiNWFlZA%3D%3D',
        facebook: 'https://www.facebook.com/people/Easedementia/61550949666708/?mibextid=LQQJ4d',
        linkedin: 'https://www.linkedin.com/company/ease-dementia/',
        twitter: 'https://x.com/easedementia',
      };

      const [selectedImage, setSelectedImage] = useState(null);
  return (
    <>
    <GalleryContainer>
    <Caption>Snap Speaks...</Caption>
      <ImageGrid>
        {images.map((image, index) => (
          <ImageItem key={index} onClick={() => setSelectedImage(image)} >
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


    {selectedImage && (
        <ModalOverlay onClick={() => setSelectedImage(null)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setSelectedImage(null)}>✖</CloseButton>
            <img src={selectedImage} alt="Enlarged" />
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  )
}

export default Gallery