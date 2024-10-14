import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommonPieChart from "../../../components/common/commonPieChart/commonPieChart";
import CommonStatusCountCard from "../../../components/common/commonStatusCountCard/commonStatusCountCard";
import CommonButton from "../../../components/common/commonButton/commonButton";
import { useNavigate } from "react-router-dom";
import CommonSearch from "../../../components/common/commonSearch/commonSearch";
import CommonDropAndDrag from "../../../components/common/commonDropAndDrag/commonDropAndDrag";
import Profile from "../../../assets/images/profile.png";
import BalloonImage from "../../../assets/images/Party Balloons.png";
import CreateTaskModel from "../../../components/models/createTaskModel/createTaskModel";
import TaskDetailModel from "../../../components/models/taskDetailModel/taskDetailModel";
import { useSelector } from "react-redux";
import CommonLoader from "../../../components/common/commonLoader/commonLoader";

function ExecutiveCommitteePage() {
  const { id } = useParams();
  const [showTaskModal, setShowTaskModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const navigate = useNavigate();
  const [taskPolicy, settaskPolicy] = useState(false);
  const userData = useSelector((state) => state.user.userData);
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    setPageLoading(true);
    if (userData) {
      const isExcomAvailable = userData?.some((userRoleDetail) =>
        userRoleDetail.role?.policies.some(
          (policy) => policy.policyCode === "EXCOM"
        )
      );

      const isExcomTaskAvailable = userData?.some((userRoleDetail) =>
        userRoleDetail.role?.policies.some(
          (policy) => policy.policyCode === "EXCOM_TASK"
        )
      );

      if (!isExcomAvailable) {
        navigate("/dashboard");
      } else {
        settaskPolicy(isExcomTaskAvailable);
        setPageLoading(false);
      }
    }
  }, [userData]);
  const navigateToexcomDetailPage = () => {
    navigate(`/dashboard/executive-committee/${id}/detail`);
  };

  const openTaskModal = () => {
    setShowTaskModal(true);
  };

  const closeTaskModal = () => {
    setShowTaskModal(false);
  };

  const openTaskDetailModel = (task) => {
    setSelectedTask(task);
  };

  const closeTaskDetailModel = () => {
    setSelectedTask(null);
  };

  return (
    <>
      {pageLoading ? (
        <CommonLoader />
      ) : (
        <>
          <div className="p-3">
            <div className="d-flex justify-content-end gap-4 align-items-center flex-wrap">
              {taskPolicy ? (
                <div>
                  <CommonButton onClick={openTaskModal} text={"Create Tasks"} />
                </div>
              ) : null}

              <div>
                <CommonButton
                  onClick={navigateToexcomDetailPage}
                  text={"Excom Details"}
                />
              </div>
            </div>

            <div className="text-cl-primary mt-4">Tasks</div>
            <div className="d-flex mt-3 justify-content-between align-items-center gap-4 flex-wrap">
              <div onClick={() => openTaskDetailModel("Pie Chart")}>
                <CommonPieChart />
              </div>
              <div className="d-flex justify-content-between flex-wrap flex-grow-1 gap-4">
                <div>
                  <CommonStatusCountCard type={"TODO"} count={1} />
                </div>
                <div>
                  <CommonStatusCountCard type={"ONGOING"} count={2} />
                </div>
                <div>
                  <CommonStatusCountCard type={"COMPLETE"} count={4} />
                </div>
              </div>
            </div>

            <div className="d-flex mt-5 justify-content-between align-items-center flex-wrap gap-4">
              <div className="text-cl-primary mt-4">Board</div>
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
                <CommonDropAndDrag excom={true} id={id}/>
              </div>
            </div>

            <div className="d-flex mt-5 justify-content-between align-items-center flex-wrap gap-4">
              <div className="text-cl-primary mt-4">Upcoming Birthday</div>
            </div>

            <div className="container mt-4">
              <div className="row">
                {[1].map((index) => (
                  <div key={index} className="col-md-3">
                    <div
                      className="card"
                      onClick={() => openTaskDetailModel(`Task ${index}`)}
                    >
                      <div className="card-body d-flex align-items-center">
                        <img
                          src={Profile}
                          alt="Profile"
                          className="rounded-circle me-3"
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover",
                          }}
                        />
                        <div>
                          <h5>
                            <b>Ishara Suvini</b>
                          </h5>
                          <span>Web Master</span>
                        </div>
                      </div>
                      <div
                        className="card-footer"
                        style={{ backgroundColor: "#0E2954", color: "white" }}
                      >
                        <small className="text-white">Date of Birth</small>
                        <div className="d-flex align-items-center">
                          <span className="fs-4">22nd October</span>
                          <img
                            src={BalloonImage}
                            alt="Balloon"
                            style={{ width: "30px", marginLeft: "auto" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <CreateTaskModel show={showTaskModal} onHide={closeTaskModal} type={'EXCOM'} ouID={id}/>
          </div>
        </>
      )}
    </>
  );
}

export default ExecutiveCommitteePage;
