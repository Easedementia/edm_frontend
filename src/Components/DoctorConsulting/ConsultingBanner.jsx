import { PropTypes } from 'prop-types'
import { ConsultingContainer, HeadingContainer, SubHeading, MainHeading, Description, ImageContainer, StyledImage } from '../../Styles/DoctorConsultingStyle/ConsultingBannerStyle'
// import doctorconsultingbanner from '../../assets/images/doctorconsultingbanner.svg'

import LazyLoad from "react-lazyload";


const ConsultingBanner = () => {
  return (
    <ConsultingContainer>
        <HeadingContainer>
            <SubHeading>Who We Are</SubHeading>
            <MainHeading>All you need is a good doctor !</MainHeading>
            <Description>
                Here we strive to redefine dementia care, empower individuals to
                thrive, and inculcate a sense of belongingness!
            </Description>
            
        </HeadingContainer>
        <ImageContainer>
          <LazyLoad height={300} offset={100} once >
          <StyledImage src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/doctorconsultingbanner.svg" alt='Puzzle Hands' />
          </LazyLoad>
        </ImageContainer>
    </ConsultingContainer>
  )
}

ConsultingBanner.propTypes = {
  scrollToDoctorsList: PropTypes.func.isRequired,
};


export default ConsultingBanner