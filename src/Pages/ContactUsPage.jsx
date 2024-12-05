import CallButton from "../Components/CallUs/CallButton"
import Address from "../Components/ContactUs/Address"
import ContactUsBanner from "../Components/ContactUs/ContactUsBanner" 
import FAQ from "../Components/ContactUs/FAQ"
import SocialMediaLinks from "../Components/ContactUs/SocialMediaLinks"
import Footer from "../Components/Footer/Footer"
import UserNavbar from "../Components/Navbar/UserNavbar"
import WhatsappButton from "../Components/WhatsappChat/WhatsappButton"
import GlobalStyle from "../Styles/GlobalStyles"  


const ContactUsPage = () => {
  return (
    <>
    <GlobalStyle/>
    <UserNavbar/>
    <ContactUsBanner/>
    <Address/>
    <div id="faq-section">
      <FAQ />
    </div>
    <SocialMediaLinks/>
    <CallButton/>
    <WhatsappButton/>
    <Footer/>
    </>
  )
}

export default ContactUsPage