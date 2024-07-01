import { MontessoriApproachContainer, Title, ApproachContainer, ApproachCard, ApproachImage, ApproachTitle } from '../../Styles/UserHomeStyle/MontessoriApproachStyle'
import Alzheimer_amico from '../../assets/images/Alzheimer_amico.png'
import Dementia_pana from '../../assets/images/Dementia_pana.png'
import Dementia_amico from '../../assets/images/Dementia_amico.png'
import Active_elderly_people_amico from '../../assets/images/Active_elderly_people_amico.png'
import Active_elderly_people_cuate from '../../assets/images/Active_elderly_people_cuate.png'
import Culnary from '../../assets/images/Culnary.png'


const MontessoriApproach = () => {
  return (
    <MontessoriApproachContainer>
        <Title>Our Montessori Approach</Title>
        <ApproachContainer>
            <ApproachCard>
                <ApproachImage src={Alzheimer_amico} alt='Cognitive Training' />
                <ApproachTitle>Cognitive Training</ApproachTitle>
            </ApproachCard>

            <ApproachCard>
                <ApproachImage src={Culnary} alt='Culinary Spread' />
                <ApproachTitle>Culinary Spread</ApproachTitle>
            </ApproachCard>

            <ApproachCard>
                <ApproachImage src={Active_elderly_people_amico} alt='Physical Exercise' />
                <ApproachTitle>Physical Exercise</ApproachTitle>
            </ApproachCard>

            <ApproachCard>
                <ApproachImage src={Active_elderly_people_cuate} alt='Recreational Activities' />
                <ApproachTitle>Recreational Activities</ApproachTitle>
            </ApproachCard>

            <ApproachCard>
                <ApproachImage src={Dementia_pana} alt='Sensory Stimulation' />
                <ApproachTitle>Sensory Stimulation</ApproachTitle>
            </ApproachCard>

            <ApproachCard>
                <ApproachImage src={Dementia_amico} alt='Sensory Stimulation' />
                <ApproachTitle>Social Interaction</ApproachTitle>
            </ApproachCard>

        </ApproachContainer>
    </MontessoriApproachContainer>
  )
}

export default MontessoriApproach