import React from 'react'
import enter from '../../../assets/icons/note.png'
import deleted from '../../../assets/icons/delete.png'
import myprofile from '../../../assets/images/testUser.png'


const CommonNoteContainer = () => {
    return (
        <div className='bg-white w-100 d-flex flex-column common-shadow rounded-3 p-3' style={{ width: 300 }}>
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
            <div className='mt-2'>
                <p style={{ color: "#4F4F4F" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id dui mi. Fusce varius bibendum ante, non lacinia. Fall usasc ce variu slorem ipsum dolor sit amet</p>
            </div>
            <div className=' d-flex justify-content-end align-items-center gap-2'>
                <div>
                    <p className='m-0' style={{fontSize:11, color:"#999999"}}>Mohamed Aasath</p>
                </div>
                <div className=''>
                    <img src={myprofile} height={25} width={25} style={{ borderRadius: 90 }} />
                </div>
            </div>
        </div>
    )
}

export default CommonNoteContainer
