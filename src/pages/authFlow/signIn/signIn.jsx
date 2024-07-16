import { Link, useNavigate } from "react-router-dom";
import CommonButton from "../../../components/common/commonButton/commonButton";
import AuthLayout from "../../../components/layouts/authLayout/authLayout";
import { useDispatch } from "react-redux";
import { userLogin } from "../../../redux/actions/user";
import React, { useEffect, useState } from 'react';
import { EmailValidation } from "../../../utils/valitations/Valitation";




export default function SignIN() {

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    other: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: "" }));
  };


  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()
  const dispatch = useDispatch()
  function login() {
    setError({
      email: "",
      password: "",
      other: "",
    });

    if (!EmailValidation(formData.email)) {
      setError({
        ...error,
        email: "Email is not valid",
      });
      return
    }

    if (formData.password == '') {
      setError({
        ...error,
        password: "Password is required",
      });
      return
    }

    setLoading(true);
    dispatch(
      userLogin(formData, (res) => {
        if (res.status == 200) {
          setLoading(false)
          navigate('/dashboard')
        } else {
          setLoading(false)
          setError({
            ...error,
            other: "invalid email or password",
          });
        }

      })
    )



  }
  return (
    <AuthLayout type={'SIGNIN'}>
      <div className='d-flex w-100 justify-content-between align-items-start'>
        <div className='d-flex flex-column '>
          <div>
            <span className='h6'>Welcome to </span><span className='h6 text-cl-primary fw-bold'>IEEE</span>
          </div>
          <div className='mt-4'>
            <h1>Sign in</h1>
          </div>
        </div>
        <div className='d-flex flex-column '>
          <div>
            <span className='p text-secondary'>No Account ?</span>
          </div>
          <div className=''>
            <Link to={`/sign-up`} className="nav-link"><p className='text-cl-primary'>Sign Up</p></Link>
          </div>
        </div>
      </div>

      <div className='mt-5'>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label text-dark">Enter your email address</label>
          <input type="email" className={`form-control ${error.email != '' ? "is-invalid" : ""}`} name='email' onChange={handleInputChange} id="exampleFormControlInput1" placeholder="enter email" />
          <div class="invalid-feedback">
            {error.email}
          </div>
        </div>
      </div>

      <div className='mt-3'>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label text-dark">Enter your Password</label>
          <input type="password" className={`form-control ${error.password != '' ? "is-invalid" : ""}`} name='password' onChange={handleInputChange} id="exampleFormControlInput1" placeholder="Password" />
          <div class="invalid-feedback">
            {error.password}
          </div>
        </div>
      </div>

      <div className='mt-3 w-100 d-flex justify-content-end'>
        <Link to={`/forgot-password`} className="nav-link"><h6 className='text-cl-primary'>Forgot Password?</h6></Link>
      </div>

      <div className="text-center text-danger">
        {error.other}
      </div>
      <div className='mt-5 w-100 mb-3'>
        <CommonButton load={loading}  text={"Sign In"} onClick={() => login()} />
      </div>
    </AuthLayout>

  );
}
