import React from 'react'
import AuthLayout from '../../../components/layouts/authLayout/authLayout'
import back from '../../../assets/icons/Back.png'
import CommonButton from '../../../components/common/commonButton/commonButton'
import { Link, useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
    const navigate = useNavigate()
    function sendCode() {
        navigate('/verify-code/forgot')
    }
  return (
    <AuthLayout type={'FORGOT'}>
    <div className='d-flex w-100 justify-content-between align-items-start'>
      <div className='d-flex flex-column '>
        <div className=''>
          <Link to={`/`} className="nav-link d-flex align-items-center text-center justify-content-center "><div><img src={back} className='img-fluid' style={{ width: 22 }} /></div><div className='h6 m-0'></div></Link>
        </div>
      </div>
    </div>

    <div className='mt-5'>
      <div className='h5 fw-bold'>Forgot your password?</div>
      <div className='h6 text-secondary'>Don’t worry, happens to all of us. Enter your email below to recover your password</div>
    </div>
    <div className='mt-5'>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label text-dark">Enter your email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="enter email" />
      </div>
    </div>
    <div className='mt-5 w-100 mb-3'>
      <CommonButton text={"Submit"} onClick={() => sendCode()} />
    </div>
  </AuthLayout>
  )
}

export default ForgotPassword
