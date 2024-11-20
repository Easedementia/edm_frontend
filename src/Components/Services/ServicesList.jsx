import { HeadingContainer, SubHeading, MainHeading, Description, CardContainer, ServiceWrapper, ServiceCard, ServiceContent, ServiceTitle, ServiceDescription, BookButton, StyledImage, FirstRow, ArrowIcon } from '../../Styles/ServicesStyle/ServicesListStyle'
// import caregiver from '../../assets/images/caregiver.svg'
import { baseURL } from '../../api/api'
import { useState, useEffect } from 'react'
import axios from 'axios'
import arrow from '../../assets/images/arrow.svg'



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
          Our services are designed to promote cognitive stimulation, emotional support, and overall quality of life, empowering elders to live with dignity and purpose.
          </Description>
        </HeadingContainer>
        {services.slice(0, 1).map((service) => (
          <CardContainer key={service.id}>
            <ServiceCard>
              <ServiceContent>
                <ServiceTitle>{service.title}</ServiceTitle>
                <ServiceDescription>{service.description}</ServiceDescription>
                <BookButton>
                  Book an Appointment
                  <ArrowIcon src={arrow} alt="arrow icon" />
                </BookButton>
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
                <BookButton>
                  Book an Appointment
                  <ArrowIcon src={arrow} alt="arrow icon" />
                </BookButton>
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