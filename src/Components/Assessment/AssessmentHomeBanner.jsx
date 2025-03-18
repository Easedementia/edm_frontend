import { AssessmentContainer, HeadingContainer, MainHeading, SubHeading, Description, ImageContainer, StyledImage } from '../../Styles/AssessmentStyle/AssessmentHomeBannerStyle'
// import assessmentpage_banner from '../../assets/images/assessmentpage_banner.svg'
import PropTypes from "prop-types";
import LazyLoad from 'react-lazyload';

const AssessmentHomeBanner = () => {
  return (
    <AssessmentContainer>
        <HeadingContainer>
            <SubHeading>Welcome to</SubHeading>
            <MainHeading>Assessment</MainHeading>
            <Description>
            Here we provide a comprehensive assessment for evaluating the cognitive health of individuals which includes both first person assessment  where family members or caregivers can take the assessment in lieu of the client and self-assessments, which allow individuals to reflect on their own cognitive changes.
            </Description>
            {/* <ButtonContainer>
                <AssessmentButton onClick={scrollToOptions}>
                    Take me to the Assessment
                    <Icon src={arrow} alt="Arrow Icon" />
                </AssessmentButton>
            </ButtonContainer> */}
        </HeadingContainer>
        <ImageContainer>
          <LazyLoad>
          <StyledImage src="https://d2mzeyyrjif26w.cloudfront.net/assets/compressed-images/assessmentpage_banner_compressed-min.png" alt="Assessment Illustration"  />
          </LazyLoad>
        </ImageContainer>
    </AssessmentContainer>
  )
}

AssessmentHomeBanner.propTypes = {
    scrollToOptions: PropTypes.func.isRequired, // Ensure it's a required function
  };

export default AssessmentHomeBanner