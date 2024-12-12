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