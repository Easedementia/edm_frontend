import AssessmentHomeBanner from "../Components/Assessment/AssessmentHomeBanner"
import AssessmentOptions from "../Components/Assessment/AssessmentOptions"
import CallButton from "../Components/CallUs/CallButton"
import Footer from "../Components/Footer/Footer"
import UserNavbar from "../Components/Navbar/UserNavbar"
import WhatsappButton from "../Components/WhatsappChat/WhatsappButton"
import GlobalStyle from "../Styles/GlobalStyles"


const AssessmentHomePage = () => {
  return (
    <div>
    <GlobalStyle/>
    <UserNavbar />
    <AssessmentHomeBanner />
    <AssessmentOptions />
    <CallButton/>
    <WhatsappButton/>
    <Footer />
  </div>
  )
}

export default AssessmentHomePage