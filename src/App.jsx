import React from 'react';
import './App.css';
import { Route, Routes, } from 'react-router-dom';
import DashboardLayout from './components/layouts/dashboardLayout/dashboardLayout';
import ExcomLandingPage from './pages/excomFLow/excomLandingPage/excomLandingPage';
import SignIN from './pages/authFlow/signIn/signIn';
import SignUp from './pages/authFlow/signUp/signUp';
import VerifyCode from './pages/authFlow/verifyCode/verifyCode';
import ForgotPassword from './pages/authFlow/forgotPassword/forgotPassword';
import ChangePassword from './pages/authFlow/changePassword/changePassword';
import NotFound from './pages/notFound/notFound';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignIN />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='*' element={<NotFound/>}/>
        <Route path='/verify-code/:type' element={<VerifyCode />} />
        <Route path='/forgot-password' element={<ForgotPassword/>} />
        <Route path='/forgot-password/change-password' element={<ChangePassword/>} />
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route path='executive-committee' element={<ExcomLandingPage />} />
          <Route path='' element={<h1>not fouend</h1>}></Route>
          <Route path='*' element={<NotFound/>}>
          </Route>
        </Route>
      </Routes>
    </>

  );
}

export default App;
