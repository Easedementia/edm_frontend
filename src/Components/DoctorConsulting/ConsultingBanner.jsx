import { ConsultingContainer, HeadingContainer, SubHeading, MainHeading, Description, ImageContainer, StyledImage, ContactButton, Arrow } from '../../Styles/DoctorConsultingStyle/ConsultingBannerStyle'
import brain from '../../assets/images/brain.svg'

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
            <ContactButton to='/contact'> Book an appointment <Arrow>&#8594;</Arrow> </ContactButton>
        </HeadingContainer>
        <ImageContainer>
            <StyledImage src={brain} alt='Puzzle Hands' />
        </ImageContainer>
    </ConsultingContainer>
  )
}

export default ConsultingBanner