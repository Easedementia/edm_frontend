import { useRef } from "react"
import AssessmentHomeBanner from "../Components/Assessment/AssessmentHomeBanner"
import AssessmentOptions from "../Components/Assessment/AssessmentOptions"
import CallButton from "../Components/CallUs/CallButton"
import Footer from "../Components/Footer/Footer"
import UserNavbar from "../Components/Navbar/UserNavbar"
import WhatsappButton from "../Components/WhatsappChat/WhatsappButton"
import GlobalStyle from "../Styles/GlobalStyles"
import { Helmet } from "react-helmet-async"


const AssessmentHomePage = () => {
  const optionsRef = useRef(null);

  const scrollToOptions = () => {
    if (optionsRef.current) {
      optionsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Online Dementia Assessment | Self & First-Person Cognitive Tests</title>
        <meta name="description" content="Evaluate cognitive health with our online dementia assessments. Take a self-assessment or an informant interview to assess dementia-related changes."/>
        <meta name="keywords" content="dementia assessment, online dementia test, self-assessment for dementia, cognitive health test, informant interview, dementia screening, dementia test"/>
        <meta name="author" content="Ease Dementia Technologies Pvt Ltd"/>
        <meta name="robots" content="index, follow"/>

        
        <meta property="og:title" content="Online Dementia Assessment | Self & First-Person Cognitive Tests"/>
        <meta property="og:description" content="Evaluate cognitive health with our online dementia assessments. Take a self-assessment or an informant interview to assess dementia-related changes."/>
        <meta property="og:image" content="https://d2mzeyyrjif26w.cloudfront.net/assets/images/assessmentpage_banner_compressed.png"/>
        <meta property="og:url" content="https://easedementia.com/assessment"/>
        <meta property="og:type" content="website"/>

        
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content="Online Dementia Assessment | Self & First-Person Cognitive Tests"/>
        <meta name="twitter:description" content="Check cognitive health with Ease Dementia’s online assessments. Start a self-assessment or an informant interview today."/>
        <meta name="twitter:image" content="https://d2mzeyyrjif26w.cloudfront.net/assets/images/assessmentpage_banner_compressed.png"/>
        <meta name="twitter:url" content="https://easedementia.com/assessment"/>

        
        <link rel="canonical" href="https://easedementia.com/assessment"/>
        <link rel="icon" href="https://d2mzeyyrjif26w.cloudfront.net/assets/images/favicon.png" type="image/png" />
      </Helmet>
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