import { VisionMissionContainer, LeftContainer, RightContainer, Heading, SubHeading, Description, CardsContainer, Card, CardIconContainer, CardIcon, CardHeading, CardDescription } from '../../Styles/AboutUsStyle/VisionMissionStyle'
import vision from '../../assets/images/vision.svg'
import mission from '../../assets/images/mission.svg'


const VisionMission = () => {
  return (
    <VisionMissionContainer>
      <LeftContainer>
        <Heading>Text kittmbho ida</Heading>
        <SubHeading>Easedementia is the core of everything we do.</SubHeading>
        <Description>
          Here we strive to redefine dementia care, empower individuals to thrive, and inculcate a sense of belongingness!
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