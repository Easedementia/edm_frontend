import { VisionMissionContainer, LeftContainer, RightContainer, Heading, SubHeading, Description, CardsContainer, Card, CardIconContainer, CardIcon, CardHeading, CardDescription } from '../../Styles/AboutUsStyle/VisionMissionStyle'
import dementia_bro from '../../assets/images/dementia_bro.png'
import Dementia_pana from '../../assets/images/Dementia_pana.png'


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
              <CardIcon src={dementia_bro} alt="Lightbulb Icon" />
            </CardIconContainer>
            <CardDescription>
              Whether you are a caregiver, someone living with memory loss, or a compassionate community member, the Memory Cafe warmly welcomes you. Together, we can create a supportive and inclusive space where memories are shared, friendled.
            </CardDescription>
          </Card>
          <Card>
            <CardIconContainer>
              <CardHeading>Our Mission</CardHeading>
              <CardIcon src={Dementia_pana} alt="Target Icon" />
            </CardIconContainer>
            <CardDescription>
              Whether you are a caregiver, someone living with memory loss, or a compassionate community member, the Memory Cafe warmly welcomes you. Together, we can create a supportive and inclusive space where memories are shared, friendled.
            </CardDescription>
          </Card>
        </CardsContainer>
      </RightContainer>
    </VisionMissionContainer>
  )
}

export default VisionMission