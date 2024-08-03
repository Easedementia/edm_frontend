import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
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


function App() {
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
        <Routes>
          <Route path='/' element={<UserHomePage/>} />
          <Route path='/signup' element={<UserSignupPage/>} />
          <Route path='/login' element={<UserLoginPage/>} />
          <Route path='/about' element={<AboutUsPage/>} />
          <Route path='/services' element={<ServicesPage/>} />
          <Route path='/contact' element={<ContactUsPage/>} />
          <Route path='/doctor-consulting' element={<DoctorConsulting/>} />
          <Route path='/doctor-consulting/doctor-details/:id' element={<DoctorDetails/>} />

          <Route path='/admin-login' element={<AdminLoginPage/>} />
          <Route path='/admin-dashboard' element={<AdminDashboard/>} />
          <Route path='/admin-dashboard/user-list' element={<AdminUserList/>} />
          <Route path='/admin-dashboard/admin-services' element={<AdminServicesPage/>} />
          <Route path='/admin-dashboard/doctor-consulting' element={<AdminDoctorConsulting/>} />
          <Route path='/admin-dashboard/add-doctor' element={<AddDoctor/>} />
          <Route path='/admin-dashboard/edit-doctor/:id' element={<EditDoctor/>} />
          <Route path='/admin-dashboard/add-timeslot' element={<AddTimeslot/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
