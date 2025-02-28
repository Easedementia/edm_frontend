import { VisionMissionContainer, LeftContainer, RightContainer, Heading, SubHeading, Description, CardsContainer, Card, CardIconContainer, CardIcon, CardHeading, CardDescription } from '../../Styles/AboutUsStyle/VisionMissionStyle'
// import vision from '../../assets/images/vision.svg'
// import mission from '../../assets/images/mission.svg'
import LazyLoad from "react-lazyload";


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
              <LazyLoad height={300} offset={100} >
              <CardIcon src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/vision.svg" alt="Lightbulb Icon" />
              </LazyLoad>
            </CardIconContainer>
            <CardDescription>
              We believe that every person deserves to live with dignity and be supported in their journey.
            </CardDescription>
          </Card>
          <Card>
            <CardIconContainer>
              <CardHeading>Our Mission</CardHeading>
              <LazyLoad height={300} offset={100} >
              <CardIcon src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/mission.svg" alt="Target Icon" />
              </LazyLoad>
            </CardIconContainer>
            <CardDescription>
              Here we strive to redefine dementia care, empower individuals to thrive, and inculcate a sense of
              belongingness!
            </CardDescription>
          </Card>
        </CardsContainer>
      </RightContainer>
    </VisionMissionContainer>
  )
}

export default VisionMission