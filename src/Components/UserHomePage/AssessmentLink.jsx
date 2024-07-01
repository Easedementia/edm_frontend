import { AssessmentContainer, TextContainer, Title, Subtitle, Description, AssessmentButton, Arrow, DetailsContainer } from '../../Styles/UserHomeStyle/AssessmentLinkStyle'

const AssessmentLink = () => {
  return (
    <AssessmentContainer>
        <TextContainer>
            <Subtitle>Assessment Portal</Subtitle>
            <Title>Take me to the Assessment self screening first person assess</Title>
            <AssessmentButton to="/assessment">Assessment <Arrow>&#8594;</Arrow></AssessmentButton>
        </TextContainer>
        <DetailsContainer>
            <Description>
                Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl. Lorem ipsum praesent ac massa at ligula reet est iaculis. Lorem ipsum praesent ac massa at ligula reet est iaculis.Lorem ipsum praesent ac massa at ligula reet est iaculis. Vivamus est mist aliquet elit ac nisl. Lorem ipsum praesent ac massa at ligula reet est iaculis.
            </Description>
        </DetailsContainer>
    </AssessmentContainer>
  )
}

export default AssessmentLink