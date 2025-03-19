import { useRef } from "react"
import ConsultingBanner from "../Components/DoctorConsulting/ConsultingBanner"
import ConsultingOptions from "../Components/DoctorConsulting/ConsultingOptions"
import DoctorsList from "../Components/DoctorConsulting/DoctorsList"
import Footer from "../Components/Footer/Footer"
import UserNavbar from "../Components/Navbar/UserNavbar"
import GlobalStyle from "../Styles/GlobalStyles"
import CallButton from "../Components/CallUs/CallButton"
import WhatsappButton from "../Components/WhatsappChat/WhatsappButton"
import { Helmet } from "react-helmet-async";


const DoctorConsulting = () => {
  const doctorsListRef = useRef(null);

  const ScrollToDoctorsList = () => {
    doctorsListRef.current?.scrollIntoView({behaviour: 'smooth'});
  };


  return (
    <>
    <Helmet>
    <title>Doctor Consulting | Ease Dementia - Expert Dementia Care</title>
    <meta name="description" content="Consult experienced doctors specializing in dementia care at Ease Dementia. Get professional guidance and support for dementia-related concerns."/>
    <meta name="keywords" content="doctor consultation, dementia specialists, dementia care doctors, online doctor consultation, dementia expert, dementia treatment, geriatric counseling, Easedementia, dementia care, dementia support, elderly care, active aging, senior care, memory care, caregiver support, Alzheimer's care, Elder Care, Dementia care, dementia and hallucinations, early signs of dementia in women, lewy body dementia, vascular dementia, early signs of dementia, signs of dementia, types of dementia, alzheimer's vs dementia, dementia age, dementia activities, about dementia disease, about dementia disease Alzheimer’s support, Caregiver assistance, Memory loss treatment, Active Aging, Home based interventions, Dementia Care in Kochi, Dementia Care in Ernakulam, Dementia Care in Thrissur, Dementia Care in Kottayam, Dementia Care in Kozhikode, Dementia, Parkinson's"/>
    <meta name="author" content="Ease Dementia Technologies Pvt Ltd"/>
    <meta name="robots" content="index, follow"/>

    
    <meta property="og:title" content="Doctor Consulting | Ease Dementia - Expert Dementia Care"/>
    <meta property="og:description" content="Consult experienced doctors specializing in dementia care at Ease Dementia. Get professional guidance and support for dementia-related concerns."/>
    <meta property="og:image" content="https://d2mzeyyrjif26w.cloudfront.net/assets/images/doctorconsultingbanner.svg"/>
    <meta property="og:url" content="https://easedementia.com/doctor-consulting"/>
    <meta property="og:type" content="website"/>

    
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:title" content="Doctor Consulting | Ease Dementia - Expert Dementia Care"/>
    <meta name="twitter:description" content="Need expert dementia care? Consult our experienced doctors for guidance and treatment."/>
    <meta name="twitter:image" content="https://d2mzeyyrjif26w.cloudfront.net/assets/images/doctorconsultingbanner.svg"/>
    <meta name="twitter:url" content="https://easedementia.com/doctor-consulting"/>

    
    <link rel="canonical" href="https://easedementia.com/doctor-consulting"/>
    <link rel="icon" href="https://d2mzeyyrjif26w.cloudfront.net/assets/images/favicon.png" type="image/png" />
    </Helmet>
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