import React from 'react';
import './App.css';
import { Route, Routes, } from 'react-router-dom';
import DashboardLayout from './components/layouts/dashboardLayout/dashboardLayout';
import ExcomLandingPage from './pages/excomFLow/excomLandingPage/excomLandingPage';
import ExecutiveCommitteePage from './pages/excomFLow/executiveCommitteePage/executiveCommitteePage';
import SignIN from './pages/authFlow/signIn/signIn';
import SignUp from './pages/authFlow/signUp/signUp';
import VerifyCode from './pages/authFlow/verifyCode/verifyCode';
import ForgotPassword from './pages/authFlow/forgotPassword/forgotPassword';
import ChangePassword from './pages/authFlow/changePassword/changePassword';
import NotFound from './pages/notFound/notFound';
import FinanceLanding from './pages/financeFlow/financeLanding/financeLanding';
import Proposal from './pages/financeFlow/proposal/proposal';
import ReportPage from './pages/financeFlow/reportPage/reportPage';
import ProjectLandingPage from './pages/projectFlow/projectLandingPage/projectLandingPage';
import TimeLinePage from './pages/projectFlow/timeLinePage/timeLinePage';
import ProjectPage from './pages/projectFlow/projectPage/projectPage';
import ProjectFinanceLanding from './pages/projectFlow/finance/projectFinanceLanding/projectFinanceLanding';
import ServiceLanding from './pages/serviceFlow/serviveLandingPage/serviveLandingPage';
import Volunteering from './pages/serviceFlow/VolunteeringPage/VolunteeringPage';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<SignIN />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/verify-code/:type' element={<VerifyCode />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/forgot-password/change-password' element={<ChangePassword />} />
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route path='executive-committee' element={<ExcomLandingPage />} />
          <Route path='executiveCommitteePage' element={<ExecutiveCommitteePage />} />
          <Route path='project'>
            <Route path='' element={<ProjectLandingPage />} />
            <Route path='time-line' element={<TimeLinePage />} />
            <Route path=':id'  >
              <Route path='' element={<ProjectPage />} />
              <Route path='finance' element={<ProjectFinanceLanding />} />
            </Route>
          </Route>
          <Route path='finance'>
            <Route path='' element={<FinanceLanding />} />
            <Route path='proposal' element={<Proposal />} />
            <Route path='report' element={<ReportPage />} />
          </Route>
          <Route path='service'>
            <Route path='' element={<ServiceLanding/>} />
            <Route path='volunteering' element={<Volunteering />} />
          </Route>
          <Route path='*' element={<NotFound />}>
          </Route>
        </Route>
      </Routes>
    </>

  );
}

export default App;
