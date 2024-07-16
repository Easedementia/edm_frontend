import UserNavbar from "../Components/Navbar/UserNavbar"
import Footer from "../Components/Footer/Footer"
import GlobalStyle from "../Styles/GlobalStyles"
import ServicesBanner from "../Components/Services/ServicesBanner"
import ServicesBannerImage from "../Components/Services/ServicesBannerImage"
import ServicesList from "../Components/Services/ServicesList"
import ServiceListing from '../Components/UserHomePage/ServiceListing'

const ServicesPage = () => {
  return (
    <>
    <GlobalStyle/>
    <UserNavbar/>
    <ServicesBanner/>
    <ServicesBannerImage/>
    <ServicesList/>
    <ServiceListing/>
    <Footer/>
    </>
    
  )
}

export default ServicesPage