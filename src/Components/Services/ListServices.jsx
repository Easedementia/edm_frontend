import { ServiceListingWrapper, ServiceContainer, ServiceCard, ServiceIcon, ServiceTitle, ServiceDescription, ServiceLink } from '../../Styles/ServicesStyle/ListServicesStyle';
// import arrow from '../../assets/images/arrow.svg'
// import screening1 from '../../assets/images/screening1.svg'
// import teleconsulting1 from '../../assets/images/teleconsulting1.svg'
// import intervention1 from '../../assets/images/intervention1.svg'
// import caregiver1 from '../../assets/images/caregiver1.svg'
import LazyLoad from 'react-lazyload';


const ListServices = () => {
    const services = [
            {
                icon: "https://d2mzeyyrjif26w.cloudfront.net/assets/images/screening1.svg",
                title: "Early Screening",
                description: "This is a comprehensive assessment process which includes self assessment and an informant interview that allow assessors to explore the possibility of early early dementia.",
                link: "/services"
            },
    
            {
                icon: "https://d2mzeyyrjif26w.cloudfront.net/assets/images/teleconsulting1.svg",
                title: "Tele Consultation",
                description: "At the indication of potential dementia, we offer consultations with experienced physicians to ensure concerns are promptly identified and addressed with appropriate measures.",
                link: "/services"
            },
    
            {
                icon: "https://d2mzeyyrjif26w.cloudfront.net/assets/images/intervention1.svg",
                title: "Intervention",
                description: "Our intervention specialists provide personalized, home-based support for clients with dementia focussing on a holistic approach to enhance quality of life for clients and their families.",
                link: "/services"
            },
    
            {
                icon: "https://d2mzeyyrjif26w.cloudfront.net/assets/images/caregiver1.svg",
                title: "Caregiver Support",
                description: "Caring for someone with dementia can be overwhelming, Our program offers sessions led by experienced healthcare professionals for caregivers of elderly individuals with dementia.",
                link: "/services"
            }
        ];

  return (
    <ServiceListingWrapper>
            <h2>We are Focusing On</h2>
            <ServiceContainer>
                {services.map((service, index) => (
                    <ServiceCard key={index}>
                        <LazyLoad>
                        <ServiceIcon src={service.icon} alt={service.title} />
                        </LazyLoad>
                        <ServiceTitle>{service.title}</ServiceTitle>
                        <ServiceDescription>{service.description}</ServiceDescription>
                        <ServiceLink href={service.link}>
                        Explore More
                        <img src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/arrow.svg" alt="Arrow Icon" />
                        </ServiceLink>
                    </ServiceCard>
                ))}
            </ServiceContainer>
        </ServiceListingWrapper>
  )
}

export default ListServices