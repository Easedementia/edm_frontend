import { BannerContainer, TextContainer, Title, Subtitle, ContactButton, ArrowIcon, ImageContainer, BannerImage } from '../../Styles/UserHomeStyle/BannerStyle'
import brain from '../../assets/images/brain.svg'
import arrow from '../../assets/images/arrow.svg'

// import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <BannerContainer>
      <TextContainer>
        <Title>New Dawn for Dementia Care</Title>
        <Subtitle>A new journey in dementia care, offering a unique blend of innovative and empathetic approaches tailored to support our elderly loved ones. Eliminating the stigma associated with dementia,fostering awareness about the condition. Dedicated to enhancing the overall quality of life of the elderly.</Subtitle>
        <ContactButton to='/contact'>
            Contact Us
            <ArrowIcon src={arrow} alt="arrow icon" />
        </ContactButton> 
      </TextContainer>
      <ImageContainer>
        <BannerImage src={brain} alt='banner-image' />
      </ImageContainer>
    </BannerContainer>
  )
}


export default Banner