import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import CommonButton from "../../common/commonButton/commonButton";
import CommonMemberContainer from "../../common/commonMemberContainer/commonMemberContainer";
import CommonSearch from "../../common/commonSearch/commonSearch";
import add from "../../../assets/icons/Add.png";
import CommonTable from "../../common/commonTable/commonTable";
import CommonNoteContainer from "../../common/commonNoteContainer/commonNoteContainer";

const TaskDetailModel = ({ onHide, show, taskData }) => {
  if (!taskData) return null;

  const notes = [
    { date: "2023-01-01", author: "John Doe", content: "Sample note 1" },
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
        value: "action",
    },
  ];

  const tableData = [
    {
      Task_title: "Lorem ipsum dolor sit amet, cons",
      priority: "Medium",
      due: "2024/12/11",
      status: "completed",
      action: "VIEW",
    },
    {
      Task_title: "Lorem ipsum dolor sit amet, cons",
      priority: "Medium",
      due: "2024/12/11",
      status: "completed",
      action: "VIEW",
    },
    {
      Task_title: "Lorem ipsum dolor sit amet, cons",
      priority: "Medium",
      due: "2024/12/11",
      status: "completed",
      action: "VIEW",
    },
  ];

  return (
    <Modal show={show} onHide={onHide} size="lg" centered fullscreen={true}>
      <Modal.Header closeButton>
        <Modal.Title className="text-cl-primary" id="contained-modal-title-vcenter">
          Task Details
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-lg-8">
            <Form>
              <Form.Group className="mb-3">
              <div className='text-cl-primary'>Main Task Title/Sub Task Title</div>
                <Form.Control type="text" readOnly value={taskData} />
              </Form.Group>
              <Form.Group className="mb-3">
              <div className='text-cl-primary'>Description</div>
                <Form.Control as="textarea" rows={3} placeholder="Autosize height based on content lines" />
              </Form.Group>
              <div className="mt-4">
                <div className="d-flex justify-content-between align-items-center">
                <div className='text-cl-primary'>Sub Tasks</div>
                <img src={add} alt="Add" style={{ width: '30px', height: '30px' }} />
                </div>
                <div className='d-flex'>
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
            </Form>
          </div>
          <div className="col-lg-4">
            <div className="bg-white rounded-3 common-shadow p-3">
              <h6 className="text-third fw-bold">Notes</h6>
              <div className="p-2">
              <CommonSearch primary={false} />
              </div>
              <div className="p-2">
              <CommonNoteContainer/>
              </div>
              <div className="p-2">
              <CommonNoteContainer/>
              </div>
              <div className='d-flex bg-white common-shadow flex-column p-2 rounded-3'>
                        <div className='d-flex justify-content-between align-items-center gap-4 flex-wrap mt-4 p-2'>
                            <div>
                                <h6 className='text-third fw-bold'>Assignees</h6>
                            </div>
                        </div>

                        <div className='mt-3'>
                            <CommonSearch primary={false} />
                        </div>

                        <div className='mt-4 d-flex justify-content-between align-items-center gap-1 flex-wrap overflow-scroll overflow-x-hidden custom-scrollbar' style={{ maxHeight: 500 }}>
                            <CommonMemberContainer />
                            <CommonMemberContainer />
                            <CommonMemberContainer />
                            <CommonMemberContainer />
                            <CommonMemberContainer />
                            <CommonMemberContainer />
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
