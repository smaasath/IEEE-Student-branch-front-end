import React from 'react'
import notfound from '../../assets/images/notfound.svg'
const NotFound = () => {
  return (
    <div className='d-flex align-items-center mt-5 justify-content-center w-100'>
      <img src={notfound} className='w-75 img-fluid'></img>
    </div>
  )
}

export default NotFound
