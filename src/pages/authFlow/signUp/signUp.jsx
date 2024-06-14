import React from 'react'
import AuthLayout from '../../../components/layouts/authLayout/authLayout'
import { Link, useNavigate } from "react-router-dom";
import CommonButton from '../../../components/common/commonButton/commonButton';


const SignUp = () => {
  const navigate = useNavigate()
  function signUP() {
    navigate('/verify-code/signup')
  }
  return (
    <AuthLayout type={'SIGNUP'}>
      <div className='d-flex w-100 justify-content-between align-items-start'>
        <div className='d-flex flex-column '>
          <div>
            <span className='h6'>Welcome to </span><span className='h6 text-cl-primary fw-bold'>IEEE</span>
          </div>
          <div className='mt-4'>
            <h1>Sign up</h1>
          </div>
        </div>
        <div className='d-flex flex-column '>
          <div>
            <span className='p text-secondary'>Have an Account ?</span>
          </div>
          <div className=''>
            <Link to={`/`} className="nav-link"><p className='text-cl-primary'>Sign in</p></Link>
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label text-dark">Enter your email address (Eg: cst2****1@std.uwu.ac.lk)</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="enter email" />
        </div>
      </div>

      <div className='mt-3 gap-3 d-flex justify-content-between align-items-center '>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label text-dark">First name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="first name" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label text-dark">Last name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="last name" />
        </div>
      </div>

      <div className='mt-3 d-flex gap-3 justify-content-between align-items-center '>
        <div className="mb-3 w-50">
          <label for="exampleFormControlInput1" className="form-label text-dark">Academic Year</label>
          <select className="form-select w-100" aria-label="Large select example">
            <option selected>select year</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label text-dark">Contact No</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="contact no" />
        </div>
      </div>

      <div className='mt-3'>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label text-dark">Enter your password</label>
          <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="enter password" />
        </div>
      </div>
      <div className='mt-5 w-100 mb-3'>
        <CommonButton text={"Sign Up"} onClick={() => signUP()} />
      </div>
    </AuthLayout>
  )
}

export default SignUp
