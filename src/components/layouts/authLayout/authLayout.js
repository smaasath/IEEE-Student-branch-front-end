"use client";
import React from 'react'
import './authLayout.css'
import Image from 'next/image'
import logo from '../../../../public/images/logo.png'
import signIn from '../../../../public/images/sign-in.png'


const AuthLayout = ({ children }) => {
    return (
        <div className='container-fluid'>
            <div className='row mt-5'>
                <div className='col-md-6 d-none d-md-block  p-5'>
                    <div className='d-flex align-items-start'>
                        <Image src={logo} className='logo-image w-25 img-fluid' />
                    </div>
                    <div className='d-flex align-items-start mt-5 text-third'>
                        <h1>IEEE Student Branch</h1>
                    </div>
                    <div className='d-flex align-items-start mt-1 text-third'>
                        <h6>Uva Wellassa University Of Sri Lanka</h6>
                    </div>
                    <div className='d-flex align-items-start mt-5 w-75 text-third'>
                        <p>The IEEE Student Branch System provides students with opportunities for technical development, networking, and innovation in engineering fields</p>
                    </div>
                    <div className='d-flex align-items-end justify-content-end  mt-3 text-end'>
                        <Image src={signIn} className='w-50 img-fluid' />
                    </div>
                </div>
                <div className='col-md-6 container p-5 row justify-content-md-end  justify-content-center'>
                    <div className=' d-block d-md-none d-flex align-items-center text-center justify-content-center mb-5'>
                        <Image src={logo} className='logo-image w-50 img-fluid' />
                    </div>
                    <div className='bg-white d-flex flex-column sign-in-container ps-4 pe-4 pt-5 pb-5'>
                        <div>
                            {children}
                        </div>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default AuthLayout
