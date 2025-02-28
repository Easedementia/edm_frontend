import { MontessoriApproachContainer, Title, ApproachContainer, ApproachCard, ApproachImage, ApproachTitle } from '../../Styles/UserHomeStyle/MontessoriApproachStyle'
// import Alzheimer_amico from '../../assets/images/Alzheimer_amico.png'
// import Dementia_pana from '../../assets/images/Dementia_pana.png'
// import Dementia_amico from '../../assets/images/Dementia_amico.png'
// import Active_elderly_people_amico from '../../assets/images/Active_elderly_people_amico.png'
// import Active_elderly_people_cuate from '../../assets/images/Active_elderly_people_cuate.png'
// import Culnary from '../../assets/images/Culnary.png'


const MontessoriApproach = () => {
  return (
    <MontessoriApproachContainer>
        <Title>Our Six Bucket Approach</Title>
        <ApproachContainer>
            <ApproachCard>
                <ApproachImage src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/Alzheimer_amico.png" alt='Cognitive Training' />
                <ApproachTitle>Cognitive Training</ApproachTitle>
            </ApproachCard>

            <ApproachCard>
                <ApproachImage src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/Culnary.png" alt='Culinary Spread' />
                <ApproachTitle>Culinary Spread</ApproachTitle>
            </ApproachCard>

            <ApproachCard>
                <ApproachImage src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/Active_elderly_people_amico.png" alt='Physical Exercise' />
                <ApproachTitle>Physical Exercise</ApproachTitle>
            </ApproachCard>

            <ApproachCard>
                <ApproachImage src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/Active_elderly_people_cuate.png" alt='Recreational Activities' />
                <ApproachTitle>Recreational Activities</ApproachTitle>
            </ApproachCard>

            <ApproachCard>
                <ApproachImage src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/Dementia_pana.png" alt='Sensory Stimulation' />
                <ApproachTitle>Sensory Stimulation</ApproachTitle>
            </ApproachCard>

            <ApproachCard>
                <ApproachImage src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/Dementia_amico.png" alt='Sensory Stimulation' />
                <ApproachTitle>Social Interaction</ApproachTitle>
            </ApproachCard>

        </ApproachContainer>
    </MontessoriApproachContainer>
  )
}

export default MontessoriApproach