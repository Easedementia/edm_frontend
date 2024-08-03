import ConsultingBanner from "../Components/DoctorConsulting/ConsultingBanner"
import ConsultingOptions from "../Components/DoctorConsulting/ConsultingOptions"
import DoctorsList from "../Components/DoctorConsulting/DoctorsList"
import Footer from "../Components/Footer/Footer"
import UserNavbar from "../Components/Navbar/UserNavbar"
import GlobalStyle from "../Styles/GlobalStyles"


const DoctorConsulting = () => {
  return (
    <>
    <GlobalStyle/>
    <UserNavbar/>
    <ConsultingBanner/>
    <ConsultingOptions/>
    <DoctorsList/>
    <Footer/>
    </>
  )
}

export default DoctorConsulting