import { AssessmentContainer, HeadingContainer, MainHeading, SubHeading, Description, ButtonContainer, AssessmentButton, Icon, ImageContainer, StyledImage } from '../../Styles/AssessmentStyle/AssessmentHomeBannerStyle'
import brain from '../../assets/images/brain.svg'

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
                    <Icon>→</Icon>
                </AssessmentButton>
            </ButtonContainer>
        </HeadingContainer>
        <ImageContainer>
            <StyledImage src={brain} alt="Assessment Illustration"  />
        </ImageContainer>
    </AssessmentContainer>
  )
}

export default AssessmentHomeBanner