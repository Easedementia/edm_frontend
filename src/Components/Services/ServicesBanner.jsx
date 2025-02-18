import { ServicesContainer, HeadingContainer, SubHeading, MainHeading, Description, ImageContainer, StyledImage } from '../../Styles/ServicesStyle/ServicesBannerStyle'
import servicesbannerimage from '../../assets/images/servicesbannerimage.svg'
import LazyLoad from 'react-lazyload'


const ServicesBanner = () => {
  return (
    <ServicesContainer>
        <HeadingContainer>
            <SubHeading>Our Services</SubHeading>
            <MainHeading>What We Offer</MainHeading>
            <Description>
            At Easedementia, we offer a holistic approach that prioritizes the cognitive, psychological, and emotional well-being of elders.
            </Description>
        </HeadingContainer>
        <ImageContainer>
          <LazyLoad height={300} offset={100}>
          <StyledImage src={servicesbannerimage} alt='Puzzle Hands' />
          </LazyLoad>
        </ImageContainer>
    </ServicesContainer>
  )
}

export default ServicesBanner