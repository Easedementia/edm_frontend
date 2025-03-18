import { ServiceListingWrapper, ServiceContainer, ServiceCard, ServiceIcon, ServiceTitle, ServiceDescription, ServiceLink } from '../../Styles/UserHomeStyle/ServiceListingStyle';
// import arrow from '../../assets/images/arrow.svg'
// import screening1 from '../../assets/images/screening1.svg'
// import teleconsulting1 from '../../assets/images/teleconsulting1.svg'
// import intervention1 from '../../assets/images/intervention1.svg'
// import caregiver1 from '../../assets/images/caregiver1.svg'
// import screening2 from '../../assets/images/screening2.png'
// import teleconsulting2 from '../../assets/images/teleconsulting2.png'
// import intervention2 from '../../assets/images/intervention2.png'
// import caregiver2 from '../../assets/images/caregiver2.png'
import LazyLoad from 'react-lazyload';





const ServiceListing = () => {
    const services = [
        {
            icon: "https://d2mzeyyrjif26w.cloudfront.net/assets/compressed-images/screening1_compressed-min.png",
            title: "Early Screening",
            description: "This is a comprehensive assessment process which includes self assessment and an informant interview that allow assessors to explore the possibility of early early dementia.",
            link: "/services"
        },

        {
            icon: "https://d2mzeyyrjif26w.cloudfront.net/assets/compressed-images/teleconsulting1_compressed-min.png",
            title: "Tele Consultation",
            description: "At the indication of potential dementia, we offer consultations with experienced physicians to ensure concerns are promptly identified and addressed with appropriate measures.",
            link: "/services"
        },

        {
            icon: "https://d2mzeyyrjif26w.cloudfront.net/assets/compressed-images/intervention1_compressed-min.png",
            title: "Intervention",
            description: "Our intervention specialists provide personalized, home-based support for clients with dementia focussing on a holistic approach to enhance quality of life for clients and their families.",
            link: "/services"
        },

        {
            icon: "https://d2mzeyyrjif26w.cloudfront.net/assets/compressed-images/caregiver1_compressed-min.png",
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
                    <LazyLoad>
                    <img style={{width:'18px', height:'18px', marginLeft:'10px'}} src="https://d2mzeyyrjif26w.cloudfront.net/assets/images/arrow_compressed.png" alt="Arrow Icon" />
                    </LazyLoad>
                    </ServiceLink>
                </ServiceCard>
            ))}
        </ServiceContainer>
    </ServiceListingWrapper>
  );
};

export default ServiceListing