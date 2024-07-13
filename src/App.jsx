import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import Payment from './pages/Payment/Payment'
import ContactUs from './pages/ContactUs/ContactUs'
import Workout from './pages/Workout/Workout'
import Standards from './pages/Standards/Standards'
import Calendar from './pages/Calendar/Calendar'
import Dashboard from './pages/Dashboard/Dashboard'
import Profile from './pages/Profile/Profile'
import AthleteProfile from './pages/AthleteProfile/AthleteProfile'
import History from './pages/History/History'
import Preferences from './pages/Preferences/Preferences'
import Leaderboard from './pages/Leaderboard/Leaderboard'
import Ranking from './pages/Ranking/Ranking'
import Information from './pages/Information/Information'
import Premios from './pages/Premios/Premios'
import StripeScreen from './pages/Payment/StripeScreen'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/premios' element={<Premios />} />
        <Route path='/workout' element={<Workout />} />
        <Route path='/standards' element={<Standards />} />
        <Route path='/calendar' element={<Calendar />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/athleteprofile' element={<AthleteProfile />} />
        <Route path='/history' element={<History />} />
        <Route path='/preferences' element={<Preferences />} />
        <Route path='/leaderboard' element={<Leaderboard />} />
        <Route path='/ranking' element={<Ranking />} />
        <Route path='/information' element={<Information />} />
        <Route path='/stripe' element={<StripeScreen />} />
      </Routes>
      
    </div>
  )
}

export default App