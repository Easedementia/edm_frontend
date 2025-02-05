import { useRef } from "react"
import AssessmentHomeBanner from "../Components/Assessment/AssessmentHomeBanner"
import AssessmentOptions from "../Components/Assessment/AssessmentOptions"
import CallButton from "../Components/CallUs/CallButton"
import Footer from "../Components/Footer/Footer"
import UserNavbar from "../Components/Navbar/UserNavbar"
import WhatsappButton from "../Components/WhatsappChat/WhatsappButton"
import GlobalStyle from "../Styles/GlobalStyles"


const AssessmentHomePage = () => {
  const optionsRef = useRef(null);

  const scrollToOptions = () => {
    if (optionsRef.current) {
      optionsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
    <GlobalStyle/>
    <UserNavbar />
    <AssessmentHomeBanner scrollToOptions={scrollToOptions} />
    <AssessmentOptions ref={optionsRef} />
    <CallButton/>
    <WhatsappButton/>
    <Footer />
  </div>
  )
}

export default AssessmentHomePage