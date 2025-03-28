import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import ReactGA from 'react-ga4';
import UserHomePage from './Pages/UserHomePage'
import AboutUsPage from './Pages/AboutUsPage'
import UserSignupPage from './Pages/UserSignupPage'
import { UserLoginPage } from './Pages/UserLoginPage'
import ServicesPage from './Pages/ServicesPage'
import AdminLoginPage from './Pages/AdminLoginPage';
import AdminDashboard from './Pages/AdminDashboard';
import ContactUsPage from './Pages/ContactUsPage';
import DoctorConsulting from './Pages/DoctorConsulting';
import AdminUserList from './Pages/AdminUserList';
import AdminServicesPage from './Pages/AdminServicesPage';
import AdminDoctorConsulting from './Pages/AdminDoctorConsulting';
import AddDoctor from './Components/AdminSide/AddDoctor';
import EditDoctor from './Components/AdminSide/EditDoctor';
import AddTimeslot from './Components/AdminSide/AddTimeslot';
import DoctorDetails from './Components/DoctorDetails/DoctorDetails';
import BookingConfirmation from './Components/DoctorDetails/BookingConfirmation';
import BookingSuccessMessage from './Components/DoctorDetails/BookingSuccessMessage';
import AdminAppointmentDetails from './Pages/AdminAppointmentDetails';
import CreateMeet from './Components/DoctorConsulting/CreateMeet';
import UserProfile from './Components/UserProfile/UserProfile';
import AppointmentHistory from './Components/UserProfile/AppointmentHistory';
import AssessmentHistory from './Components/UserProfile/AssessmentHistory';
import OTPVerification from './Components/UserProfile/OTPVerification';
import AssessmentHomePage from './Pages/AssessmentHomePage';
import FirstPersonAssessment from './Components/Assessment/FirstPersonAssessment';
import FirstPersonInstructions from './Components/Assessment/FirstPersonInstructions';
import FirstPersonClientDetails from './Components/Assessment/FirstPersonClientDetails';
import FirstPersonUserDetails from './Components/Assessment/FirstPersonUserDetails';
import FirstPersonAssessmentResults from './Components/Assessment/FirstPersonAssessmentResults';
import FirstPersonAssessmentNewUser from './Components/Assessment/FirstPersonAssessmentNewUser';
import DoctorSignupPage from './Pages/DoctorSignupPage';
import TermsConditions from './Components/Footer/TermsConditions';
import PrivacyPolicy from './Components/Footer/PrivacyPolicy';
import ScrollToTop from './Components/ScrollToTop';
import Careers from './Components/Careers/Careers';
import SelfAssessmentInstructions from './Components/Assessment/SelfAssessmentInstructions';
import SelfAssessment from './Components/Assessment/SelfAssessment';
import { useEffect } from 'react';
import AdminAssessmentDetails from './Pages/AdminAssessmentDetails';







function App() {
  
  useEffect(() => {
    ReactGA.initialize("G-B7HR5N788W");
    ReactGA.send({ 
      hitType: "pageview", 
      page: window.location.pathname, 
      title: "App.jsx" });
  }, [])
  return (
    <div>
    <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    />
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<UserHomePage/>} />
          <Route path='/signup' element={<UserSignupPage/>} />
          <Route path='/verify-otp' element={<OTPVerification/>} />
          <Route path='/login' element={<UserLoginPage/>} />
          <Route path='/about' element={<AboutUsPage/>} />
          <Route path='/services' element={<ServicesPage/>} />
          <Route path='/contact' element={<ContactUsPage/>} />
          <Route path='/doctor-consulting' element={<DoctorConsulting/>} />
          <Route path='/doctor-consulting/doctor-details/:id' element={<DoctorDetails/>} />
          <Route path='/doctor-consulting/booking-confirmation/' element={<BookingConfirmation/>} />
          <Route path='/success' element={<BookingSuccessMessage/>} />
          <Route path='/create-meet' element={<CreateMeet/>} />
          <Route path='/user-profile' element={<UserProfile/>} />
          <Route path='/user-profile/appointments-history' element={<AppointmentHistory/>} />
          <Route path='/user-profile/assessment-history' element={<AssessmentHistory/>} />
          <Route path='/assessment' element={<AssessmentHomePage/>} />
          <Route path='/assessment/self-assessment' element={<SelfAssessment/>} />
          <Route path='/assessment/self-assessment-instructions' element={<SelfAssessmentInstructions/>} />
          <Route path='/assessment/first-person-assessment' element={<FirstPersonAssessment/>} />
          <Route path='/assessment/first-person-assessment-instructions' element={<FirstPersonInstructions/>} />
          <Route path='/assessment/first-person-assessment-client-details' element={<FirstPersonClientDetails/>} />
          <Route path='/assessment/first-person-assessment-user-details' element={<FirstPersonUserDetails/>} />
          <Route path='/assessment/first-person-assessment-results' element={<FirstPersonAssessmentResults/>} />
          <Route path='/assessment/first-person-assessment-new-user' element={<FirstPersonAssessmentNewUser/>} />
          <Route path='/terms-conditions' element={<TermsConditions/>} />
          <Route path='/privacy-policy' element={<PrivacyPolicy/>} />
          <Route path='/careers' element={<Careers/>} />
          

          

          <Route path='/admin-login' element={<AdminLoginPage/>} />
          <Route path='/admin-dashboard' element={<AdminDashboard/>} />
          <Route path='/admin-dashboard/user-list' element={<AdminUserList/>} />
          <Route path='/admin-dashboard/admin-services' element={<AdminServicesPage/>} />
          <Route path='/admin-dashboard/doctor-consulting' element={<AdminDoctorConsulting/>} />
          <Route path='/admin-dashboard/add-doctor' element={<AddDoctor/>} />
          <Route path='/admin-dashboard/edit-doctor/:id' element={<EditDoctor/>} />
          <Route path='/admin-dashboard/add-timeslot' element={<AddTimeslot/>} />
          <Route path='/admin-dashboard/appointment-details' element={<AdminAppointmentDetails/>} />
          <Route path='/admin-dashboard/assessment-details' element={<AdminAssessmentDetails/>} />

          <Route path='/doctor-signup' element={<DoctorSignupPage/>} />
        </Routes>
      </Router>
    </div>
    
    
  )
}

export default App
