import { ServiceListingWrapper, ServiceContainer, ServiceCard, ServiceIcon, ServiceTitle, ServiceDescription, ServiceLink } from '../../Styles/UserHomeStyle/ServiceListingStyle';
import dementia_bro from '../../assets/images/dementia_bro.png'




const ServiceListing = () => {
    const services = [
        {
            icon: dementia_bro,
            title: "Early Screening",
            description: "Lorem ipsum dolor sit amet consectetur. jscnsds Convallis est urna adipiscing fringilla nulla diam .",
            link: "/services"
        },

        {
            icon: dementia_bro,
            title: "Tele Consultation",
            description: "Lorem ipsum dolor sit amet consectetur. jscnsds Convallis est urna adipiscing fringilla nulla diam .",
            link: "/services"
        },

        {
            icon: dementia_bro,
            title: "Intervention",
            description: "Lorem ipsum dolor sit amet consectetur. jscnsds Convallis est urna adipiscing fringilla nulla diam .",
            link: "/services"
        },

        {
            icon: dementia_bro,
            title: "Caregiver Support",
            description: "Lorem ipsum dolor sit amet consectetur. jscnsds Convallis est urna adipiscing fringilla nulla diam .",
            link: "/services"
        }
    ];


  return (
    <ServiceListingWrapper>
        <h2>We are Focusing On</h2>
        <ServiceContainer>
            {services.map((service, index) => (
                <ServiceCard key={index}>
                    <ServiceIcon src={service.icon} alt={service.title} />
                    <ServiceTitle>{service.title}</ServiceTitle>
                    <ServiceDescription>{service.description}</ServiceDescription>
                    <ServiceLink href={service.link}>
                        Explore More
                    </ServiceLink>
                </ServiceCard>
            ))}
        </ServiceContainer>
    </ServiceListingWrapper>
  );
};

export default ServiceListing