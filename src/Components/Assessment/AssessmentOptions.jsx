import { OptionsContainer, OptionCard, OptionImage, OptionTitle, OptionDescription, OptionLink } from '../../Styles/AssessmentStyle/AssessmentOptionsStyle'
// import assessment_icon from '../../assets/images/assessment_icon.svg'
// import arrow from '../../assets/images/arrow.svg'

const AssessmentOptions = () => {
  return (
    <OptionsContainer>
        <OptionCard>
            <OptionImage src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/assessment_icon.svg" alt='self-assessment' />
            <OptionTitle>Self Assessment</OptionTitle>
            <OptionDescription>
            Evaluate your cognitive health with a quick self-assessment.
            </OptionDescription>
            <OptionLink to='/assessment/self-assessment-instructions'>
                Begin Assessment
                <img src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/arrow.svg" alt="Arrow Icon" />
            </OptionLink>
        </OptionCard>

        <OptionCard>
            <OptionImage src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/assessment_icon.svg" alt='first-person' />
            <OptionTitle>Informant Interview</OptionTitle>
            <OptionDescription>
            Assess your loved one’s cognitive well-being with this guided interview.
            </OptionDescription>
            <OptionLink to='/assessment/first-person-assessment-instructions'>
                Begin Assessment
                <img src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/arrow.svg" alt="Arrow Icon" />
            </OptionLink>
        </OptionCard>
    </OptionsContainer>
  )
}

export default AssessmentOptions