import UserNavbar from "../Components/Navbar/UserNavbar"
import Footer from "../Components/Footer/Footer"
import GlobalStyle from "../Styles/GlobalStyles"
import ServicesBanner from "../Components/Services/ServicesBanner"
// import ServicesBannerImage from "../Components/Services/ServicesBannerImage"
import ServicesList from "../Components/Services/ServicesList"
import CallButton from "../Components/CallUs/CallButton"
import WhatsappButton from "../Components/WhatsappChat/WhatsappButton"
import ListServices from "../Components/Services/ListServices"
import { Helmet } from "react-helmet-async";

const ServicesPage = () => {
  return (
    <>
    <Helmet>
      <title>Our Services | Easedementia - Compassionate Dementia Care</title>
      <meta name="description" content="Explore our comprehensive dementia care services, including early screening, teleconsultation, intervention, caregiver support and active aging. Enhance quality of life with Easedementia."/>
      <meta name="keywords" content="Dementia Care, Cognitive Health, Early Screening, Tele Consultation, Caregiver Support, Dementia Intervention, Active Aging"/>
      <meta name="author" content="Easedementia Technologies Pvt Ltd"/>
      <meta name="robots" content="index, follow"/>

      
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://easedementia.com/services"/>
      <meta property="og:title" content="Our Services | Easedementia - Compassionate Dementia Care"/>
      <meta property="og:description" content="Discover our wide range of dementia care services, designed to promote cognitive stimulation, emotional support, and well-being for elders."/>
      <meta property="og:image" content="https://d2mzeyyrjif26w.cloudfront.net/assets/images/servicesbannerimage_compressed.png"/>

      
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:url" content="https://easedementia.com/services"/>
      <meta name="twitter:title" content="Our Services | Easedementia - Compassionate Dementia Care"/>
      <meta name="twitter:description" content="From early screening to caregiver support, Easedementia provides holistic dementia care. Explore our services for better elderly well-being."/>
      <meta name="twitter:image" content="https://d2mzeyyrjif26w.cloudfront.net/assets/images/servicesbannerimage_compressed.png"/>

      <link rel="canonical" href="https://easedementia.com/services"/>
      <link rel="icon" href="https://d2mzeyyrjif26w.cloudfront.net/assets/images/favicon.png" type="image/png" />

    </Helmet>
    <GlobalStyle/>
    <UserNavbar/>
    <ServicesBanner/>
    {/* <ServicesBannerImage/> */}
    <ServicesList/>
    <ListServices/>
    <CallButton/>
    <WhatsappButton/>
    <Footer/>
    </>
    
  )
}

export default ServicesPage