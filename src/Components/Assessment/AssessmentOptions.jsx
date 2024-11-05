import { OptionsContainer, OptionCard, OptionImage, OptionTitle, OptionDescription, OptionLink } from '../../Styles/AssessmentStyle/AssessmentOptionsStyle'
import assessment_icon from '../../assets/images/assessment_icon.svg'
import arrow from '../../assets/images/arrow.svg'

const AssessmentOptions = () => {
  return (
    <OptionsContainer>
        <OptionCard>
            <OptionImage src={assessment_icon} alt='self-assessment' />
            <OptionTitle>Self Assessment</OptionTitle>
            <OptionDescription>
                Lorem ipsum dolor sit amet consectetur. jscnsds Convallis est urna adipiscing fringilla nulla diam.
            </OptionDescription>
            <OptionLink to='/assessment/self-assessment'>
                Assessment Portal
                <img src={arrow} alt="Arrow Icon" />
            </OptionLink>
        </OptionCard>

        <OptionCard>
            <OptionImage src={assessment_icon} alt='first-person' />
            <OptionTitle>Informant Interview</OptionTitle>
            <OptionDescription>
                Lorem ipsum dolor sit amet consectetur. jscnsds Convallis est urna adipiscing fringilla nulla diam.
            </OptionDescription>
            <OptionLink to='/assessment/first-person-assessment-instructions'>
                Assessment Portal
                <img src={arrow} alt="Arrow Icon" />
            </OptionLink>
        </OptionCard>
    </OptionsContainer>
  )
}

export default AssessmentOptions