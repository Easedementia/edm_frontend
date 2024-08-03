import { Container, Card, Image, CardTitle, CardSubtitle, ExploreMore } from '../../Styles/DoctorConsultingStyle/ConsultingOptionsStyle'
import doctor1 from '../../assets/images/doctor1.png'

const options = [
    {
      title: 'Instant Consultation',
      subtitle: 'Connect within 60 secs',
      imageSrc: doctor1,
      alt: 'Instant Consultation',
    },
    {
      title: 'Schedule for later',
      subtitle: 'Confirm available slots',
      imageSrc: doctor1,
      alt: 'Schedule for later',
    },
    {
      title: 'Geriatric Counselling',
      subtitle: 'Caregiver support',
      imageSrc: doctor1,
      alt: 'Geriatric Counselling',
    },
  ];

const ConsultingOptions = () => {
  return (
    <Container>
      {options.map((option, index) => (
        <Card key={index}>
          <CardTitle>{option.title}</CardTitle>
          <CardSubtitle>{option.subtitle}</CardSubtitle>
          <Image src={option.imageSrc} alt={option.alt} />
          <ExploreMore href="#">Explore More</ExploreMore>
        </Card>
      ))}
    </Container>
  )
}

export default ConsultingOptions