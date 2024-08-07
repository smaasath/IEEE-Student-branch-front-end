import React, { useEffect, useMemo, useState } from "react";
import "./sideBar.css";
import dashboardIcon from "../../../assets/icons/dashboard-icon.png";
import eventicon from "../../../assets/icons/event-icon.png";
import financeicon from "../../../assets/icons/finance-icon.png";
import logouticon from "../../../assets/icons/logout-icon.png";
import projecticon from "../../../assets/icons/project-icon.png";
import settingsicon from "../../../assets/icons/settings-icon.png";
import serviceicon from "../../../assets/icons/Service.png";
import othericon from "../../../assets/icons/News.png";
import sbLogoWhite from "../../../assets/logo_white.png";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../../../redux/actions/user";

const SideBar = () => {
  const userData = useSelector((state) => state.user.userData);
  const location = useLocation();
  const { pathname } = location;
  const [routes, setRoutes] = useState([]);



    useEffect(() => {
        const isOtherAvailable = userData?.some(userRoleDetail =>
            userRoleDetail.role?.policies.some(policy => policy.policyCode === "OTHER")
          );

        const isExcomAvailable = userData?.some(userRoleDetail =>
            userRoleDetail.role?.policies.some(policy => policy.policyCode === "EXCOM")
          );


        const isFinanceAvailable = userData?.some(userRoleDetail =>
            userRoleDetail.role?.policies.some(policy => policy.policyCode === "FINANCE")
          );




    const updatedRoutes = [
      { name: "Events", image: eventicon, path: "dashboard", available: true },
      {
        name: "ExCom",
        image: dashboardIcon,
        path: "dashboard/executive-committee",
        available: isExcomAvailable,
      },
      {
        name: "Project",
        image: projecticon,
        path: "dashboard/project",
        available: true,
      },
      {
        name: "Finance",
        image: financeicon,
        path: "dashboard/finance",
        available: isFinanceAvailable,
      },
      {
        name: "Service",
        image: serviceicon,
        path: "dashboard/service",
        available: true,
      },
      {
        name: "Other",
        image: othericon,
        path: "dashboard/other",
        available: isOtherAvailable,
      },
    ];

    setRoutes(updatedRoutes);
  }, [userData]);

  const routesOther = [
    { name: "Settings", image: settingsicon, path: "dashboard/setting" },
    { name: "Logout", image: logouticon, path: "/", onClick: logout },
  ];
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 w-100 side-bar-body z-1 sticky-top mt-2"
      style={{ zIndex: 1000 }}
    >
      <div className="w-100 align-items-center align-content-center text-center">
        <Link to="/dashboard" className="text-decoration-none">
          <img className="side-bar-logo" src={sbLogoWhite} loading="lazy" />
        </Link>
      </div>
      <hr className="text-white" />
      <ul className="nav nav-pills flex-column mb-auto mt-4 gap-2">
        {routes?.map((item, index) =>
          item.available ? (
            <div className="" key={index}>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    pathname === "/dashboard" && item.path === "dashboard"
                      ? "active"
                      : pathname.startsWith(`/${item.path}`) &&
                        item.path !== "dashboard"
                      ? "active"
                      : ""
                  }`}
                  to={`/${item.path}`}
                >
                  <div className="d-flex gap-2 align-items-center">
                    <div>
                      <img
                        src={item.image}
                        className="side-bar-icon"
                        loading="lazy"
                        alt="side bar icon"
                      />
                    </div>
                    <div className="d-lg-block text-white item-lable-text">
                      {item.name}
                    </div>
                  </div>
                </Link>
              </li>
            </div>
          ) : null
        )}
      </ul>
      <hr className="text-white" />
      <ul className="nav nav-pills flex-column mb-auto mt-4 gap-2">
        {routesOther.map((item, index) => {
          return (
            <div className="" key={index}>
              <li className="nav-item">
                {item.name == "Logout" ? (
                  <button
                    className="nav-link d-flex gap-2 align-items-center"
                    onClick={() => {
                      item.onClick();
                      window.location.href = item.path;
                    }}
                  >
                    <img
                      src={item.image}
                      className="side-bar-icon"
                      loading="lazy"
                      alt="side bar icon"
                    />
                    <div className="d-lg-block text-white item-lable-text">
                      {item.name}
                    </div>
                  </button>
                ) : (
                  <Link
                    //NavLink add
                    className={`nav-link ${
                      pathname == "/dashboard" && item.path == "dashboard"
                        ? "active"
                        : pathname.startsWith(`/${item.path}`) &&
                          item.path != "dashboard"
                        ? "active"
                        : ""
                    }`}
                    to={`/${item.path}`}
                  >
                    <div className="d-flex gap-2 align-items-center">
                      <div>
                        <img
                          src={item.image}
                          className="side-bar-icon"
                          loading="lazy"
                          alt="side bar icon"
                        />
                      </div>
                      <div className="d-lg-block text-white item-lable-text">
                        {item.name}
                      </div>
                    </div>
                  </Link>
                )}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default SideBar;
