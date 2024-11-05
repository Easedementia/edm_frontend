import { ValuesContainer, Heading, SingleCardContainer, ValuesContent, ValuesIcon, ValuesHeading, ValuesDescription } from '../../Styles/AboutUsStyle/OurValuesStyle'
import compassion from '../../assets/images/compassion.svg'
import progress from '../../assets/images/progress.svg'
import accountability from '../../assets/images/accountability.svg'
import integrity from '../../assets/images/integrity.svg'


const valuesData = [
    {
        icon: compassion,
        heading: 'Compassion',
        description: 'At Easedementia, empathy is our guiding principle, ensuring dignity and respect for all our clients.'
    },

    {
        icon: progress,
        heading: 'Progress',
        description: 'We constantly innovate to enhance dementia care, always seeking new ways to improve lives.'
    },

    {
        icon: accountability,
        heading: 'Accountability',
        description: 'Our team delivers compassionate, reliable care, treating every individual as cherished.'
    },

    {
        icon: integrity,
        heading:'Integrity',
        description: 'We prioritize honesty and transparency, always acting in the best interests of our clients.'
    }
];


const OurValues = () => {
  return (
    <ValuesContainer>
        <Heading>Our Values</Heading>
        <SingleCardContainer>
        {valuesData.map((value, index) => (
            <ValuesContent key={index}>
            <ValuesIcon src={value.icon} alt={`${value.heading} Icon`} />
            <div>
                <ValuesHeading>{value.heading}</ValuesHeading>
                <ValuesDescription>{value.description}</ValuesDescription>
            </div>
            </ValuesContent>
        ))}
        </SingleCardContainer>
    </ValuesContainer>
  )
}

export default OurValues