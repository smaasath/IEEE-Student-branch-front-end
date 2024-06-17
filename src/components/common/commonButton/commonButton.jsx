import React, { useState } from 'react'

const CommonButton = ({ text, onClick, close,width }) => {

    return (
        <button onClick={onClick}  className={`d-flex align-items-center justify-content-center text-center rounded-3 ps-4 pe-4 ${close ? "bg-transparent border-1 border-opacity-75 text-black-50":"bag-primary border-0 text-white"} `} style={{ height: 45,width:width?width:'100%'}}>
            <div>

                <h6 className='m-0 '>{text}</h6>
            </div>
        </button>
    )
}

export default CommonButton
