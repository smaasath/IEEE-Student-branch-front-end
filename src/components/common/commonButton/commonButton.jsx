import React, {useState} from 'react'

const CommonButton = ({ text, onClick }) => {

    return (
        <button onClick={onClick} style={{height:45}} className='d-flex align-items-center justify-content-center w-100 bag-primary text-center border-0 rounded-3'>
            <div>

                <h6 className=' m-0 text-white'>{text}</h6>
            </div>
        </button>
    )
}

export default CommonButton
