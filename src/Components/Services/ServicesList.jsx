import { HeadingContainer, SubHeading, MainHeading, Description, CardContainer, ServiceWrapper, ServiceCard, ServiceContent, ServiceTitle, ServiceDescription, BookButton, StyledImage, FirstRow } from '../../Styles/ServicesStyle/ServicesListStyle'
import caregiver from '../../assets/images/caregiver.svg'


const services = [
  {
    id: 1,
    title: 'Ease dementia',
    description: `DUMMY TEXT; Active Ageing Program is our home-based intervention program dedicated to providing compassionate support and personalised care to enhance the wellbeing of our senior community members. Through a diverse range of activities, including cognitive stimulation, physical exercises, and emotional support, we strive to enhance the well-being and quality of life for those living with dementia.`,
    image: caregiver, // Replace with the path to the image
  },
  {
    id: 2,
    title: 'Ease my 60',
    description: `Active Ageing Program is our home-based intervention program dedicated to providing compassionate support and personalised care to enhance the wellbeing of our senior community members. Through a diverse range of activities, including cognitive stimulation, physical exercises, and emotional support, we strive to enhance the well-being and quality of life for those living with dementia.`,
    image: caregiver, // Replace with the path to the image
  },
];
  



const ServicesList = () => {
  return (
    <div>
      <FirstRow>
        <HeadingContainer>
          <SubHeading>Offer closes soon</SubHeading>
          <MainHeading>Wide range of dementia care services</MainHeading>
          <Description>
            Here we strive to redefine dementia care, empower individuals to thrive, and inculcate a sense of belongingness!
          </Description>
        </HeadingContainer>
        <CardContainer>
          <ServiceCard>
            <ServiceContent>
              <ServiceTitle>{services[0].title}</ServiceTitle>
              <ServiceDescription>{services[0].description}</ServiceDescription>
              <BookButton>Book an Appointment</BookButton>
            </ServiceContent>
            <StyledImage src={services[0].image} alt='Service Image' />
          </ServiceCard>
        </CardContainer>
      </FirstRow>
      {services.slice(1).map((service, index) => (
        <ServiceWrapper key={service.id} reverse={index % 2 !== 0}>
          <CardContainer>
            <ServiceCard>
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <BookButton>Book an Appointment</BookButton>
              </ServiceContent>
              <StyledImage src={service.image} alt='Service Image' />
            </ServiceCard>
          </CardContainer>
        </ServiceWrapper>
      ))}
    </div>
    
  )
}

export default ServicesList