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

          <Route path='/admin-login' element={<AdminLoginPage/>} />
          <Route path='/admin-dashboard' element={<AdminDashboard/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
