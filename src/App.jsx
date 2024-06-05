import React from 'react';
import './App.css';
import { Route, Routes, } from 'react-router-dom';
import DashboardLayout from './components/layouts/dashboardLayout/dashboardLayout';
import SignIN from './pages/signIn/signIn';
import ExcomLandingPage from './pages/excomFLow/excomLandingPage/excomLandingPage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignIN/>} />
        <Route path='/sign-up' element={<h1>not f  ound</h1>} />
        <Route path='/verify-code' element={<h1>not f  ound</h1>} />
        <Route path='/forgot-password' element={<h1>not f  ound</h1>} />
        <Route path='/forgot-password/change-password' element={<h1>not f  ound</h1>} />
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route path='executive-committee' element={<ExcomLandingPage />} />
          <Route path='*' element={<h1>not found</h1>}>
          </Route>
        </Route>
      </Routes>
    </>

  );
}

export default App;
