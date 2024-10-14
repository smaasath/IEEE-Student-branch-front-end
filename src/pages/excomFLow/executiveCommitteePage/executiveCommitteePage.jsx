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
import TaskModel from "../../../components/models/createTaskModel/createTaskModel";
import TaskDetailModel from "../../../components/models/taskDetailModel/taskDetailModel";
import { useSelector } from "react-redux";
import CommonLoader from "../../../components/common/commonLoader/commonLoader";
import { PolicyValidate } from "../../../utils/valitations/Valitation";

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
      const isExcomAvailable = PolicyValidate(userData,"EXCOM");

      const isExcomTaskAvailable = PolicyValidate(userData,"EXCOM_TASK");

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
                <CommonDropAndDrag id={id} excom={true} />
              </div>
            </div>
            <TaskModel show={showTaskModal} onHide={closeTaskModal} />
          </div>
        </>
      )}
    </>
  );
}

export default ExecutiveCommitteePage;
