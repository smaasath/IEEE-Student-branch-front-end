import React, { useEffect, useState } from "react";
import { Modal, Dropdown, DropdownButton } from "react-bootstrap";
import CommonButton from "../../common/commonButton/commonButton";
import CommonMemberContainer from "../../common/commonMemberContainer/commonMemberContainer";
import CommonSearch from "../../common/commonSearch/commonSearch";
import add from "../../../assets/icons/Add.png";
import flag from "../../../assets/images/Flag.png";
import star from "../../../assets/images/Star.png";
import deleted from '../../../assets/icons/delete.png';
import viewPrimary from '../../../assets/icons/viewPrimary.png'
import CommonTable from "../../common/commonTable/commonTable";
import CommonNoteContainer from "../../common/commonNoteContainer/commonNoteContainer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const TaskDetailModel = ({ onHide, show, taskData, project, excom }) => {
  if (!taskData) return null;

  const navigate = useNavigate();
  const [assignTask, setAssignTask] = useState(false);
  const [createTask, setCreateTask] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState("HIGH"); // Set default priority
  const userData = useSelector((state) => state.user.userData);
  const [pageLoading, setPageLoading] = useState(true);

  useEffect(() => {
    setPageLoading(true);
    if (userData && show && excom) {
      const isExcomAvailable = userData?.some(userRoleDetail =>
        userRoleDetail.role?.policies.some(policy => policy.policyCode === "EXCOM")
      );

      const isExcomTaskAvailable = userData?.some(userRoleDetail =>
        userRoleDetail.role?.policies.some(policy => policy.policyCode === "EXCOM_TASK")
      );

      const isExcomTaskAssignAvailable = userData?.some(userRoleDetail =>
        userRoleDetail.role?.policies.some(policy => policy.policyCode === "EXCOM_TASK_ASSIGN")
      );

      if (!isExcomAvailable) {
        navigate('/dashboard');
      } else {
        setAssignTask(isExcomTaskAssignAvailable);
        setCreateTask(isExcomTaskAvailable);
        setPageLoading(false);
      }
    }
  }, [userData, show]);

  const handlePrioritySelect = (eventKey) => {
    setSelectedPriority(eventKey);
  };

  const notes = [
    { date: "2023-01-02", author: "Jane Doe", content: "Sample note 2" },
  ];

  const tableHeading = [
    {
      label: "Task Title",
      value: "Task_title",
    },
    {
      label: "Priority",
      value: "priority",
    },
    {
      label: "Due",
      value: "due",
    },
    {
      label: "Status",
      value: "status",
    },
    {
      label: "Action",
      value: "ACTION",
      type: ["VIEW"]
    },
  ];

  const tableData = [];

  return (
    <Modal show={show} onHide={onHide} size="lg" centered fullscreen={true}>
      <Modal.Header closeButton>
        <Modal.Title className="text-cl-primary" id="contained-modal-title-vcenter">
          Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-lg-8">
            <div>
              <div className="mb-3 d-flex justify-content-between align-items-center">
                <div className="text-cl-primary">Main Task Title / Sub Task Title</div>
                {createTask ? (
                  <button className="bg-transparent border-0">
                    <img src={deleted} width={25} alt="Delete" />
                  </button>
                ) : null}
              </div>
              <h5><b>Create project banner.</b></h5>
              <div className="d-flex align-items-center mb-3">
                <div className="text-cl-primary mb-1 d-flex align-items-center">
                  <span className="ms-4">Status</span>
                </div>
                <button className="btn btn-success ms-3" style={{ backgroundColor: '#dff0d8', color: '#3c763d', border: 'none', padding: '5px 10px', borderRadius: '5px' }}>
                  Reviewed
                </button>
              </div>
              <div className="d-flex justify-content-between align-items-center mb-3" style={{ width: '250px', height: '38px' }}>
                <div className="text-cl-primary mb-1 d-flex align-items-center">
                  <img src={flag} style={{ width: '25px', height: '25px' }} alt="Flag" /> <span className="ms-2">Date</span>
                </div>
                <input type="date" className="form-control ms-3" id="date" value={taskData.date} />
              </div>
              <div className="d-flex align-items-center mb-3">
                <div className="text-cl-primary mb-1 d-flex align-items-center">
                  <img src={star} style={{ width: '20px', height: '20px' }} alt="Star" className="me-2" /> 
                  <span>Priority</span>
                </div>
                <DropdownButton
                  title={selectedPriority}
                  onSelect={handlePrioritySelect}
                  id="priority-dropdown"
                  variant="light"
                  className="ms-3"
                  style={{
                    backgroundColor: selectedPriority === "HIGH" ? "#fdecea" : selectedPriority === "MEDIUM" ? "#fff4e5" : "#e9f5f2",
                    border: "none",
                    borderRadius: "3px",
                    padding: "5px 10px",
                  }}
                >
                  <Dropdown.Item eventKey="HIGH" >High</Dropdown.Item>
                  <Dropdown.Item eventKey="MEDIUM" >Medium</Dropdown.Item>
                  <Dropdown.Item eventKey="LOW">Low</Dropdown.Item>
                </DropdownButton>
              </div>
              <div className="mb-3">
                <div className="text-cl-primary">
                  Created at <b>May, 15 2022 14:23 PM</b>
                </div>
              </div>
              <div className="mb-3">
                <div className="text-cl-primary">Description</div>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="mt-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="text-cl-primary">Sub Tasks</div>
                  {createTask ? (
                    <img src={add} alt="Add" style={{ width: '30px', height: '30px' }} />
                  ) : null}
                </div>
                <div className="d-flex">
                  <CommonSearch primary={true} />
                </div>
                <div className="mt-4">
                  <CommonTable
                    tableHeading={tableHeading}
                    primary={true}
                    tableData={tableData}
                    loading={false}
                    viewAction={() => {
                      // navigateToProject(id);
                    }}
                    editAction={() => {
                      // editProject(id);
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="bg-white rounded-3 common-shadow p-3">
              <h6 className="text-third fw-bold">Notes</h6>
              <div className="p-2">
                <CommonSearch primary={false} />
              </div>
              {notes.map((note, index) => (
                <div className="p-2" key={index}>
                  <CommonNoteContainer date={note.date} author={note.author} content={note.content} />
                </div>
              ))}
              <div className="d-flex bg-white common-shadow flex-column p-2 rounded-3">
                <div className="d-flex justify-content-between align-items-center gap-4 flex-wrap mt-4 p-2">
                  <div className="d-flex justify-content-between w-100 align-items-center">
                    <h6 className="text-third fw-bold">Assignees</h6>
                    {assignTask ? (
                      <img src={add} alt="Add" style={{ width: '30px', height: '30px' }} />
                    ) : null}
                  </div>
                </div>
                <div className="mt-3">
                  <CommonSearch primary={false} />
                </div>
                <div className="mt-4 d-flex justify-content-between align-items-center gap-1 flex-wrap overflow-scroll overflow-x-hidden custom-scrollbar" style={{ maxHeight: 500 }}>
                  <CommonMemberContainer />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-end mt-3">
        <div>
          <CommonButton onClick={onHide} close={true} text={"Cancel"} />
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default TaskDetailModel;
