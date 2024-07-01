import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import UserHomePage from './Pages/UserHomePage'


function App() {
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<UserHomePage/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
