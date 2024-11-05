import { AssessmentContainer, HeadingContainer, MainHeading, SubHeading, Description, ButtonContainer, AssessmentButton, Icon, ImageContainer, StyledImage } from '../../Styles/AssessmentStyle/AssessmentHomeBannerStyle'
import arrow from '../../assets/images/arrow.svg'
import assessmentpage_banner from '../../assets/images/assessmentpage_banner.svg'

const AssessmentHomeBanner = () => {
  return (
    <AssessmentContainer>
        <HeadingContainer>
            <SubHeading>jcbduc</SubHeading>
            <MainHeading>Assessment</MainHeading>
            <Description>
                Having someone to assess ncewu hfbhe hrebrghgebfy drbfu hhj for your vintage valuables just like you do is now a reality with us.
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