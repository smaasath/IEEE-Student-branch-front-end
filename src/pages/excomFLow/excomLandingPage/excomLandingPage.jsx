// import React from 'react'
import CommonButton from "../../../components/common/commonButton/commonButton";
import OuCard from "../../../components/common/oucard/ouCard";

import sbLogo from "../../../assets/logo/sb_logo.png";
import wieLogo from "../../../assets/logo/wie_logo.png";
import iasLogo from "../../../assets/logo/ias_logo.png";
import rasLogo from "../../../assets/logo/ras_logo.png";

const ous = [
  {
    id: 0,
    name: "SB",
    type: "Student Branch",
    logo: sbLogo,
  },
  {
    id: 1,
    name: "WIE",
    type: "Affinity Group",
    logo: wieLogo,
  },
  {
    id: 2,
    name: "RAS",
    type: "Technical Chapter",
    logo: rasLogo,
  },
  {
    id: 3,
    name: "IAS",
    type: "Technical Chapter",
    logo: iasLogo,
  },
  {
    id: 4,
    name: "CS",
    type: "Technical Chapter",
    logo: iasLogo,
  },
];

const ExcomLandingPage = () => {
  return (
    <div className="container overflow-scroll">
      <div className="row">
        <h6 className="text-cl-primary text-start">Chapters</h6>
        {ous.map((ou) => (
          <div
            key={ou.id}
            className="col-10 col-sm-6 col-md-5 col-lg-3 me-0 mb-4"
          >
            <OuCard name={ou.name} type={ou.type} logo={ou.logo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExcomLandingPage;
