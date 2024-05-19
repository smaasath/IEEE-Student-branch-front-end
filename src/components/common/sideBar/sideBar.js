"use client"
import React from 'react'
import "./sideBar.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import dashboardIcon from '../../../../public/icons/dashboard-icon.png'
import eventicon from '../../../../public/icons/event-icon.png'
import financeicon from '../../../../public/icons/finance-icon.png'
import logouticon from '../../../../public/icons/logout-icon.png'
import projecticon from '../../../../public/icons/project-icon.png'
import settingsicon from '../../../../public/icons/settings-icon.png'

const SideBar = () => {

    const router = useRouter();
    const pathname = usePathname();
    const handleLogout = async (e) => {
        e.preventDefault();
        // logout();
        router.push('/');
    };
    const routes = [
        { name: "Dashboard", image: dashboardIcon, path: "dashboard/insights" },
        { name: "Events", image: eventicon, path: "dashboard/events" },
        { name: "Ex Com", image: dashboardIcon, path: "dashboard/executive-committee" },
        { name: "Project", image: projecticon, path: "dashboard/project" },
        { name: "Finance", image: financeicon, path: "dashboard/finance" },

    ];

    const routesOther = [
        { name: "Settings", image: settingsicon, path: "dashboard/setting" },
    ]
    return (
        <div className="d-flex flex-column flex-shrink-0 p-3 w-100 side-bar-body z-1 sticky-top mt-2">
            <div className="w-100 align-items-center align-content-center text-center">
                <Link href="/" className="text-decoration-none">
                    {/* <Image className="side-bar-logo" src="" loading="lazy" /> */}
                </Link>
            </div>
            <hr className='text-white' />
            <ul className="nav nav-pills flex-column mb-auto mt-4 gap-2">
                {routes.map((item, index) => {
                    return (
                        <div className="" key={index}>
                            <li className="nav-item">
                                <Link
                                    className={`nav-link ${pathname.startsWith(`/${item.path}`) ? "active" : ""
                                        }`}
                                    href={`/${item.path}`}
                                >
                                    <div className="d-flex gap-2 align-items-center">
                                        <div>
                                            <Image
                                                src={item.image}
                                                className="side-bar-icon"
                                                loading="lazy"
                                                alt='side bar icon'
                                            />
                                        </div>
                                        <div className="d-none d-lg-block item-lable">{item.name}</div>
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
                                    className={`nav-link ${pathname === `/${item.path}` ? "active" : ""
                                        }`}
                                    href={`/${item.path}`}
                                >
                                    <div className="d-flex gap-2 align-items-center">
                                        <div>
                                            <Image
                                                src={item.image}
                                                className="side-bar-icon"
                                                loading="lazy"
                                                alt='side bar icon'
                                            />
                                        </div>
                                        <div className="d-none d-lg-block item-lable">{item.name}</div>
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
