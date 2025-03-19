import { useLocation } from "react-router-dom"
import CallButton from "../Components/CallUs/CallButton"
import Address from "../Components/ContactUs/Address"
import ContactUsBanner from "../Components/ContactUs/ContactUsBanner" 
import FAQ from "../Components/ContactUs/FAQ"
import SocialMediaLinks from "../Components/ContactUs/SocialMediaLinks"
import Footer from "../Components/Footer/Footer"
import UserNavbar from "../Components/Navbar/UserNavbar"
import WhatsappButton from "../Components/WhatsappChat/WhatsappButton"
import GlobalStyle from "../Styles/GlobalStyles"  
import { useEffect } from "react"
import { Helmet } from "react-helmet-async";


const ContactUsPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#faq") {
      const faqElement = document.getElementById("faq-section");
      if (faqElement) {
        faqElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
    <Helmet>
      <title>Contact Us | Ease Dementia - Dementia Care & Support</title>
      <meta name="description" content="Get in touch with Ease Dementia for dementia care services. Reach out to us for enquiries, support, and personalized care solutions."/>
      <meta name="keywords" content="contact Ease Dementia, dementia support, dementia care, dementia helpline, dementia consultation, caregiver support, dementia services, active aging, Easedementia, dementia care, dementia support, elderly care, active aging, senior care, memory care, caregiver support, Alzheimer's care, Elder Care, Dementia care, dementia and hallucinations, early signs of dementia in women, lewy body dementia, vascular dementia, early signs of dementia, signs of dementia, types of dementia, alzheimer's vs dementia, dementia age, dementia activities, about dementia disease, about dementia disease Alzheimer’s support, Caregiver assistance, Memory loss treatment, Active Aging, Home based interventions, Dementia Care in Kochi, Dementia Care in Ernakulam, Dementia Care in Thrissur, Dementia Care in Kottayam, Dementia Care in Kozhikode, Dementia, Parkinson's"/>
      <meta name="author" content="Ease Dementia Technologies Pvt Ltd"/>
      <meta name="robots" content="index, follow"/>

      
      <meta property="og:title" content="Contact Us | Ease Dementia - Dementia Care & Support"/>
      <meta property="og:description" content="Get in touch with Ease Dementia for dementia care services. Reach out to us for enquiries, support, and personalized care solutions."/>
      <meta property="og:image" content="https://d2mzeyyrjif26w.cloudfront.net/assets/images/contactusbanner_compressed.png"/>
      <meta property="og:url" content="https://easedementia.com/contact"/>
      <meta property="og:type" content="website"/>

    
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:title" content="Contact Us | Ease Dementia - Dementia Care & Support"/>
      <meta name="twitter:description" content="Need dementia care support? Contact Ease Dementia for expert guidance and assistance."/>
      <meta name="twitter:image" content="https://d2mzeyyrjif26w.cloudfront.net/assets/images/contactusbanner_compressed.png"/>
      <meta name="twitter:url" content="https://easedementia.com/contact"/>

      
      <link rel="canonical" href="https://easedementia.com/contact"/>
      <link rel="icon" href="https://d2mzeyyrjif26w.cloudfront.net/assets/images/favicon.png" type="image/png" />
    </Helmet>
    <GlobalStyle/>
    <UserNavbar/>
    {location.hash !== "#faq" && <ContactUsBanner />}
    <Address/>
    <FAQ id="faq-section" />
    <SocialMediaLinks/>
    <CallButton/>
    <WhatsappButton/>
    <Footer/>
    </>
  )
}

export default ContactUsPage