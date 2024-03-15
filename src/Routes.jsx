import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
function AppRoutes() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <LandingPage/> }></Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes
