import React from 'react'
import enter from '../../../assets/icons/note.png'
import deleted from '../../../assets/icons/delete.png'


const CommonNoteContainer = () => {
    return (
        <div className='bg-white d-flex flex-column common-shadow rounded-3 p-3' style={{ width: 300 }}>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='d-flex gap-3'>
                    <div className='d-flex justify-content-center'>
                        <div>
                            <img src={enter} width={15} className='text-center' />
                        </div>

                    </div>
                    <div className=''>
                        <p className='m-0 text-secondary'>Apr 2, 2023</p>
                    </div>
                </div>
                <button className='bg-transparent border-0'>
                    <img src={deleted} width={25} />
                </button>
            </div>
            <div className='mt-3'>
                <h6 style={{ color: "#4F4F4F" }}>ChatGPT Tricks for business marketing</h6>
            </div>
            <div className=''>
                <p style={{ color: "#9999" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dui mi. Fusce varius bibendum ante, non lacinia. Fall usasc ce variu slorem ipsum dolor sit amet</p>
            </div>
        </div>
    )
}

export default CommonNoteContainer
