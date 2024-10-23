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
import {
  deleteServiceLetterRequest,
  getAllServiceRequests,
  getMyServiceRequests,
} from "../../../redux/actions/service";
import CommonDeleteModel from "../../../components/models/commonDeleteModel/commonDeleteModel";

const serviveLandingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [statusChangeModelShow, setStatusChangeModel] = useState(false);
  const userData = useSelector((state) => state.user.userData);

  const [pageLoading, setPageLoading] = useState(true);
  const [service, setService] = useState(false);
  const [serviceVolunteer, setServiceVolunteer] = useState(false);
  const [showAddSereviceReqModel, setShowAddSereviceReqModel] = useState(false);
  const [showViewSereviceReqModel, setShowViewSereviceReqModel] =
    useState(false);
  const navigate = useNavigate();
  const [myReqests, setMyRequests] = useState(null);
  const [myReqestsTableLoading, setMyReqestsTableLoading] = useState(false);
  const [refreshTable, setRefreshTable] = useState(1);
  const [allReqests, setAllRequests] = useState(null);
  const [allReqestsTableLoading, setAllReqestsTableLoading] = useState(false);
  const [slectedServiceRequest, setSelectedServiceRequest] = useState(null);
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setdeleteError] = useState(false);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };
  useEffect(() => {
    getMyServiceRequests(0, (res) => {
      setMyReqestsTableLoading(true);
      if (res.status === 200) {
        const data = res?.data?.data?.content?.map((request) => ({
          id: request?.serviceId,
          requestDate: formatDate(request?.request_date),
          dueDate: formatDate(request?.due_date),
          status: request?.status,
          email: request?.email,
          item: request,
        }));
        setMyRequests(data);
      }
      setMyReqestsTableLoading(false);
    });
  }, [refreshTable]);

  useEffect(() => {
    if (service) {
      getAllServiceRequests("", "", 0, (res) => {
        setAllReqestsTableLoading(true);
        if (res.status === 200) {
          // console.log(res?.data?.data?.content, "asdasdasassad");
          const data = res?.data?.data?.content?.map((request) => ({
            id: request?.serviceId,
            requestDate: formatDate(request?.request_date),
            dueDate: formatDate(request?.due_date),
            status: request?.status,
            email: request?.email,
            volunteerName:
              request?.user?.firstName + " " + request?.user?.lastName,
            academicYear: request?.user?.academicYear?.academicYear,
            contactNo: request?.user?.contactNo,
            item: request,
          }));
          setAllRequests(data);
        }
        setAllReqestsTableLoading(false);
      });
    }
  }, [refreshTable, service]);

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

  const handleShowStatusChangeModel = (requestData) => {
    setSelectedServiceRequest(requestData);
    setStatusChangeModel(true);
  };
  const handleCloseStatusChangeModel = () => {
    setSelectedServiceRequest(null);
    setStatusChangeModel(false);
  };
  const openAddServiceReqModel = () => {
    setShowAddSereviceReqModel(true);
  };
  const handleCloseCreateServiceModel = () => {
    setShowAddSereviceReqModel(false);
  };
  const openViewServiceReqModel = (requestData) => {
    setSelectedServiceRequest(requestData);
    setShowViewSereviceReqModel(true);
  };
  const handleCloseViewServiceModel = () => {
    setSelectedServiceRequest(null);
    setShowViewSereviceReqModel(false);
  };

  const handleDeleteProject = () => {
    setdeleteError(false);
    setDeleteLoading(true);
    deleteServiceLetterRequest(
      slectedServiceRequest?.item?.serviceId,
      (res) => {
        if (res?.status == 200) {
          setRefreshTable(refreshTable + 1);
          setShowDeleteModel(false);
          setSelectedServiceRequest(null);
          setdeleteError(false);
        } else {
          setDeleteLoading(false);
          setdeleteError(true);
        }
      }
    );
  };
  const handleCloseDeleteModel = () => {
    setShowDeleteModel(false);
    setSelectedServiceRequest(null);
    setdeleteError(false);
  };

  const allReqTableHeading = [
    {
      label: "Volunteer Name",
      value: "volunteerName",
    },
    {
      label: "Academic Year",
      value: "academicYear",
    },
    {
      label: "Contact No",
      value: "contactNo",
    },
    {
      label: "Status",
      value: "status",
    },
    {
      label: "Requested Date",
      value: "requestDate",
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
      value: "requestDate",
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
      value: "dueDate",
    },
    {
      label: "",
      value: "ACTION",
      type: ["DELETE"],
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
                  tableData={myReqests}
                  loading={myReqestsTableLoading}
                  serviceMyRequest={true}
                  deleteAction={(item) => {
                    setShowDeleteModel(true);
                    setSelectedServiceRequest(item);
                  }}
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
                  tableData={allReqests}
                  loading={allReqestsTableLoading}
                  editAction={(item) => {
                    handleShowStatusChangeModel(item);
                  }}
                  viewAction={(item) => {
                    openViewServiceReqModel(item);
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
        refresh={() => setRefreshTable(refreshTable + 1)}
      />
      <CreateServiceRequestModel
        show={showViewSereviceReqModel}
        onHide={handleCloseViewServiceModel}
        view={true}
        requestData={slectedServiceRequest}
      />

      <VolunteerStatusChangeModel
        show={statusChangeModelShow}
        onHide={handleCloseStatusChangeModel}
        requestData={slectedServiceRequest}
        refresh={() => setRefreshTable(refreshTable + 1)}
      />

      <CommonDeleteModel
        onclick={handleDeleteProject}
        loading={deleteLoading}
        error={deleteError}
        mode={"Service Letter Request"}
        onHide={handleCloseDeleteModel}
        show={showDeleteModel}
        text={"request"}
      />
    </>
  );
};

export default serviveLandingPage;
