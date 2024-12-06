import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StartingScreen from './pages/StartingScreen'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import CaptainSignup2 from './pages/CaptainSignup2'
import Home from './pages/home'
import UserProtectWrapper from './pages/UserProtectWrapper'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<StartingScreen />}/>
        <Route path='/login' element={<UserLogin />}/>
        <Route path='/signup' element={<UserSignUp />}/>
        <Route path='/captainlogin' element={<CaptainLogin />}/>
        <Route path='/captainsignup' element={<CaptainSignUp/>}/>
        <Route path='/CaptainSignup2' element={<CaptainSignup2/>}/>
        <Route path='/Home' element={
          <UserProtectWrapper>
            <Home/>
          </UserProtectWrapper>
        }/>
      </Routes>
    </div>
  )
}

export default App
