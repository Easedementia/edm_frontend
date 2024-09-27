import { OptionsContainer, OptionCard, OptionImage, OptionTitle, OptionDescription, OptionLink } from '../../Styles/AssessmentStyle/AssessmentOptionsStyle'
import caregiver from '../../assets/images/caregiver.svg'

const AssessmentOptions = () => {
  return (
    <OptionsContainer>
        <OptionCard>
            <OptionImage src={caregiver} alt='self-assessment' />
            <OptionTitle>Self Assessment</OptionTitle>
            <OptionDescription>
                Lorem ipsum dolor sit amet consectetur. jscnsds Convallis est urna adipiscing fringilla nulla diam.
            </OptionDescription>
            <OptionLink to='/assessment/self-assessment'>
                Assessment Portal
            </OptionLink>
        </OptionCard>

        <OptionCard>
            <OptionImage src={caregiver} alt='first-person' />
            <OptionTitle>Informant Interview</OptionTitle>
            <OptionDescription>
                Lorem ipsum dolor sit amet consectetur. jscnsds Convallis est urna adipiscing fringilla nulla diam.
            </OptionDescription>
            <OptionLink to='/assessment/first-person-assessment-instructions'>
                Assessment Portal
            </OptionLink>
        </OptionCard>
    </OptionsContainer>
  )
}

export default AssessmentOptions