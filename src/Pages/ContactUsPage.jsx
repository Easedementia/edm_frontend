import Address from "../Components/ContactUs/Address"
import ContactUsBanner from "../Components/ContactUs/ContactUsBanner" 
import FAQ from "../Components/ContactUs/FAQ"
import SocialMediaLinks from "../Components/ContactUs/SocialMediaLinks"
import Footer from "../Components/Footer/Footer"
import UserNavbar from "../Components/Navbar/UserNavbar"
import GlobalStyle from "../Styles/GlobalStyles"
import { useRef } from "react"


const ContactUsPage = () => {
  const faqRef = useRef(null);

  const scrollToFAQ = () => {
    faqRef.current?.scrollIntoView({ behavior: 'smooth'})
  }
  return (
    <>
    <GlobalStyle/>
    <UserNavbar/>
    <ContactUsBanner/>
    <Address/>
    <div ref={faqRef}>
      <FAQ />
    </div>
    <SocialMediaLinks/>
    <Footer scrollToFAQ={scrollToFAQ} />
    </>
  )
}

export default ContactUsPage