import AboutUsBanner from "../Components/AboutUs/AboutUsBanner"
import AboutUsBannerImage from "../Components/AboutUs/AboutUsBannerImage"
import MeetOurTeam from "../Components/AboutUs/MeetOurTeam"
import OurValues from "../Components/AboutUs/OurValues"
import VisionMission from "../Components/AboutUs/VisionMission"
import Footer from "../Components/Footer/Footer"
import UserNavbar from "../Components/Navbar/UserNavbar"
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
    <Footer/>
    </>
  )
}

export default AboutUsPage