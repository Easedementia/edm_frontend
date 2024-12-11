import { AssessmentContainer, HeadingContainer, MainHeading, SubHeading, Description, ButtonContainer, AssessmentButton, Icon, ImageContainer, StyledImage } from '../../Styles/AssessmentStyle/AssessmentHomeBannerStyle'
import arrow from '../../assets/images/arrow.svg'
import assessmentpage_banner from '../../assets/images/assessmentpage_banner.svg'

const AssessmentHomeBanner = () => {
  return (
    <AssessmentContainer>
        <HeadingContainer>
            <SubHeading>Welcome to</SubHeading>
            <MainHeading>Assessment</MainHeading>
            <Description>
            Here we provide a comprehensive assessment for evaluating the cognitive health of individuals which includes both first person assessment  where family members or caregivers can take the assessment in lieu of the client and self-assessments, which allow individuals to reflect on their own cognitive changes.
            </Description>
            <ButtonContainer>
                <AssessmentButton to='/assessment'>
                    Take me to the Assessment
                    <Icon src={arrow} alt="Arrow Icon" />
                </AssessmentButton>
            </ButtonContainer>
        </HeadingContainer>
        <ImageContainer>
            <StyledImage src={assessmentpage_banner} alt="Assessment Illustration"  />
        </ImageContainer>
    </AssessmentContainer>
  )
}

export default AssessmentHomeBanner