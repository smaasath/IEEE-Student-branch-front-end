import React, { useEffect, useState } from "react";

import CommonButton from "../../../components/common/commonButton/commonButton";
import CommonTable from "../../../components/common/commonTable/commonTable";
import CommonSearch from "../../../components/common/commonSearch/commonSearch";
import CommonPagination from "../../../components/common/commonPagination/commonPagination";
import { useNavigate } from "react-router-dom";
import VolunteerStatusChangeModel from "../../../components/models/volunteerStatusChangeModel/volunteerStatusChangeModel";
import { useSelector } from "react-redux";
import CommonLoader from "../../../components/common/commonLoader/commonLoader";
import { PolicyValidate } from "../../../utils/valitations/Valitation";
import CreateServiceRequestModel from "../../../components/models/addServiceRequestModel/createServiceRequestModel";

const serviveLandingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [statusChangeModelShow, setStatusChangeModel] = useState(false);
  const userData = useSelector((state) => state.user.userData);
  const handleCloseStatusChangeModel = () => {
    setStatusChangeModel(false);
  };
  const handleShowStatusChangeModel = () => {
    setStatusChangeModel(true);
  };
  const [pageLoading, setPageLoading] = useState(true);
  const [service, setService] = useState(false);
  const [serviceVolunteer, setServiceVolunteer] = useState(false);
  const [showAddSereviceReqModel, setShowAddSereviceReqModel] = useState(false);
  const [showViewSereviceReqModel, setShowViewSereviceReqModel] =
    useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setPageLoading(true);
    if (userData) {
      const isServiceAvailable = PolicyValidate(userData, "SERVICE");

      const isServiceVolunteerAvailable = PolicyValidate(
        userData,
        "SERVICE_VOLUNTEER"
      );

      if (isServiceAvailable) {
        setService(true);
        setPageLoading(false);
      }

      if (isServiceVolunteerAvailable) {
        setServiceVolunteer(true);
        setPageLoading(false);
      }

      if (!isServiceAvailable || !isServiceVolunteerAvailable) {
        setPageLoading(false);
      }
    }
  }, [userData]);

  function navigateToVolunteerDetailsPage() {
    navigate("volunteer");
  }
  const openAddServiceReqModel = () => {
    setShowAddSereviceReqModel(true);
  };
  const handleCloseCreateServiceModel = () => {
    setShowAddSereviceReqModel(false);
  };
  const openViewServiceReqModel = () => {
    setShowViewSereviceReqModel(true);
  };
  const handleCloseViewServiceModel = () => {
    setShowViewSereviceReqModel(false);
  };

  const allReqTableHeading = [
    {
      label: "Volunteer Name",
      value: "volunteer_name",
    },
    {
      label: "Academic Year",
      value: "academic_year",
    },
    {
      label: "Contact No",
      value: "contact_no",
    },
    {
      label: "Status",
      value: "status",
    },
    {
      label: "Requested Date",
      value: "requested_date",
    },
    {
      label: "",
      value: "ACTION",
      type: ["VIEW", "EDIT", "MORE"],
    },
  ];

  const myReqTableHeading = [
    {
      label: "Requested Date",
      value: "requested_date",
    },
    {
      label: "Email",
      value: "email",
    },
    {
      label: "Status",
      value: "status",
    },
    {
      label: "Due Date",
      value: "due_date",
    },
    {
      label: "",
      value: "ACTION",
      type: ["DELETE"],
    },
  ];
  const tableData = [
    {
      id: "1234",
      volunteer_name: "Kavindra Weerasinghe",
      academic_year: "3rd",
      contact_no: "0718596324",
      status: "REVIEWED",
      requested_date: "2024/06/08",
    },
    {
      id: "1235",
      volunteer_name: "Thilini Priyangika",
      academic_year: "3rd",
      contact_no: "0708596624",
      status: "COMPLETE",
      requested_date: "2024/06/09",
    },
    {
      id: "1236",
      volunteer_name: "Ishara Herath",
      academic_year: "2nd",
      contact_no: "0708876984",
      status: "TODO",
      requested_date: "2024/06/10",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="d-flex w-100">
          <div className="ms-auto me-0 d-flex justify-content-end">
            <CommonButton
              text={"My Activities"}
              onClick={() => {
                openCreateTaskModel();
              }}
            />
          </div>
        </div>
        <div className="text-cl-primary">My service letter requests</div>
        <div className="mt-4 d-flex flex-column gap-3 justify-content-center bg-white rounded-2 common-shadow p-3">
          <div className="d-flex justify-content-between align-items-center gap-4 flex-wrap">
            <div className="mt-2 table-container w-100" style={{ height: 400 }}>
              <div className="mt-2 d-flex flex-wrap justify-content-end align-items-center">
                <div>
                  <CommonButton
                    text={"Send Request"}
                    onClick={() => {
                      openAddServiceReqModel();
                    }}
                  />
                </div>
              </div>
              <div className="mt-4 table-container">
                <CommonTable
                  tableHeading={myReqTableHeading}
                  primary={true}
                  tableData={tableData}
                  loading={false}
                />
              </div>
            </div>
          </div>
        </div>

        {pageLoading ? <CommonLoader /> : null}
        {serviceVolunteer ? (
          <div className="mt-5 d-flex justify-content-between align-items-center gap-4 flex-wrap">
            <div className="text-cl-primary">Service letter requests</div>
            <div className="d-flex gap-3 flex-row justify-content-end mt-4 ">
              <div>
                <CommonButton
                  text={"Volunteer"}
                  onClick={() => {
                    navigateToVolunteerDetailsPage();
                  }}
                />
              </div>
            </div>
          </div>
        ) : null}

        {service ? (
          <div className="mt-4 d-flex flex-column gap-3 justify-content-center bg-white rounded-2 common-shadow p-3">
            <div className="mt-4 table-container">
              <div className="mt-2 d-flex flex-wrap justify-content-between align-items-center">
                <CommonSearch primary={true} />
              </div>
              <div className="mt-4 table-container">
                <CommonTable
                  tableHeading={allReqTableHeading}
                  primary={true}
                  tableData={tableData}
                  loading={false}
                  editAction={(id) => {
                    handleShowStatusChangeModel();
                  }}
                  viewAction={(id) => {
                    openViewServiceReqModel();
                  }}
                  moreAction={(id) => {
                    console.log("");
                  }}
                />
              </div>
            </div>

            <div className="mt-4 d-flex justify-content-end">
              <CommonPagination
                pages={10}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        ) : null}
      </div>
      <CreateServiceRequestModel
        show={showAddSereviceReqModel}
        onHide={handleCloseCreateServiceModel}
        edit={true}
      />
      <CreateServiceRequestModel
        show={showViewSereviceReqModel}
        onHide={handleCloseViewServiceModel}
        view={true}
      />

      <VolunteerStatusChangeModel
        show={statusChangeModelShow}
        onHide={handleCloseStatusChangeModel}
      />
    </>
  );
};

export default serviveLandingPage;
