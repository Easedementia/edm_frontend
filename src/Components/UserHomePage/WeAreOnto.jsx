import { WeAreOntoWrapper, CardContainer, Card, CardImage, CardTitle, CardDescription, CardButton } from '../../Styles/UserHomeStyle/WeAreOntoStyle'
import arrow from '../../assets/images/arrow.svg'
import memorycafe from '../../assets/images/memorycafe.png'
import dementiaclinic from '../../assets/images/dementiaclinic.png'


const WeAreOnto = () => {
  return (
    <>
    <WeAreOntoWrapper>
        <h2>We are Onto</h2>
        <CardContainer>
            <Card>
                <CardImage src={memorycafe} alt="Memory Cafe" />
                <CardTitle>Active Ageing Center</CardTitle>
                <CardDescription>
                We connect, care, and empower elders to maintain their physical, emotional, and social well-being through innovative programs and supportive services for healthier lives. Our holistic approach ensures that every senior receives personalized support tailored to their unique needs, fostering a sense of belonging and community engagement.
                </CardDescription>
                <CardButton>
                    Explore More
                    <img src={arrow} alt="Arrow Icon" />
                </CardButton>  
            </Card>

            <Card>
                <CardImage src={dementiaclinic} alt="Day Care Center" />
                <CardTitle>Dementia Clinic</CardTitle>
                <CardDescription>
                Our dedicated team provides compassionate and comprehensive care for individuals with dementia and their families.  From diagnostic evaluations to cognitive therapy, support groups, and educational resources, we empower patients and caregivers with the tools and support necessary to navigate dementia’s challenges and improve overall quality of life.
                </CardDescription>
                <CardButton>
                    Explore More
                    <img src={arrow} alt="Arrow Icon" />
                </CardButton>                                                                                       
            </Card>
        </CardContainer>
    </WeAreOntoWrapper>
    </>
  )
}

export default WeAreOnto