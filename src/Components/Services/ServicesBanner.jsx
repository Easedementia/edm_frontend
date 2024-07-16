import { ServicesContainer, HeadingContainer, SubHeading, MainHeading, Description, ImageContainer, StyledImage } from '../../Styles/ServicesStyle/ServicesBannerStyle'
import intervention from '../../assets/images/intervention.svg'


const ServicesBanner = () => {
  return (
    <ServicesContainer>
        <HeadingContainer>
            <SubHeading>Our Services</SubHeading>
            <MainHeading>What We Offer</MainHeading>
            <Description>
                Here we strive to redefine dementia care, empower individuals to
                thrive, and inculcate a sense of belongingness!
            </Description>
        </HeadingContainer>
        <ImageContainer>
            <StyledImage src={intervention} alt='Puzzle Hands' />
        </ImageContainer>
    </ServicesContainer>
  )
}

export default ServicesBanner