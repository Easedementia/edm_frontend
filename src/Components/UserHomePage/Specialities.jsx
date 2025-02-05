import { SpecialitiesContainer, GridWrapper, SpecialityCard, SpecialityImage, Title, SubTitle, HighlightedText } from '../../Styles/UserHomeStyle/SpecialitiesStyle'
import forbes from '../../assets/images/forbes.svg'
import vr from '../../assets/images/vr.svg'
import hospex from '../../assets/images/hospex.svg'
import brain from '../../assets/images/brain.svg'
import care from '../../assets/images/care.svg'

const Specialities = () => {
  return (
    <SpecialitiesContainer>
      <GridWrapper>
        <SpecialityCard area="card1">
          <HighlightedText>#1</HighlightedText>
          <SubTitle>Kerala’s first elder care startup focusing on non-pharmacological interventions for dementia.</SubTitle>
          <SpecialityImage src={brain} alt="Doctor and Patient" />
        </SpecialityCard>

        <SpecialityCard area="card2">
          <HighlightedText>676+</HighlightedText>
          <SubTitle>Join over 676, happy clients who are benefiting from our services as we continue to enhance the well-being of elders every day</SubTitle>
        </SpecialityCard>

        <SpecialityCard area="card3">
          <HighlightedText>30+</HighlightedText>
          <SubTitle>Satisfied employees dedicated to extending exceptional support , delivering highest quality of service</SubTitle>
        </SpecialityCard>

        <SpecialityCard area="card4">
          <HighlightedText>#1</HighlightedText>
          <SpecialityImage src={vr} alt="VR Headset" />
          <SubTitle>India’s first Virtual Reality supported Dementia Care.</SubTitle>
        </SpecialityCard>

        <SpecialityCard area="card5">
        <HighlightedText>#1</HighlightedText>
          <SubTitle>Best Healthcare Startup Award 2023 - IMA Hospex</SubTitle>
          <SpecialityImage src={hospex} alt="Heart Icon" />
        </SpecialityCard>

        <SpecialityCard area="card6">
          <SpecialityImage src={forbes} alt="Award Trophy" />
          <SubTitle style={{marginTop:'-40px'}} >We’re recognized as one of the Select 200 companies with Global Business Potential
          by</SubTitle>
          <Title  style={{marginBottom:'110px'}}>Forbes India DGEMS 2024.</Title>
        </SpecialityCard>

        <SpecialityCard area="card7">
          <HighlightedText style={{marginTop:'60px'}}  >4.9</HighlightedText>
          <SubTitle style={{marginBottom:'60px'}} >Satisfaction Score</SubTitle>
        </SpecialityCard>

        <SpecialityCard area="card8">
          <SubTitle>Range of Geriatricians, Neurologists, Psychologists...</SubTitle>
          <SpecialityImage src={care} alt='care' />
        </SpecialityCard>

        
      </GridWrapper>
    </SpecialitiesContainer>
  )
}

export default Specialities