import { SpecialitiesContainer, GridWrapper, SpecialityCard, SpecialityImage, Title, SubTitle, HighlightedText } from '../../Styles/UserHomeStyle/SpecialitiesStyle'
import dementia_bro from '../../assets/images/dementia_bro.png'

const Specialities = () => {
  return (
    <SpecialitiesContainer>
      <GridWrapper>
        <SpecialityCard area="card1">
          <HighlightedText>#1</HighlightedText>
          <SubTitle>Kerala’s first elder care startup focusing on Dementia Care</SubTitle>
          <SpecialityImage src={dementia_bro} alt="Doctor and Patient" />
        </SpecialityCard>

        <SpecialityCard area="card2">
          <HighlightedText>676+</HighlightedText>
          <SubTitle>Join over 676, happy clients who are benefiting from our services as we continue to enhance the well-being of elders every day</SubTitle>
        </SpecialityCard>

        <SpecialityCard area="card3">
          <HighlightedText>43+</HighlightedText>
          <SubTitle>Satisfied employees dedicated to extending exceptional support , delivering highest quality of service</SubTitle>
        </SpecialityCard>

        <SpecialityCard area="card4">
          <HighlightedText>#1</HighlightedText>
          <SubTitle>India’s first Virtual Reality supported Dementia Care.</SubTitle>
          <SpecialityImage src={dementia_bro} alt="VR Headset" />
        </SpecialityCard>

        <SpecialityCard area="card5">
          <SubTitle>Range of Geriatricians, Neurologists, Psychologists...</SubTitle>
          <SpecialityImage src={dementia_bro} alt="Heart Icon" />
        </SpecialityCard>

        <SpecialityCard area="card6">
          <SpecialityImage src={dementia_bro} alt="Award Trophy" />
          <HighlightedText>#1</HighlightedText>
          <SubTitle>Kerala’s best Healthcare startup Award 2023</SubTitle>
        </SpecialityCard>

        <SpecialityCard area="card7">
          <HighlightedText>4.9</HighlightedText>
          <SubTitle>Satisfaction Score</SubTitle>
        </SpecialityCard>

        <SpecialityCard area="card8">
          <Title>easemy60</Title>
        </SpecialityCard>
      </GridWrapper>
    </SpecialitiesContainer>
  )
}

export default Specialities