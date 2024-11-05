import AssessmentHomeBanner from "../Components/Assessment/AssessmentHomeBanner"
import AssessmentOptions from "../Components/Assessment/AssessmentOptions"
import Footer from "../Components/Footer/Footer"
import UserNavbar from "../Components/Navbar/UserNavbar"
import GlobalStyle from "../Styles/GlobalStyles"


const AssessmentHomePage = () => {
  return (
    <div style={{ backgroundColor: '#f9f9f9'}}>
    <GlobalStyle/>
    <UserNavbar />
    <AssessmentHomeBanner />
    <AssessmentOptions />
    <Footer />
  </div>
  )
}

export default AssessmentHomePage