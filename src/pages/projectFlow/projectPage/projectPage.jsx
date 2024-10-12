import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectDefault from "../../../assets/images/projectDefault.png";
import CommonPieChart from "../../../components/common/commonPieChart/commonPieChart";
import CommonStatusCountCard from "../../../components/common/commonStatusCountCard/commonStatusCountCard";
import CommonButton from "../../../components/common/commonButton/commonButton";
import { useNavigate } from "react-router-dom";
import CommonSearch from "../../../components/common/commonSearch/commonSearch";
import CommonDropAndDrag from "../../../components/common/commonDropAndDrag/commonDropAndDrag";
import add from "../../../assets/icons/Add.png";
import send from "../../../assets/icons/Sent.png";
import CommonNoteContainer from "../../../components/common/commonNoteContainer/commonNoteContainer";
import CommonMemberContainer from "../../../components/common/commonMemberContainer/commonMemberContainer";
import { useSelector } from "react-redux";
import CommonLoader from "../../../components/common/commonLoader/commonLoader";
import TaskModel from "../../../components/models/createTaskModel/createTaskModel";

const ProjectPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  
  function navigateToFinance() {
    navigate("finance");
  }
  function navigateToEvents() {
    navigate("event");
  }
  const userData = useSelector((state) => state.user.userData);

  const [pageLoading, setPageLoading] = useState(true);

  const [isFinanceAvailable, setIsFinanceAvailable] = useState(false);
  const [isEventAvailable, setIsEventAvailable] = useState(false);
  const [isAssignAvailable, setIsAssignAvailable] = useState(false);
  const [isTaskAvailable, setIsTaskAvailable] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);

  useEffect(() => {
    setPageLoading(true);
    if (userData) {
      const isProjectFinanceAvailable = userData?.some((userRoleDetail) =>
        userRoleDetail.role?.policies.some(
          (policy) => policy.policyCode === "PROJECT_FINANCE"
        )
      );
      const isProjectEventAvailable = userData?.some((userRoleDetail) =>
        userRoleDetail.role?.policies.some(
          (policy) => policy.policyCode === "PROJECT_EVENT"
        )
      );
      const isProjectAssignAvailable = userData?.some((userRoleDetail) =>
        userRoleDetail.role?.policies.some(
          (policy) => policy.policyCode === "PROJECT_ASSIGN"
        )
      );
      const isProjectTaskAvailable = userData?.some((userRoleDetail) =>
        userRoleDetail.role?.policies.some(
          (policy) => policy.policyCode === "PROJECT_TASK"
        )
      );
      setIsFinanceAvailable(isProjectFinanceAvailable);
      setIsEventAvailable(isProjectEventAvailable);
      setIsAssignAvailable(isProjectAssignAvailable);
      setIsTaskAvailable(isProjectTaskAvailable);

      setPageLoading(false);
    }
  }, [userData]);

  const openTaskModal = () => {
    setShowTaskModal(true);
  };

  const closeTaskModal = () => {
    setShowTaskModal(false);
  };

  return (
    <>
      {pageLoading ? (
        <CommonLoader />
      ) : (
        <div className="p-3">
          <div className="bg-white rounded-3 common-shadow p-3 row align-items-center">
            <div className="col-md-3 d-flex justify-content-center">
              <img src={projectDefault} width={150} className="img-fluid" />
            </div>
            <div className="col-md-9 d-flex flex-column">
              <div>
                <h2>IEEE OpenDay 2024</h2>
              </div>
              <div>
                <p className="text-secondary text-wrap">
                  IEEE Open Day 2024 is a highly anticipated event organized by
                  the IEEE Uva Wellassa University Student Branch, aimed at
                  fostering a culture of learning, engagement, and community
                  within the student body. This year's event promises an
                  exciting lineup of activities and initiatives designed to
                  showcase the myriad opportunities available through IEEE
                  membership while providing valuable insights into the world of
                  technology and innovation.
                </p>
              </div>
            </div>
          </div>

          <div className="text-cl-primary mt-4">Tasks</div>
          <div className="d-flex mt-3 justify-content-between align-items-center gap-4 flex-wrap">
            <div>
              <CommonPieChart />
            </div>
            <div className="d-flex justify-content-between flex-wrap flex-grow-1 gap-4">
              <div>
                <CommonStatusCountCard type={"TODO"} count={1} />
              </div>
              <div>
                <CommonStatusCountCard type={"ONGOING"} count={0} />
              </div>
              <div>
                <CommonStatusCountCard type={"COMPLETE"} count={0} />
              </div>
            </div>
          </div>

          <div className="d-flex mt-5 justify-content-between align-items-center flex-wrap gap-4">
            <div className="text-cl-primary mt-4">Board</div>
            <div className="d-flex justify-content-end gap-4 align-items-center flex-wrap">
              {isTaskAvailable && (
                <div>
                <CommonButton onClick={openTaskModal} text={"Add Tasks"} />
              </div>
              )}
              {isFinanceAvailable && (
                <div className="">
                  <CommonButton
                    onClick={() => {
                      navigateToFinance();
                    }}
                    text={"Finance"}
                  />
                </div>
              )}
              {isEventAvailable && (
                <div className="">
                  <CommonButton
                    onClick={() => {
                      navigateToEvents();
                    }}
                    text={"Events"}
                  />
                </div>
              )}
            </div>
          </div>

          <div className="d-flex flex-column bg-white common-shadow rounded-3 p-3 mt-4">
            <div className="d-flex justify-content-between align-items-center w-100 flex-wrap gap-4">
              <div>
                <CommonSearch />
              </div>
              <div className="">
                <select
                  className="form-select w-100"
                  aria-label="Large select example"
                >
                  <option selected>Assignee</option>
                  <option value="1">Me</option>
                </select>
              </div>
            </div>
            <div
              className="mt-4 d-flex justify-content-between overflow-scroll overflow-y-hidden custom-scrollbar"
              style={{ maxWidth: 1300 }}
            >
              <CommonDropAndDrag />
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-lg-8 p-3">
              <div className="d-flex bg-white common-shadow flex-column p-3 rounded-3">
                <div className="d-flex justify-content-between align-items-center gap-4 flex-wrap">
                  <div>
                    <h6 className="text-third fw-bold">Notes</h6>
                  </div>
                </div>

                <div className="mt-3 d-flex justify-content-end">
                  <div>
                    <CommonSearch primary={false} />
                  </div>
                </div>

                <div
                  className="mt-4 d-flex justify-content-between align-items-center gap-4 flex-wrap overflow-scroll overflow-x-hidden custom-scrollbar pb-3 ps-2 pe-2 pt-1"
                  style={{ maxHeight: 800 }}
                >
                  <CommonNoteContainer />
                </div>
                <div className="mt-3">
                  <div className="d-flex justify-content-between align-items-center gap-3">
                    <div class="form-group w-100">
                      <textarea
                        class="form-control"
                        placeholder="Add note here"
                        id="exampleFormControlTextarea1"
                      ></textarea>
                    </div>
                    <button className="bg-transparent border-0">
                      <img src={send} width={30} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 p-3">
              <div className="d-flex bg-white common-shadow flex-column p-3 rounded-3">
                <div className="d-flex justify-content-between align-items-center gap-4 flex-wrap">
                  <div>
                    <h6 className="text-third fw-bold">Project Members</h6>
                  </div>
                  {isAssignAvailable && (
                    <div>
                      <button className="bg-transparent border-0">
                        <img src={add} width={30} />
                      </button>
                    </div>
                  )}
                </div>

                <div className="mt-3">
                  <CommonSearch primary={false} />
                </div>

                <div
                  className="mt-4 d-flex justify-content-between align-items-center gap-1 flex-wrap overflow-scroll overflow-x-hidden custom-scrollbar"
                  style={{ maxHeight: 500 }}
                >
                  <CommonMemberContainer />
                </div>
              </div>
            </div>
          </div>
          <TaskModel show={showTaskModal} onHide={closeTaskModal} />
        </div>
      )}
    </>
  );
};

export default ProjectPage;
