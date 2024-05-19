import React from 'react'
import './navBar.css'
const CommonNavBar = ({ children }) => {
    return (
        <nav class="navbar m-0 navbar-expand-lg body-primary main-navbar sticky-top">
            <div class="container-fluid d-flex align-items-center">
                {children}
            </div>
        </nav>
    )
}

export default CommonNavBar
