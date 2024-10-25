import React, { useEffect, useState } from "react";
import profile from "../../../assets/images/profile.png";
import CommonTable from "../../../components/common/commonTable/commonTable";
import CommonSearch from "../../../components/common/commonSearch/commonSearch";
import CommonPagination from "../../../components/common/commonPagination/commonPagination";
import VolunteerViewModel from "../../../components/models/volunteerViewModel/volunteerViewModel";
import CommonLoader from "../../../components/common/commonLoader/commonLoader";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PolicyValidate } from "../../../utils/valitations/Valitation";
import BestVolunteerCard from "../../../components/common/bestVounteerCard/bestVolunteerCard";
import { getBestVolunteers } from "../../../redux/actions/service";
import { getAllUsers } from "../../../redux/actions/user";

const VolunteerDetailsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPageForCard, setCurrentPageForCard] = useState(1);
  const [totalPageForCard, setTotalPageForCard] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchItem, setSearchItem] = useState("");
  const [tableData, setTableData] = useState([]);
  const [tableLoading, setTableLoading] = useState(false);
  const [volunteerDetailModalShow, setVolunteerDetailModalShow] =
    useState(false);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const userData = useSelector((state) => state.user.userData);
  const [pageLoading, setPageLoading] = useState(true);
  const [bestVolunteers, setBestVolunteers] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setPageLoading(true);
    if (userData) {
      const isFinanceAvailable = PolicyValidate(userData, "SERVICE_VOLUNTEER");
      if (!isFinanceAvailable) {
        navigate("/dashboard");
      } else {
        setPageLoading(false);
      }
    }
  }, [userData]);

  useEffect(() => {
    getBestVolunteers(currentPageForCard - 1, (res) => {
      if (res?.status == 200) {
        setBestVolunteers(res?.data?.data?.content);
        setTotalPageForCard(res?.data?.data?.totalPages);
      }
    });
  }, [currentPageForCard]);
  useEffect(() => {
    setTableLoading(true);
    getAllUsers(currentPage - 1, searchItem, (res) => {
      if (res?.status == 200) {
        const data = res?.data?.data?.content?.map((user) => ({
          id: user?.userID,
          firstName: user?.firstName,
          lastName: user?.lastName,
          email: user?.email,
          contactNo: user?.contactNo,
          academicYear: user?.academicYear?.academicYear,
          createdDate: formatDate(user?.createdDate),
          user: user,
        }));
        setTableData(data);
        setTotalPages(res?.data?.data?.totalPages);
      }
    });
    setTableLoading(false);
  }, [currentPage, searchItem]);
  const handleCloseVolunteerDetailModal = () =>
    setVolunteerDetailModalShow(false);
  const handleShowVolunteerDetailModal = () => {
    // setSelectedVolunteer();
    setVolunteerDetailModalShow(true);
  };
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toISOString().split("T")[0];
  };
  const handleSearchChange = (e) => {
    setSearchItem(e);
    setCurrentPage(1);
  };
  function navigateToUserActivitiesPage(userId) {
    navigate(`/dashboard/service/activities/${userId}`);
  }

  const tableHeading = [
    {
      label: "Name",
      value: "firstName",
    },
    {
      label: "Name",
      value: "lastName",
    },
    {
      label: "Email",
      value: "email",
    },
    {
      label: "Contact No",
      value: "contactNo",
    },
    {
      label: "Academic Year",
      value: "academicYear",
    },
    {
      label: "Created Date",
      value: "createdDate",
    },
    {
      label: "",
      value: "ACTION",
      type: ["VIEW"],
    },
  ];

  return (
    <>
      {pageLoading ? (
        <CommonLoader />
      ) : (
        <div className="container">
          <div className="text-cl-primary mt-3">Best Volunteer</div>

          <div className="row mt-4 justify justify-content-betweem align-items-center">
            {bestVolunteers?.map((volunteer, index) => (
              <div
                className="col-10 col-sm-6 col-md-5 col-lg-3 col-xl-2 mx-3 mb-4"
                key={index}
              >
                <BestVolunteerCard
                  photo={volunteer?.user?.profilePic}
                  name={
                    volunteer?.user?.firstName + " " + volunteer?.user?.lastName
                  }
                  completedTask={volunteer?.completedTaskCount}
                  entrolledProjects={volunteer?.enrolledProjectCount}
                />
              </div>
            ))}
          </div>
          <div className="mt-4 d-flex justify-content-end">
            <CommonPagination
              pages={totalPageForCard}
              currentPage={currentPageForCard}
              setCurrentPage={setCurrentPageForCard}
            />
          </div>

          <div className="mt-5 d-flex justify-content-between align-items-center gap-4 flex-wrap">
            <div className="text-cl-primary">Volunteers</div>
          </div>

          <div className="mt-4 d-flex flex-column gap-3 justify-content-center bg-white rounded-2 common-shadow p-3">
            <div className="mt-4 table-container">
              <div className="mt-2 d-flex flex-wrap justify-content-between align-items-center">
                <CommonSearch
                  primary={true}
                  value={searchItem}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="mt-4 table-container">
                <CommonTable
                  tableHeading={tableHeading}
                  primary={true}
                  tableData={tableData}
                  loading={tableLoading}
                  viewAction={(item) => {
                    navigateToUserActivitiesPage(item?.id);
                  }}
                />
              </div>
            </div>

            <div className="mt-4 d-flex justify-content-end">
              <CommonPagination
                pages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      )}
      <VolunteerViewModel
        show={volunteerDetailModalShow}
        onHide={handleCloseVolunteerDetailModal}
        volunteerData={selectedVolunteer}
      />
    </>
  );
};

export default VolunteerDetailsPage;
