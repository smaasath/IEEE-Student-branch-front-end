// import React from 'react'
import CommonButton from "../../../components/common/commonButton/commonButton";
import OuCard from "../../../components/common/oucard/ouCard";

import sbLogo from "../../../assets/logo/sb_logo.png";
import wieLogo from "../../../assets/logo/wie_logo.png";
import iasLogo from "../../../assets/logo/ias_logo.png";
import rasLogo from "../../../assets/logo/ras_logo.png";
import ExcomTable from "../../../components/common/excomTable/excomTable";
import { useEffect, useState } from "react";

const ExcomLandingPage = () => {
  const currentYear = new Date().getFullYear();
  const [searchByName, setSearchByname] = useState("");
  const [entityFilter, setEntityFilter] = useState("All");
  const [termFilter, setTermFilter] = useState(currentYear);
  const [availableTermYears, setAvailableTermYears] = useState([]);

  // collect uniqe years from termYear property in deceinsing order
  useEffect(() => {
    const termYears = [...new Set(excomData.map((item) => item.termYear))].sort(
      (a, b) => b - a
    );
    setAvailableTermYears(termYears);
  }, []);

  const handleSearchChange = (e) => {
    setSearchByname(e.target.value);
  };

  const handleEntityChange = (e) => {
    setEntityFilter(e.target.value);
  };

  const handleTermChange = (e) => {
    setTermFilter(e.target.value);
  };

  return (
    <div className="container overflow-scroll">
      {/* Entities */}
      <div className="row">
        <h6 className="text-cl-primary text-start">Entities</h6>
        {ous.map((ou) => (
          <div
            key={ou.id}
            className="col-10 col-sm-6 col-md-5 col-lg-3 me-0 mb-4"
          >
            <OuCard name={ou.name} type={ou.type} logo={ou.logo} />
          </div>
        ))}
      </div>

      {/* member details */}
      <div className="row">
        <h6 className="text-cl-primary text-start">Members details</h6>

        {/* table fileter options */}
        <div className="d-flex mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search By Name"
            value={searchByName}
            onChange={handleSearchChange}
            style={{ width: "15rem" }}
          />

          {/* select entity */}
          <select
            className="form-control form-select ms-auto me-1"
            value={entityFilter}
            onChange={handleEntityChange}
            style={{ width: "10rem" }}
          >
            <option value="All">Select Entity</option>
            {ous.map((ou) => (
              <option key={ou.id} value={ou.name}>
                {ou.name}
              </option>
            ))}
          </select>
          {/* select term year */}
          <select
            className="form-control form-select ms-2 me-1"
            value={termFilter}
            onChange={handleTermChange}
            style={{ width: "10rem" }}
          >
            <option value={currentYear}>Select Term</option>
            {availableTermYears.map((year) => (
              <option key={year} value={year}>
                Term {year}
              </option>
            ))}
          </select>
        </div>

        {/* excome table */}
        <ExcomTable
          dataList={excomData}
          search={searchByName}
          slectedEntity={entityFilter}
          selectTerm={termFilter}
        />
      </div>
    </div>
  );
};

export default ExcomLandingPage;

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
  }
];

const excomData = [
  {
    id: 1,
    fname: "Kavindra",
    lname: "Weerasinghe",
    email: "wdilshankavindra@gmail.com",
    contactNo: "0774743603",
    entity: "SB",
    position: "Chairperson",
    academicYear: "3rd Year",
    termYear: "2024",
  },
  {
    id: 2,
    fname: "Sanjana",
    lname: "Attanayake",
    email: "sanajan@gamil.com",
    contactNo: "0742365896",
    entity: "SB",
    position: "Secretary",
    academicYear: "3rd Year",
    termYear: "2022",
  },
  {
    id: 3,
    fname: "Kasun",
    lname: "Janith",
    email: "kasun@gamil.com",
    contactNo: "0712365896",
    entity: "IAS",
    position: "Vice Chair",
    academicYear: "2nd Year",
    termYear: "2024",
  },
  {
    id: 4,
    fname: "Joshiga",
    lname: "Ravikumar",
    email: "joshi@gamil.com",
    contactNo: "0712365895",
    entity: "WIE",
    position: "Chairperson",
    academicYear: "3rd Year",
    termYear: "2023",
  },
  {
    id: 5,
    fname: "Sasan",
    lname: "Dilantha",
    email: "sasan@gamil.com",
    contactNo: "0712364596",
    entity: "IAS",
    position: "Chairperson",
    academicYear: "3rd Year",
    termYear: "2024",
  },
  {
    id: 6,
    fname: "Nipuna",
    lname: "Deshan",
    email: "nipuna@gamil.com",
    contactNo: "0712367586",
    entity: "IAS",
    position: "PV Head",
    academicYear: "3rd Year",
    termYear: "2024",
  },
];
