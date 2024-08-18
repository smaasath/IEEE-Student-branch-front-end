import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CommonButton from '../../common/commonButton/commonButton';

const TaskModel = ({ onHide, show }) => {
    const [taskName, setTaskName] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [priority, setPriority] = useState('low');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};

        if (!taskName.trim()) newErrors.taskName = 'This field is required.';
        if (!startDate) newErrors.startDate = 'This field is required.';
        if (!endDate) newErrors.endDate = 'This field is required.';
        else if (new Date(endDate) <= new Date(startDate)) newErrors.endDate = 'End date must be after start date';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = () => {
        if (validateForm()) {
           
            onHide();
        }
    };

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
                            <input 
                                type="text" 
                                className="form-control" 
                                id="taskName" 
                                placeholder="Enter task name" 
                                value={taskName} 
                                onChange={(e) => setTaskName(e.target.value)} 
                                required
                            />
                            {errors.taskName && <small className="text-danger">{errors.taskName}</small>}
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="startDate" className="form-label text-dark">Start Date</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                id="startDate" 
                                value={startDate} 
                                onChange={(e) => setStartDate(e.target.value)} 
                                required
                            />
                            {errors.startDate && <small className="text-danger">{errors.startDate}</small>}
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="endDate" className="form-label text-dark">End Date</label>
                            <input 
                                type="date" 
                                className="form-control" 
                                id="endDate" 
                                value={endDate} 
                                min={startDate} 
                                onChange={(e) => setEndDate(e.target.value)} 
                                required
                            />
                            {errors.endDate && <small className="text-danger">{errors.endDate}</small>}
                        </div>
                        <div className='mt-3'>
                            <label htmlFor="priority" className="form-label text-dark">Priority</label>
                            <select 
                                className="form-select" 
                                id="priority" 
                                value={priority} 
                                onChange={(e) => setPriority(e.target.value)} 
                                required
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                            </select>
                            {errors.priority && <small className="text-danger">{errors.priority}</small>}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-end'>
                    <div>
                        <CommonButton onClick={handleSubmit} text={"Create"} />
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default TaskModel;
