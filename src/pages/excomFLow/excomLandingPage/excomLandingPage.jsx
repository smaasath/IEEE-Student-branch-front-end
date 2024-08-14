import React, { useEffect, useState } from "react";
import CommonSearch from "../../../components/common/commonSearch/commonSearch";
import CommonTable from "../../../components/common/commonTable/commonTable";
import CommonPagination from "../../../components/common/commonPagination/commonPagination";
import MemberDetailsModal from "../../../components/models/viewMemberDetailsModel/viewMemberDetailsModel";
import OuCard from "../../../components/common/oucard/ouCard";
import sbLogo from "../../../assets/logo/sb_logo.png";
import wieLogo from "../../../assets/logo/wie_logo.png";
import iasLogo from "../../../assets/logo/ias_logo.png";
import rasLogo from "../../../assets/logo/ras_logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import CommonLoader from "../../../components/common/commonLoader/commonLoader";
import { getAllOU } from "../../../redux/actions/ou";

const ExcomLandingPage = () => {
  const currentYear = new Date().getFullYear();
  const [searchByName, setSearchByName] = useState("");
  const [entityFilter, setEntityFilter] = useState("All");
  const [termFilter, setTermFilter] = useState(currentYear);
  const [availableTermYears, setAvailableTermYears] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [memberDetailModalShow, setMemberDetailModalShow] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user.userData);
  const [pageLoading, setPageLoading] = useState(true);

  const [entities, setEntities] = useState([]);

  useEffect(() => {
    getAllOU ((res) => {
      if (res.status == 200) {
        let data = res?.data?.data?.map(
          ({ ouID, ou_short_name }) => ({
            id: ouID,
            shorName: ou_short_name,
          })
        );
        console.warn(data);
        setEntities(data);
      }
    });
  }, []);


  useEffect(() => {
    setPageLoading(true);
    if (userData) {
      const isOtherAvailable = userData?.some((userRoleDetail) =>
        userRoleDetail.role?.policies.some(
          (policy) => policy.policyCode === "EXCOM"
        )
      );
      if (!isOtherAvailable) {
        navigate("/dashboard");
      } else {
        setPageLoading(false);
      }
    }
  }, [userData]);
  const handleCloseMemberDetailModal = () => setMemberDetailModalShow(false);
  const handleShowMemberDetailModal = (member) => {
    setSelectedMember(member);
    setMemberDetailModalShow(true);
  };

  const handleSearchChange = (e) => setSearchByName(e.target.value);
  const handleEntityChange = (e) => setEntityFilter(e.target.value);
  const handleTermChange = (e) => setTermFilter(e.target.value);

  const tableHeading = [
    { label: "First Name", value: "fname" },
    { label: "Last Name", value: "lname" },
    { label: "Email", value: "email" },
    { label: "Contact Number", value: "contactNo" },
    { label: "Entity", value: "entity" },
    { label: "Position", value: "position" },
    { label: "Academic Year", value: "academicYear" },
    { label: "Term Year", value: "termYear" },
    { label: "Action", value: "ACTION", type: ["VIEW"] },
  ];

  const tableData = [
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

  function navigateToexcomPage() {
    navigate("/dashboard/executive-committee/1");
  }

//   const entities = [
//     { id: 0, name: "SB", type: "Student Branch", logo: sbLogo },
//     { id: 1, name: "WIE", type: "Affinity Group", logo: wieLogo },
//     { id: 2, name: "RAS", type: "Technical Chapter", logo: rasLogo },
//     { id: 3, name: "IAS", type: "Technical Chapter", logo: iasLogo },
//     { id: 4, name: "CS", type: "Technical Chapter", logo: iasLogo }
//   ];

  return (
    <>
      {pageLoading ? (
        <CommonLoader />
      ) : (
        <>
          <div className="container">
            <div className="text-cl-primary">Entities</div>
            <div className="row mt-3">
              {[
                { id: 0, name: "SB", type: "Student Branch", logo: sbLogo },
                { id: 1, name: "WIE", type: "Affinity Group", logo: wieLogo },
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
                { id: 4, name: "CS", type: "Technical Chapter", logo: iasLogo },
              ].map((ou) => (
                <div
                  key={ou.id}
                  className="col-10 col-sm-6 col-md-5 col-lg-3 me-0 mb-4"
                >
                  <OuCard
                    name={ou.name}
                    type={ou.type}
                    logo={ou.logo}
                    onclick={navigateToexcomPage}
                  />
                </div>
              ))}
            </div>
            <div className="text-cl-primary mt-4">Members details</div>
            <div className="mt-3 pt-4 p-3 rounded-4 bg-white common-shadow">
              <div className="d-flex justify-content-between flex-wrap align-items-center p-3">
                <div>
                  <CommonSearch primary={true} onChange={handleSearchChange} />
                </div>
                <div>
                  <select
                    className="form-select"
                    aria-label="Select Entity"
                    value={entityFilter}
                    onChange={handleEntityChange}
                  >
                    <option value="All">Select Entity</option>
                    {entities.map((ou) => (
                      <option key={ou.id} value={ou.shorName}>
                        {ou.shorName}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <select
                    className="form-select ms-2 me-1"
                    value={termFilter}
                    onChange={handleTermChange}
                  >
                    <option value={currentYear}>Select Term</option>
                    {availableTermYears.map((year) => (
                      <option key={year} value={year}>
                        Term {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-3 p-3 rounded-4 bg-white d-flex flex-column justify-content-between table-container">
                <CommonTable
                  tableHeading={tableHeading}
                  tableData={tableData}
                  primary={true}
                  loading={false}
                  viewAction={(id) => {
                    const member = tableData.find((item) => item.id === id);
                    handleShowMemberDetailModal(member);
                  }}
                />
                <div className="mt-4 d-flex justify-content-end">
                  <CommonPagination
                    pages={10}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                  />
                </div>
              </div>
            </div>
          </div>
          <MemberDetailsModal
            show={memberDetailModalShow}
            onHide={handleCloseMemberDetailModal}
            memberData={selectedMember}
          />
        </>
      )}
    </>
  );
};

export default ExcomLandingPage;
