import { BannerContainer, TextContainer, Title, Subtitle, ContactButton, Arrow, ImageContainer, BannerImage } from '../../Styles/UserHomeStyle/BannerStyle'
import brain from '../../assets/images/brain.svg'

// import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <BannerContainer>
      <TextContainer>
        <Title>New Dawn for Dementia Care</Title>
        <Subtitle>Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl.</Subtitle>
        <ContactButton to='/contact'> Contact Us <Arrow>&#8594;</Arrow> </ContactButton>
      </TextContainer>
      <ImageContainer>
        <BannerImage src={brain} alt='banner-image' />
      </ImageContainer>
    </BannerContainer>
  )
}


export default Banner