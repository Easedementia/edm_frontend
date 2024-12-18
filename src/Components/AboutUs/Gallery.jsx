import { GalleryContainer, Caption, ImageGrid, ImageItem, SocialMediaContainer, SocialMediaText, SocialMediaIcons } from '../../Styles/AboutUsStyle/GalleryStyle'
import gallery1 from '../../assets/images/gallery1.jpg'
import gallery2 from '../../assets/images/gallery2.jpg'
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Gallery = () => {
    const images = [gallery1, gallery2, gallery1, gallery2, gallery1, gallery2, gallery1, gallery2, gallery1, gallery2]
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
          <FaInstagram />
          <FaFacebookF />
          <FaLinkedinIn />
          <FontAwesomeIcon icon={faXTwitter} />
        </SocialMediaIcons>
      </SocialMediaContainer>
    </GalleryContainer>
    </>
  )
}

export default Gallery