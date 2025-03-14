import { Helmet } from "react-helmet-async"
import AboutUsBanner from "../Components/AboutUs/AboutUsBanner"
// import AboutUsBannerImage from "../Components/AboutUs/AboutUsBannerImage"
import Gallery from "../Components/AboutUs/Gallery"
import MeetOurTeam from "../Components/AboutUs/MeetOurTeam"
import OurValues from "../Components/AboutUs/OurValues"
import VisionMission from "../Components/AboutUs/VisionMission"
import CallButton from "../Components/CallUs/CallButton"
import Footer from "../Components/Footer/Footer"
import UserNavbar from "../Components/Navbar/UserNavbar"
import WhatsappButton from "../Components/WhatsappChat/WhatsappButton"
import GlobalStyle from "../Styles/GlobalStyles"
// import { Helmet } from "react-helmet-async";


const AboutUsPage = () => {
  return (
    <>
    <Helmet>
    <title>About Us | Easedementia - Transforming Dementia Care</title>
    <meta name="description" content="Discover Easedementia's mission to revolutionize dementia care with compassion, connection, and innovation. Learn about our vision, values, and dedicated team."/>
    <meta name="keywords" content="Easedementia, dementia care, dementia support, elderly care, active aging, senior care, memory care, caregiver support, Alzheimer's care"/>
    <meta name="author" content="Easedementia Technologies Pvt Ltd"/>
    <meta name="robots" content="index, follow"/>

    
    <meta property="og:type" content="website"/>
    <meta property="og:url" content="https://easedementia.com/about"/>
    <meta property="og:title" content="About Us | Easedementia - Transforming Dementia Care"/>
    <meta property="og:description" content="Discover Easedementia's mission to revolutionize dementia care with compassion, connection, and innovation. Learn about our vision, values, and dedicated team."/>
    <meta property="og:image" content="https://d2mzeyyrjif26w.cloudfront.net/assets/images/aboutusbanner_compressed.png"/>

    
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="twitter:url" content="https://easedementia.com/about"/>
    <meta name="twitter:title" content="About Us | Easedementia - Transforming Dementia Care"/>
    <meta name="twitter:description" content="Discover Easedementia's mission to revolutionize dementia care with compassion, connection, and innovation. Learn about our vision, values, and dedicated team."/>
    <meta name="twitter:image" content="https://d2mzeyyrjif26w.cloudfront.net/assets/images/aboutusbanner_compressed.png"/>

    <link rel="icon" type="image/png" href="https://d2mzeyyrjif26w.cloudfront.net/assets/images/favicon.png"></link>

    </Helmet>
    <GlobalStyle/>
    <UserNavbar/>
    <AboutUsBanner/>
    {/* <AboutUsBannerImage/> */}
    <VisionMission/>
    <OurValues/>
    <MeetOurTeam/>
    <Gallery/>
    <CallButton/>
    <WhatsappButton/>
    <Footer/>
    </>
  )
}

export default AboutUsPage