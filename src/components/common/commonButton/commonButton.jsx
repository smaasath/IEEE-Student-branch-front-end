import React, { useState } from 'react'

const CommonButton = ({ text, onClick, close }) => {

    return (
        <button onClick={onClick} style={{ height: 45 }} className={`d-flex align-items-center justify-content-center w-100 text-center rounded-3 ps-4 pe-4 ${close ? "bg-transparent border-1 border-opacity-75 text-black-50":"bag-primary border-0 text-white"} `}>
            <div>

                <h6 className='m-0 '>{text}</h6>
            </div>
        </button>
    )
}

export default CommonButton
