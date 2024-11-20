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
        heading: 'Innovation',
        description: 'We provide extensive care by employing the best innovative practices to ensure the highest quality of support for our clients.'
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
    },

    {
        icon: accountability,
        heading: 'Empathy',
        description: 'We strive to ensure that every client feels heard and valued by offering genuine companionship along the way.'
    },

    
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