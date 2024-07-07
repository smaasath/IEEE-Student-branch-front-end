import React, { useState } from 'react'

const CommonButton = ({ text, onClick, close, width, load }) => {

    return (
        <button onClick={onClick} disabled={load} className={`d-flex align-items-center justify-content-center text-center rounded-3 ps-4 pe-4 ${close ? "bg-transparent border-1 border-opacity-75 text-black-50" : "bag-primary border-0 text-white"} `} style={{ height: 45, width: width ? width : '100%' }}>
            <div>
                {
                    load ? (
                        <div className="d-flex justify-content-center ps-2 pe-2">
                            <div className={`spinner-border text-white`} role="status">
                            </div>
                        </div>
                    ) : (<h6 className='m-0 '>{text}</h6>)
                }

            </div>
        </button>
    )
}

export default CommonButton
