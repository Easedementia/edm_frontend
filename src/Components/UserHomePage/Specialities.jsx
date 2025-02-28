import { SpecialitiesContainer, GridWrapper, SpecialityCard, SpecialityImage, Title, SubTitle, HighlightedText } from '../../Styles/UserHomeStyle/SpecialitiesStyle'
// import forbes from '../../assets/images/forbes.svg'
// import vr from '../../assets/images/vr.svg'
// import hospex from '../../assets/images/hospex.svg'
// import brain from '../../assets/images/brain.svg'
// import care from '../../assets/images/care.svg'
// import specialities_brain from '../../assets/images/specialities_brain.png'
// import specialities_care from '../../assets/images/specialities_care.png'
// import specialities_forbes from '../../assets/images/specialities_forbes.png'
// import specialities_hospex from '../../assets/images/specialities_hospex.png'
// import specialities_vr from '../../assets/images/specialities_vr.png'
import LazyLoad from 'react-lazyload'

const Specialities = () => {
  return (
    <SpecialitiesContainer>
      <GridWrapper>
        <SpecialityCard area="card1">
          <HighlightedText>#1</HighlightedText>
          <SubTitle>Kerala’s first elder care startup focusing on non-pharmacological interventions for dementia.</SubTitle>
          <LazyLoad height={300} offset={100}>
          <SpecialityImage src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/brain.svg" alt="Doctor and Patient" />
          </LazyLoad>
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
          <LazyLoad height={300} offset={100}>
          <SpecialityImage src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/vr.svg" alt="VR Headset" />
          </LazyLoad>
          <SubTitle>India’s first Virtual Reality supported Dementia Care.</SubTitle>
        </SpecialityCard>

        <SpecialityCard area="card5">
        <HighlightedText>#1</HighlightedText>
          <SubTitle>Best Healthcare Startup Award 2023 - IMA Hospex</SubTitle>
          <LazyLoad height={300} offset={100}>
          <SpecialityImage src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/hospex.svg" alt="Heart Icon" />
          </LazyLoad>
        </SpecialityCard>

        <SpecialityCard area="card6">
          <LazyLoad height={300} offset={100}>
          <SpecialityImage src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/forbes.svg" alt="Award Trophy" />
          </LazyLoad>
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
          <LazyLoad height={300} offset={100}>
          <SpecialityImage src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/care.svg" alt='care' />
          </LazyLoad>
        </SpecialityCard>

        
      </GridWrapper>
    </SpecialitiesContainer>
  )
}

export default Specialities