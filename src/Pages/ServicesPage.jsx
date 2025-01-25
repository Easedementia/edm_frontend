import UserNavbar from "../Components/Navbar/UserNavbar"
import Footer from "../Components/Footer/Footer"
import GlobalStyle from "../Styles/GlobalStyles"
import ServicesBanner from "../Components/Services/ServicesBanner"
// import ServicesBannerImage from "../Components/Services/ServicesBannerImage"
import ServicesList from "../Components/Services/ServicesList"
import CallButton from "../Components/CallUs/CallButton"
import WhatsappButton from "../Components/WhatsappChat/WhatsappButton"
import ListServices from "../Components/Services/ListServices"

const ServicesPage = () => {
  return (
    <>
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