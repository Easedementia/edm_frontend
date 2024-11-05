import { Container, Card, Image, CardTitle, CardSubtitle, ExploreMore } from '../../Styles/DoctorConsultingStyle/ConsultingOptionsStyle'
import instantconsultation from '../../assets/images/instantconsultation.svg'
import schedulelater from '../../assets/images/schedulelater.svg'
import geriatriccounseling from '../../assets/images/geriatriccounseling.svg'
import arrow from '../../assets/images/arrow.svg'

const options = [
    {
      title: 'Instant Consultation',
      subtitle: 'Connect within 60 secs',
      imageSrc: instantconsultation,
      alt: 'Instant Consultation',
    },
    {
      title: 'Schedule for later',
      subtitle: 'Confirm available slots',
      imageSrc: schedulelater,
      alt: 'Schedule for later',
    },
    {
      title: 'Geriatric Counselling',
      subtitle: 'Caregiver support',
      imageSrc: geriatriccounseling,
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
          <ExploreMore href="#">
            Explore More
            <img src={arrow} alt="Arrow Icon" />
          </ExploreMore>
        </Card>
      ))}
    </Container>
  )
}

export default ConsultingOptions