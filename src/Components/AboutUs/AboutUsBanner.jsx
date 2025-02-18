import { AboutUsContainer, HeadingContainer, SubHeading, MainHeading, Description, ImageContainer, StyledImage } from '../../Styles/AboutUsStyle/AboutUsBannerStyle'
import aboutusbanner from '../../assets/images/aboutusbanner.svg'
import LazyLoad from "react-lazyload";



const AboutUsBanner = () => {
  return (
    <AboutUsContainer>
        <HeadingContainer>
            <SubHeading>Who We Are</SubHeading>
            <MainHeading>We are easedementia</MainHeading>
            <Description>
                Here we strive to redefine dementia care, empower individuals to
                thrive, and inculcate a sense of belongingness!
            </Description>
        </HeadingContainer>
        <ImageContainer>
          <LazyLoad height={300} offset={100}>
          <StyledImage src={aboutusbanner} alt='Puzzle Hands' />
          </LazyLoad>
        </ImageContainer>
    </AboutUsContainer>
  )
}

export default AboutUsBanner