import CallButton from "../Components/CallUs/CallButton"
import Footer from "../Components/Footer/Footer"
import UserNavbar from "../Components/Navbar/UserNavbar"
import AssessmentLink from "../Components/UserHomePage/AssessmentLink"
import Banner from "../Components/UserHomePage/Banner"
import MontessoriApproach from "../Components/UserHomePage/MontessoriApproach"
import PartnershipLogos from "../Components/UserHomePage/PartnershipLogos"
import ServiceListing from "../Components/UserHomePage/ServiceListing"
import Specialities from "../Components/UserHomePage/Specialities"
import Testimonials from "../Components/UserHomePage/Testimonials"
import WeAreOnto from "../Components/UserHomePage/WeAreOnto"
import WhatsappButton from "../Components/WhatsappChat/WhatsappButton"
import GlobalStyle from "../Styles/GlobalStyles"
import { Helmet } from "react-helmet-async";


const UserHomePage = () => {
  return (
    <>
    <Helmet>
        <title>Easedementia - Global Dementia Care & Caregiver Support</title>
        <meta name="description" content="Easedementia Technologies Pvt Ltd offers expert dementia care and caregiver support worldwide. Our comprehensive services assist families and individuals dealing with dementia." />
        <meta name="keywords" content="dementia care, Alzheimer's support, caregiver assistance, global mental health, elderly care, memory loss treatment" />
        <meta name="author" content="Easedementia Technologies Pvt Ltd" />
        
        {/* Open Graph (OG) for social sharing */}
        <meta property="og:title" content="Easedementia - Global Dementia Care & Caregiver Support" />
        <meta property="og:description" content="Expert dementia care and comprehensive caregiver support worldwide." />
        <meta property="og:image" content="/easedementia_logo.png" />
        <meta property="og:url" content="https://easedementia.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        {/* <meta name="twitter:title" content="Easedementia - Global Dementia Care & Caregiver Support" />
        <meta name="twitter:description" content="Dementia-focused healthcare services available worldwide." />
        <meta name="twitter:image" content="/global-dementia-care.jpg" />
        <meta name="twitter:card" content="summary_large_image" /> */}

        {/* Multilingual & Global SEO */}
        {/* <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Language" content="en" />
        <link rel="alternate" hreflang="en" href="https://easedementia.com/en/" />
        <link rel="alternate" hreflang="es" href="https://easedementia.com/es/" />
        <link rel="alternate" hreflang="fr" href="https://easedementia.com/fr/" /> */}
      </Helmet>
    <GlobalStyle/>
    <UserNavbar/>
    <Banner/>
    <AssessmentLink/>
    <PartnershipLogos/>
    <ServiceListing/>
    <Specialities/>
    <WeAreOnto/>
    <MontessoriApproach/>
    <Testimonials/>
    <CallButton/>
    <WhatsappButton/>
    <Footer/>
    </>
    
  )
}

export default UserHomePage