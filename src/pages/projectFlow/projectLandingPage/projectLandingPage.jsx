import React, { useEffect, useState } from "react";
import CommonStatusCountCard from "../../../components/common/commonStatusCountCard/commonStatusCountCard";
import timeLinefrom from "../../../assets/images/timeLine.png";
import CommonSearch from "../../../components/common/commonSearch/commonSearch";
import CommonTable from "../../../components/common/commonTable/commonTable";
import CommonPagination from "../../../components/common/commonPagination/commonPagination";
import CommonButton from "../../../components/common/commonButton/commonButton";
import { useNavigate } from "react-router-dom";
import ProjectModel from "../../../components/models/projectModel/projectModel";
import { useSelector } from "react-redux";
import CommonLoader from "../../../components/common/commonLoader/commonLoader";
import { getAllProject, getProjectCount } from "../../../redux/actions/project";
import { getAllOU } from "../../../redux/actions/ou";
import { getAllTermYear } from "../../../redux/actions/termYear";

const ProjectLandingPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [projectModelShow, setProjectModelShow] = useState(false);
  const [disable, setDisable] = useState(false);
  const [editable, setEditable] = useState(false);
  const [selectedProject, setselectedProject] = useState(null);
  const userData = useSelector((state) => state.user.userData);
  const [projectPolicy, setProjectPolicy] = useState(false);
  const [tableData, SetProjectData] = useState(null);
  const [isProjectTimelineAvailable, setIsProjectTimelineAvailable] =
    useState(false);
  const [pageLoading, setPageLoading] = useState(true);
  const [status, setStatus] = useState("");
  const [searchItem, setsearchItem] = useState("");
  const [loader, setLoader] = useState(false);
  const [refreshTable, setRefreshTable] = useState(0);
  const [countData, setCountData] = useState(0);
  const [ou, setOu] = useState(null);
  const [termYear, setTermYear] = useState(null);
  const [selectedOU, setSelectedOU] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  useEffect(() => {
    setPageLoading(true);
    if (userData) {
      const isProjectAvailable = userData?.some((userRoleDetail) =>
        userRoleDetail.role?.policies.some(
          (policy) => policy.policyCode === "PROJECT"
        )
      );
      const isProjectTimelineAvailable = userData?.some((userRoleDetail) =>
        userRoleDetail.role?.policies.some(
          (policy) => policy.policyCode === "PROJECT_TIME"
        )
      );

      setIsProjectTimelineAvailable(isProjectTimelineAvailable);

      setProjectPolicy(isProjectAvailable);
      setPageLoading(false);
    }
  }, [userData]);

  const handleCloseProjectModel = () => {
    setProjectModelShow(false);
    setDisable(false);
    setEditable(false);
  };

  function editProject(project) {
    setDisable(false);
    setselectedProject(project);
    setEditable(true);
    handleShowProjectModel();
  }

  function navigateToProject(id) {
    const encodedId = encodeURIComponent(id);
    navigate(encodedId);
  }
  const handleShowProjectModel = () => {
    setProjectModelShow(true);
  };

  const tableHeading = [
    {
      label: "Project Name",
      value: "projectName",
    },
    {
      label: "Chapter",
      value: "ouName",
    },
    {
      label: "Start Date",
      value: "startDate",
    },
    {
      label: "End Date",
      value: "endDate",
    },
    {
      label: "Status",
      value: "status",
    },
    {
      label: "",
      value: "ACTION",
      type: [projectPolicy ? "EDIT" : "", "VIEW"],
    },
  ];

  useEffect(() => {
    SetProjectData([]);
    setLoader(true);
    getAllProject(currentPage - 1, searchItem, selectedOU, status, selectedYear, (res) => {
      if (res.status === 200) {
        const data = res?.data?.data?.content?.map(item => ({
          id: item.projectID,
          ouName: item?.ous?.map(ou => ou.ouName).join(","),
          ...item,
        }));
        SetProjectData(data);
        setLoader(false);
      }
    });
  }, [searchItem, currentPage, refreshTable, status, selectedOU, selectedYear]);

  const navigate = useNavigate();
  function navigateToTimeLine() {
    navigate("time-line");
  }

  useEffect(() => {
    getProjectCount("", "", "", (res) => {
      if (res.status == 200) {
        setCountData(res?.data?.data);
      }
    });
  }, []);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    getAllOU((res) => {
      if (res.status === 200) {
        setOu(res.data.data);
      }
    });
  }, []);
  useEffect(() => {
    getAllTermYear((res) => {
      if (res.status === 200) {
        setTermYear(res.data.data);
      }
    });
  }, []);

   const handleOUChange = (e) => {
    setSelectedOU(e.target.value);
    setCurrentPage(1);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      {pageLoading ? (
        <CommonLoader />
      ) : (
        <>
          <div>
            <div className="d-flex justify-content-end gap-3 flex-wrap align-items-center">
              <div className="">
                <select
                  className="form-select w-100"
                  aria-label="Select Entity"
                  value={selectedOU}
                  onChange={handleOUChange}
                >
                  <option value="">Select Entity</option>
                  {ou &&
                    ou.map((ouItem) => (
                      <option key={ouItem.id} value={ouItem.ouID}>
                        {ouItem.ouName}
                      </option>
                    ))}
                </select>
              </div>
              {projectPolicy ? (
                <div className="">
                  <select
                    className="form-select w-100"
                    aria-label="Select Year"
                    value={selectedYear}
                    onChange={handleYearChange}
                  >
                    <option value="">Select Year</option>
                    {termYear &&
                      termYear.map((yearItem) => (
                        <option key={yearItem.id} value={yearItem.termYearID}>
                          {yearItem.termYear}
                        </option>
                      ))}
                  </select>
                </div>
              ) : null}
            </div>
            <div className="text-cl-primary">Project</div>
            <div className="mt-2 d-flex justify-content-between align-items-center gap-4 flex-wrap">
              <div className="d-flex justify-content-between gap-4 rounded-4 bg-body-secondary p-4 flex-wrap flex-grow-1">
                <CommonStatusCountCard type={"TODO"} count={countData?.todo} />
                <CommonStatusCountCard
                  type={"ONGOING"}
                  count={countData?.progress}
                />
                <CommonStatusCountCard
                  type={"COMPLETE"}
                  count={countData?.complete}
                />
              </div>
              <button
                onClick={() => {
                  navigateToTimeLine();
                }}
                className="bg-white border-0 rounded-4 common-transition common-shadow d-flex justify-content-between align-items-center p-3"
                style={{ width: 350 }}
              >
                <div className="h4 fw-bold text-cl-primary">
                  Projects time line
                </div>
                <div>
                  <img src={timeLinefrom} width={70} />
                </div>
              </button>
            </div>

            {projectPolicy ? (
              <div className="mt-4 d-flex justify-content-end">
                <div>
                  <CommonButton
                    onClick={handleShowProjectModel}
                    text={"Add Project"}
                  />
                </div>
              </div>
            ) : null}

            <div className="mt-4 d-flex flex-column gap-3 justify-content-center bg-white rounded-2 common-shadow p-3">
              <div className="mt-2 d-flex flex-wrap justify-content-between align-items-center">
                <CommonSearch primary={true} />
                <div className="">
                  <select
                    className="form-select w-100"
                    aria-label="Large select example"
                    value={status}
                    onChange={handleStatusChange}
                  >
                    <option value="">Select Status</option>
                    <option value="TODO">To Do</option>
                    <option value="PROGRESS">Progress</option>
                    <option value="COMPLETE">Complete</option>
                  </select>
                </div>
              </div>

              <div className="mt-4 table-container">
                <CommonTable
                  tableHeading={tableHeading}
                  primary={true}
                  tableData={tableData}
                  loading={false}
                  viewAction={(project) => {
                    navigateToProject(project);
                  }}
                  editAction={(project) => {
                    editProject(project);
                  }}
                />
              </div>
              <div className="mt-4 d-flex justify-content-end">
                <CommonPagination
                  pages={10}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </div>
          </div>

          <ProjectModel
            show={projectModelShow}
            onHide={handleCloseProjectModel}
            disabled={disable}
            editable={editable}
            changed={() => {
              setRefreshTable(refreshTable + 1);
            }}
            item={selectedProject}
          />
        </>
      )}
    </>
  );
};

export default ProjectLandingPage;
