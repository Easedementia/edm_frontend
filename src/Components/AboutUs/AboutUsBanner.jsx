import { AboutUsContainer, HeadingContainer, SubHeading, MainHeading, Description, ImageContainer, StyledImage } from '../../Styles/AboutUsStyle/AboutUsBannerStyle'
import aboutusbanner from '../../assets/images/aboutusbanner.svg'


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
            <StyledImage src={aboutusbanner} alt='Puzzle Hands' />
        </ImageContainer>
    </AboutUsContainer>
  )
}

export default AboutUsBanner