import { VisionMissionContainer, LeftContainer, RightContainer, Heading, SubHeading, Description, CardsContainer, Card, CardIconContainer, CardIcon, CardHeading, CardDescription } from '../../Styles/AboutUsStyle/VisionMissionStyle'
import vision from '../../assets/images/vision.svg'
import mission from '../../assets/images/mission.svg'


const VisionMission = () => {
  return (
    <VisionMissionContainer>
      <LeftContainer>
        <Heading>Revolutionizing dementia care through heart and hope
        </Heading>
        <SubHeading>Easing dementia with compassion and dedication</SubHeading>
        <Description>
        At Easedementia, we are driven by a passion to transform dementia care, putting compassion, connection, and empowerment at the heart of all we do.
        </Description>
      </LeftContainer>
      <RightContainer>
        <CardsContainer>
          <Card>
            <CardIconContainer>
              <CardHeading>Our Vision</CardHeading>
              <CardIcon src={vision} alt="Lightbulb Icon" />
            </CardIconContainer>
            <CardDescription>
              Whether you are a caregiver, someone living with memory loss, or a compassionate community member, the Memory Cafe warmly welcomes you.
            </CardDescription>
          </Card>
          <Card>
            <CardIconContainer>
              <CardHeading>Our Mission</CardHeading>
              <CardIcon src={mission} alt="Target Icon" />
            </CardIconContainer>
            <CardDescription>
              Whether you are a caregiver, someone living with memory loss, or a compassionate community member, the Memory Cafe warmly welcomes you.
            </CardDescription>
          </Card>
        </CardsContainer>
      </RightContainer>
    </VisionMissionContainer>
  )
}

export default VisionMission