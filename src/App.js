import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import ForgotPassword from './Pages/ForgotPassword'
import Profile from './Pages/Profile'
import Offers from './Pages/Offers'
import SignIn from './Pages/SignIn'
import Signup from './Pages/Signup'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/forgotpassword' element={<ForgotPassword/>}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/offers' element={<Offers />}/>
          <Route path='/signin' element={<SignIn />}/>
          <Route path='/signup' element={<Signup />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
