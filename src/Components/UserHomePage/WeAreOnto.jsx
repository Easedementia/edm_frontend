import { WeAreOntoWrapper, CardContainer, Card, CardImage, CardTitle, CardDescription, CardButton } from '../../Styles/UserHomeStyle/WeAreOntoStyle'
import dementia_bro from '../../assets/images/dementia_bro.png'


const WeAreOnto = () => {
  return (
    <WeAreOntoWrapper>
        <h2>We are Onto</h2>
        <CardContainer>
            <Card>
                <CardImage src={dementia_bro} alt="Memory Cafe" />
                <CardTitle>Memory Cafe</CardTitle>
                <CardDescription>
                    Whether you are a caregiver, someone living with memory loss, or a compassionate community member,
                    the Memory Cafe warmly welcomes you. Together, we can create a supportive and inclusive space where
                    memories are shared, friendships are formed, and lives are fulfilled.
                </CardDescription>
                <CardButton>Explore More</CardButton>
            </Card>

            <Card>
                <CardImage src={dementia_bro} alt="Day Care Center" />
                <CardTitle>Day Care Center</CardTitle>
                <CardDescription>
                    Whether you are a caregiver, someone living with memory loss, or a compassionate community member,
                    the Memory Cafe warmly welcomes you. Together, we can create a supportive and inclusive space where
                    memories are shared, friendships are formed, and lives are fulfilled.
                </CardDescription>
                <CardButton>Explore More</CardButton>
            </Card>
        </CardContainer>
    </WeAreOntoWrapper>
  )
}

export default WeAreOnto