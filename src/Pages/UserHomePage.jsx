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


const UserHomePage = () => {
  return (
    <>
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