import React from 'react'
import "./sideBar.css";
import dashboardIcon from '../../../assets/icons/dashboard-icon.png'
import eventicon from '../../../assets/icons/event-icon.png'
import financeicon from '../../../assets/icons/finance-icon.png'
import logouticon from '../../../assets/icons/logout-icon.png'
import projecticon from '../../../assets/icons/project-icon.png'
import settingsicon from '../../../assets/icons/settings-icon.png'
import serviceicon from '../../../assets/icons/Service.png'
import othericon from '../../../assets/icons/News.png'
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {
    const location = useLocation();
    const { pathname } = location;


    const routes = [
        { name: "Dashboard", image: dashboardIcon, path: "dashboard" },
        { name: "Events", image: eventicon, path: "dashboard/events" },
        { name: "Ex Com", image: dashboardIcon, path: "dashboard/executive-committee" },
        { name: "Project", image: projecticon, path: "dashboard/project" },
        { name: "Finance", image: financeicon, path: "dashboard/finance" },
        { name: "Service", image: serviceicon, path: "dashboard/service" },
        { name: "Other", image: othericon, path: "dashboard/other" },

    ];

    const routesOther = [
        { name: "Settings", image: settingsicon, path: "dashboard/setting" },
    ]
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 w-100 side-bar-body z-1 sticky-top mt-2" style={{zIndex:1000}}>
            <div className="w-100 align-items-center align-content-center text-center">
                <Link to="/dashboard" className="text-decoration-none">
                    <img className="side-bar-logo" src="" loading="lazy" />
                </Link>
            </div>
            <hr className='text-white' />
            <ul className="nav nav-pills flex-column mb-auto mt-4 gap-2">
                {routes.map((item, index) => {
                    return (
                        <div className="" key={index}>
                            <li className="nav-item">
                                <Link
                        
                                    className={`nav-link ${pathname == '/dashboard' && item.path == 'dashboard' ? 'active' : (pathname.startsWith(`/${item.path}`) && item.path != 'dashboard' ? "active" : "")
                                        }`}
                                    to={`/${item.path}`}
                                >
                                    <div className="d-flex gap-2 align-items-center">
                                        <div>
                                            <img
                                                src={item.image}
                                                className="side-bar-icon"
                                                loading="lazy"
                                                alt='side bar icon'
                                            />
                                        </div>
                                        <div className="d-lg-block text-white item-lable-text">{item.name}</div>
                                    </div>
                                </Link>
                            </li>
                        </div>
                    );
                })}
            </ul>
            <hr className='text-white' />
            <ul className="nav nav-pills flex-column mb-auto mt-4 gap-2">
                {routesOther.map((item, index) => {
                    return (
                        <div className="" key={index}>
                            <li className="nav-item">
                                <Link
                                //NavLink add 
                                    className={`nav-link ${pathname == '/dashboard' && item.path == 'dashboard' ? 'active' : (pathname.startsWith(`/${item.path}`) && item.path != 'dashboard' ? "active" : "")
                                        }`}
                                    to={`/${item.path}`}
                                >
                                    <div className="d-flex gap-2 align-items-center">
                                        <div>
                                            <img
                                                src={item.image}
                                                className="side-bar-icon"
                                                loading="lazy"
                                                alt='side bar icon'
                                            />
                                        </div>
                                        <div className="d-lg-block text-white item-lable-text">{item.name}</div>
                                    </div>
                                </Link>
                            </li>
                        </div>
                    );
                })}
            </ul>
        </div>
    )
}

export default SideBar
