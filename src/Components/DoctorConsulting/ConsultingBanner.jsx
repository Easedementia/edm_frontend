import { PropTypes } from 'prop-types'
import { ConsultingContainer, HeadingContainer, SubHeading, MainHeading, Description, ImageContainer, StyledImage, ContactButton, ArrowIcon } from '../../Styles/DoctorConsultingStyle/ConsultingBannerStyle'
import doctorconsultingbanner from '../../assets/images/doctorconsultingbanner.svg'
import arrow from '../../assets/images/arrow.svg'

const ConsultingBanner = ({scrollToDoctorsList}) => {
  return (
    <ConsultingContainer>
        <HeadingContainer>
            <SubHeading>Who We Are</SubHeading>
            <MainHeading>All you need is a good doctor !</MainHeading>
            <Description>
                Here we strive to redefine dementia care, empower individuals to
                thrive, and inculcate a sense of belongingness!
            </Description>
            <ContactButton onClick={scrollToDoctorsList}>
              Book an appointment
              <ArrowIcon src={arrow} alt='arrow icon' />
            </ContactButton>
        </HeadingContainer>
        <ImageContainer>
            <StyledImage src={doctorconsultingbanner} alt='Puzzle Hands' />
        </ImageContainer>
    </ConsultingContainer>
  )
}

ConsultingBanner.propTypes = {
  scrollToDoctorsList: PropTypes.func.isRequired,
};


export default ConsultingBanner