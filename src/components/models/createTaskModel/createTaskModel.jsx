import React from 'react';
import Modal from 'react-bootstrap/Modal';
import CommonButton from '../../common/commonButton/commonButton';

const TaskModel = ({ onHide, show }) => {
    return (
        <>
            <Modal
                show={show}
                onHide={onHide}
                animation={true}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='text-cl-primary' id="contained-modal-title-vcenter">
                        Create Task
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex flex-column'>
                        <div className="mt-3">
                            <label htmlFor="taskName" className="form-label text-dark">Task Name</label>
                            <input type="text" className="form-control" id="taskName" placeholder="Enter task name" />
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="startDate" className="form-label text-dark">Start Date</label>
                            <input type="date" className="form-control" id="startDate" />
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="endDate" className="form-label text-dark">End Date</label>
                            <input type="date" className="form-control" id="endDate" />
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="priority" className="form-label text-dark">Priority</label>
                            <select className="form-select" id="priority">
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-end'>
                    
                    <div>
                        <CommonButton onClick={onHide} text={"Create"} />
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TaskModel;
