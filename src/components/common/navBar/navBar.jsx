import React from 'react'
import './navBar.css'
const CommonNavBar = ({ children }) => {
    return (
        <div className="navbar m-0 navbar-expand-lg body-bag-primary main-navbar sticky-top fixed-top">
            <div className="container-fluid d-flex align-items-center">
                {children}
            </div>
        </div>
    )
}

export default CommonNavBar
