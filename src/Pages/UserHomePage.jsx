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
        <title>Easedementia - Global Dementia Care & Assistance</title>
        <meta name="description" content="Easedementia provides global dementia care and comprehensive caregiver assistance. Join us to improve the quality of life for dementia patients and their families." />
        <meta name="keywords" content="Dementia care, Alzheimer’s support, Caregiver assistance, Memory loss treatment, Active Aging, Home based interventions" />
        <meta name="author" content="Easedementia Technologies Pvt Ltd" />

        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:title" content="Easedementia - Global Dementia Support & Assistance" />
        <meta property="og:description" content="Easedementia provides innovative solutions and compassionate support for individuals with dementia and their caregivers. Join us in enhancing the well-being and quality of life for those affected worldwide." />
        <meta property="og:image" content="https://d2mzeyyrjif26w.cloudfront.net/assets/images/favicon.png" />
        <meta property="og:url" content="https://easedementia.com/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Easedementia - Global Dementia Support & Assistance" />
        <meta name="twitter:description" content="Join us in revolutionizing dementia care and support." />
        <meta name="twitter:image" content="https://d2mzeyyrjif26w.cloudfront.net/assets/images/favicon.png" />

        {/* Favicon */}
        <link rel="icon" href="https://d2mzeyyrjif26w.cloudfront.net/assets/images/favicon.png" type="image/png" />

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