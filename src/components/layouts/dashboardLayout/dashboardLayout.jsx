


import React, { useEffect, useState } from 'react'
import "./dashboardLayout.css";
import CommonNavBar from '../../common/navBar/navBar';
import SideBar from '../../common/sideBar/sideBar';
import { Outlet } from 'react-router-dom';
import { getCurrentUser, logout } from '../../../redux/actions/user';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userData } from '../../../redux/reducers/userSlice';



const DashboardLayout = () => {

    const distpatch = useDispatch();
    const userdetails = useSelector((state) => state.user.userData);
    useEffect(() => {
        if (userdetails == null) {
            getCurrentUser((res) => {
                console.warn("status",res?.status)
                if (res?.status == 200) {
                    distpatch(userData(res?.data?.data))
                } else {
                    logout();
                    window.location.reload();
                }
            })
        }

    }, [])

    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-sm-2 navbar navbar-expand-sm sticky-top ps-2 pe-2 sidebar">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
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
