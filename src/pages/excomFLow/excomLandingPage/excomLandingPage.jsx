// import React from 'react'
import CommonButton from "../../../components/common/commonButton/commonButton";
import OuCard from "../../../components/common/oucard/ouCard";

import sbLogo from "../../../assets/logo/sb_logo.png";

const ExcomLandingPage = () => {
  return (
    <div>
      <h1 className="text-cl-primary">ExcomLandingPage</h1>
      <div className="w-25 mt-3">
        <CommonButton text={"WDK"} />
      </div>
      <div className="w-25">
        <OuCard name={"IEEE UWU SB"} type={"Student Branch"} logo={sbLogo} />
      </div>
    </div>
  );
};

export default ExcomLandingPage;
