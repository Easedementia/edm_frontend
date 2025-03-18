import { AssessmentContainer, TextContainer, Title, Subtitle, Description, AssessmentButton, ArrowIcon, DetailsContainer } from '../../Styles/UserHomeStyle/AssessmentLinkStyle'
// import arrow from '../../assets/images/arrow.svg'

const AssessmentLink = () => {
  return (
    <AssessmentContainer>
        <TextContainer>
            <Subtitle>Assessment Portal</Subtitle>
            <Title>Start your evaluation : Navigate to our assessment page</Title>
            <AssessmentButton to="/assessment">Assessment <ArrowIcon src="https://d2mzeyyrjif26w.cloudfront.net/assets/compressed-images/arrow_compressed-min.png" alt="arrow icon" /></AssessmentButton>
        </TextContainer>
        <DetailsContainer>
            <Description>
            The assessment process guides you to a <b>Self-Assessment</b>, allowing individuals with dementia to evaluate themselves, and an <b>Informant interview</b>, where a family member or caregiver can complete the evaluation on the individuals behalf, ensuring a comprehensive evaluation.
            </Description>
        </DetailsContainer>
    </AssessmentContainer>
  )
}

export default AssessmentLink