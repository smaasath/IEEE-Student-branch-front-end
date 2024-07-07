import React from "react";
import { useNavigate } from "react-router-dom";
import timeLinefrom from "../../../assets/images/timeLine.png";

const OtherLandingPage = () => {
  const navigate = useNavigate();
  const navigateTotermYearPage = () => {
    navigate("/dashboard/other/academic-year");
  };
  const navigateTopolicyPage = () => {
    navigate("/dashboard/other/policy");
  };
  const navigateTouserRolePage = () => {
    navigate("/dashboard/other/user-role");
  };

  return (
    <div className="mt-2 d-flex justify-content-between align-items-center gap-4 flex-wrap'">
      <button
        onClick={() => {
          navigateTotermYearPage();
        }}
        className="bg-white border-0 rounded-4 common-transition common-shadow d-flex justify-content-between align-items-center p-3"
        style={{ width: 350 }}
      >
        <div className="h4 fw-bold text-cl-primary">Term Year</div>
        <div>
          <img src={timeLinefrom} width={70} />
        </div>
      </button>
      <button
        onClick={() => {
          navigateTopolicyPage();
        }}
        className="bg-white border-0 rounded-4 common-transition common-shadow d-flex justify-content-between align-items-center p-3"
        style={{ width: 350 }}
      >
        <div className="h4 fw-bold text-cl-primary">Policy</div>
        <div>
          <img src={timeLinefrom} width={70} />
        </div>
      </button>
      <button
        onClick={() => {
          navigateTouserRolePage();
        }}
        className="bg-white border-0 rounded-4 common-transition common-shadow d-flex justify-content-between align-items-center p-3"
        style={{ width: 350 }}
      >
        <div className="h4 fw-bold text-cl-primary">User Roles</div>
        <div>
          <img src={timeLinefrom} width={70} />
        </div>
      </button>
    </div>
  );
};

export default OtherLandingPage;
