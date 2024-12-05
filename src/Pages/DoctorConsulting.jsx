import { useRef } from "react"
import ConsultingBanner from "../Components/DoctorConsulting/ConsultingBanner"
import ConsultingOptions from "../Components/DoctorConsulting/ConsultingOptions"
import DoctorsList from "../Components/DoctorConsulting/DoctorsList"
import Footer from "../Components/Footer/Footer"
import UserNavbar from "../Components/Navbar/UserNavbar"
import GlobalStyle from "../Styles/GlobalStyles"
import CallButton from "../Components/CallUs/CallButton"
import WhatsappButton from "../Components/WhatsappChat/WhatsappButton"


const DoctorConsulting = () => {
  const doctorsListRef = useRef(null);

  const ScrollToDoctorsList = () => {
    doctorsListRef.current?.scrollIntoView({behaviour: 'smooth'});
  };


  return (
    <>
    <GlobalStyle/>
    <UserNavbar/>
    <ConsultingBanner ScrollToDoctorsList={ScrollToDoctorsList} />
    <ConsultingOptions/>
    <div ref={doctorsListRef} >
      <DoctorsList/>
    </div>
    <CallButton/>
    <WhatsappButton/>
    <Footer/>
    </>
  )
}

export default DoctorConsulting