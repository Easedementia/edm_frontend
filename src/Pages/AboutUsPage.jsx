import AboutUsBanner from "../Components/AboutUs/AboutUsBanner"
import AboutUsBannerImage from "../Components/AboutUs/AboutUsBannerImage"
import Gallery from "../Components/AboutUs/Gallery"
import MeetOurTeam from "../Components/AboutUs/MeetOurTeam"
import OurValues from "../Components/AboutUs/OurValues"
import VisionMission from "../Components/AboutUs/VisionMission"
import CallButton from "../Components/CallUs/CallButton"
import Footer from "../Components/Footer/Footer"
import UserNavbar from "../Components/Navbar/UserNavbar"
import WhatsappButton from "../Components/WhatsappChat/WhatsappButton"
import GlobalStyle from "../Styles/GlobalStyles"


const AboutUsPage = () => {
  return (
    <>
    <GlobalStyle/>
    <UserNavbar/>
    <AboutUsBanner/>
    <AboutUsBannerImage/>
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