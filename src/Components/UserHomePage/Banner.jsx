import { BannerContainer, TextContainer, Title, Subtitle, ContactButton, ArrowIcon, ImageContainer, BannerImage } from '../../Styles/UserHomeStyle/BannerStyle'
// import brain from '../../assets/images/brain.svg'
// import brain_png from '../../assets/images/brain_png.png'
// import arrow from '../../assets/images/arrow.svg'
import LazyLoad from "react-lazyload";


// import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <BannerContainer>
      <TextContainer>
        <Title>New Dawn for<br />Dementia Care</Title>
        <Subtitle>A new journey in dementia care, offering a unique blend of innovative and empathetic approaches tailored to support our elderly loved ones.</Subtitle>
        <ContactButton to='/contact'>
            Contact Us
            <ArrowIcon src="https://d2mzeyyrjif26w.cloudfront.net/assets/compressed-images/arrow_compressed-min.png" alt="arrow icon" />
        </ContactButton> 
      </TextContainer>
      <ImageContainer>
        <LazyLoad height={400} offset={100}>
          <BannerImage 
            src="https://d2mzeyyrjif26w.cloudfront.net/assets/compressed-images/brain_compressed_finalised.png" 
            alt='Decorative brain with flowers'
          />
        </LazyLoad>
      </ImageContainer>
    </BannerContainer>
  )
}


export default Banner