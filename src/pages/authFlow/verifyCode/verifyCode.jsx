import React, { useEffect, useState } from 'react'
import AuthLayout from '../../../components/layouts/authLayout/authLayout'
import CommonButton from '../../../components/common/commonButton/commonButton'
import { Link, useNavigate, useParams } from 'react-router-dom'
import back from '../../../assets/icons/Back.png'

const VerifyCode = () => {
    const [param, setParam] = useState()
    const navigate = useNavigate();
    let { type } = useParams();
    useEffect(() => {
        if (!(type == 'forgot' || type == 'signup')) {
            navigate('/*')
        } else if (type == 'forgot') {
            setParam('/forgot-password/change-password')
        } else if (type == 'signup') {
            setParam('/dashboard')
        }
    }, [])

    function verifyCode() {
        navigate(param)
    }

    return (
        <AuthLayout type={'VERIFY'}>
            <div className='d-flex w-100 justify-content-between align-items-start'>
                <div className='d-flex flex-column '>
                    <div className=''>
                        <Link to={type == 'signup' ? '/sign-up' : '/forgot-password'} className="nav-link d-flex align-items-center text-center justify-content-center "><div><img src={back} className='img-fluid' style={{ width: 22 }} /></div><div className='h6 m-0'></div></Link>
                    </div>
                </div>
            </div>

            <div className='mt-5'>
                <div className='h5 fw-bold'>Verify code</div>
                <div className='h6 text-secondary'>An authentication code has been sent to your email.</div>
            </div>
            <div className='mt-5'>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label text-dark">Enter your code</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="enter code" />
                </div>
            </div>
            <div className='mt-3'>
                <span>Didn’t receive a code? <span className='text-cl-primary'>Resend</span></span>
            </div>
            <div className='mt-5 w-100 mb-3'>
                <CommonButton text={"Verify"} onClick={() => verifyCode()} />
            </div>
        </AuthLayout>
    )
}

export default VerifyCode
