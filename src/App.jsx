import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import UserHomePage from './Pages/UserHomePage'
import AboutUsPage from './Pages/AboutUsPage'
import UserSignupPage from './Pages/UserSignupPage'
import { UserLoginPage } from './Pages/UserLoginPage'


function App() {
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<UserHomePage/>} />
          <Route path='/signup' element={<UserSignupPage/>} />
          <Route path='/login' element={<UserLoginPage/>} />
          <Route path='/about' element={<AboutUsPage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
