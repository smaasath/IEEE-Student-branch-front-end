
import React from 'react'
import "./dashboardLayout.css";
import CommonNavBar from '../../common/navBar/navBar';
import SideBar from '../../common/sideBar/sideBar';
import { Outlet } from 'react-router-dom';



const DashboardLayout = () => {
    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-sm-2 navbar navbar-expand-sm sticky-top ps-2 pe-2 sidebar">
                    <div className="offcanvas offcanvas-start w-75" id="navbarSupportedContent">
                        <div className="offcanvas-header bg-third">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body bg-third">
                            <SideBar />
                        </div>
                    </div>
                </div>


                <div className="col-sm-10 body-bag-primary container-fluid m-0 p-0">
                    <CommonNavBar>
                        <button className="navbar-toggler btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon text-white"></span>
                        </button>
                    </CommonNavBar>
                    <div className="mt-4 p-3">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default DashboardLayout
