import { HeadingContainer, SubHeading, MainHeading, Description, CardContainer, ServiceWrapper, ServiceCard, ServiceContent, ServiceTitle, ServiceDescription, BookButton, StyledImage, FirstRow } from '../../Styles/ServicesStyle/ServicesListStyle'
// import caregiver from '../../assets/images/caregiver.svg'
import { baseURL } from '../../api/api'
import { useState, useEffect } from 'react'
import axios from 'axios'



const ServicesList = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${baseURL}/services/`);
        setServices(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  const getFullImageUrl = (imagePath) => `${baseURL}${imagePath}`;

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
        {services.slice(0, 1).map((service) => (
          <CardContainer key={service.id}>
            <ServiceCard>
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <BookButton>Book an Appointment</BookButton>
              </ServiceContent>
              <StyledImage src={getFullImageUrl(service.image)} alt='Service Image' />
            </ServiceCard>
          </CardContainer>
        ))}
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
              <StyledImage src={getFullImageUrl(service.image)} alt='Service Image' />
            </ServiceCard>
          </CardContainer>
        </ServiceWrapper>
      ))}
    </div>
    
  )
}

export default ServicesList