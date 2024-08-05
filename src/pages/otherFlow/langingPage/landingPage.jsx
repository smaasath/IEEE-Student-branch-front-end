import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import termyear from "../../../assets/images/termyear.png";
import policy from "../../../assets/images/policy.png";
import userrole from "../../../assets/images/userrole.png";
import ou from "../../../assets/images/ou.png";
import { useSelector } from "react-redux";
import CommonLoader from "../../../components/common/commonLoader/commonLoader";

const OtherLandingPage = () => {
  const userData = useSelector((state) => state.user.userData);
  const navigate = useNavigate();
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    setPageLoading(true);
    if (userData) {
      const isOtherAvailable = userData?.some(userRoleDetail =>
        userRoleDetail.role?.policies.some(policy => policy.policyCode === "OTHER")
      );
      if (!isOtherAvailable) {
        navigate("/dashboard");
      } else {
        setPageLoading(false);
      }
    }
  }, [userData]);

  const navigateTotermYearPage = () => {
    navigate("/dashboard/other/academic-year");
  };
  const navigateTopolicyPage = () => {
    navigate("/dashboard/other/policy");
  };
  const navigateTouserRolePage = () => {
    navigate("/dashboard/other/user-role");
  };

  const navigateToNewPage1 = () => {
    navigate("/dashboard/other/ouPage");
  };

  return (
    <>
      {pageLoading ? (
        <CommonLoader />
      ) : (
        <div className="mt-2 d-flex justify-content-between align-items-center gap-4 flex-wrap">
          <button
            onClick={navigateTotermYearPage}
            className="bg-white border-0 rounded-4 common-transition common-shadow d-flex justify-content-between align-items-center p-3"
            style={{ width: 350 }}
          >
            <div className="h4 fw-bold text-cl-primary">Term Year</div>
            <div>
              <img src={termyear} width={70} />
            </div>
          </button>
          <button
            onClick={navigateTopolicyPage}
            className="bg-white border-0 rounded-4 common-transition common-shadow d-flex justify-content-between align-items-center p-3"
            style={{ width: 350 }}
          >
            <div className="h4 fw-bold text-cl-primary">Policy</div>
            <div>
              <img src={policy} width={70} />
            </div>
          </button>
          <button
            onClick={navigateTouserRolePage}
            className="bg-white border-0 rounded-4 common-transition common-shadow d-flex justify-content-between align-items-center p-3"
            style={{ width: 350 }}
          >
            <div className="h4 fw-bold text-cl-primary">User Roles</div>
            <div>
              <img src={userrole} width={70} />
            </div>
          </button>
          <button
            onClick={navigateToNewPage1}
            className="bg-white border-0 rounded-4 common-transition common-shadow d-flex justify-content-between align-items-center p-3"
            style={{ width: 350 }}
          >
             <div className="h4 fw-bold text-cl-primary">OU</div>
            <div>
              <img src={ou} width={70} />
            </div>
          </button>
        </div>
      )}
    </>
  );
};

export default OtherLandingPage;
