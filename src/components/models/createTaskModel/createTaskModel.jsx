
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CommonButton from '../../common/commonButton/commonButton';
import { createTask } from '../../../redux/actions/task';

const TaskModel = ({ onHide, show }) => {
    const [formData, setFormData] = useState({
        task_name: '',
        type: 'EXCOM',       // Assuming 'EXCOM' is a default type
        start_date: '',
        end_date: '',
        priority: '',
        ou_id: 1              // Assuming '1' is a default ou_id
    });

    const [errors, setErrors] = useState({
        task_name: false,
        start_date: false,
        end_date: false,
    });

    const [loading, setLoading] = useState(false);

    const validateForm = () => {
        let isValid = true;
        const newErrors = { task_name: false, start_date: false, end_date: false };
        const today = new Date().toISOString().split('T')[0];

        if (!formData.task_name.trim()) {
            newErrors.task_name = 'This field is required.';
            isValid = false;
        }
        if (!formData.start_date) {
            newErrors.start_date = 'This field is required.';
            isValid = false;
        } else if (formData.start_date < today) {
            newErrors.start_date = 'Start date can\'t be a past date.';
            isValid = false;
        }

        if (!formData.end_date) {
            newErrors.end_date = 'This field is required.';
            isValid = false;
        } else if (new Date(formData.end_date) <= new Date(formData.start_date)) {
            newErrors.end_date = 'End date must be after start date';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: false
        }));
    };

    const handleSubmit = () => {
        if (validateForm()) {
            setLoading(true);
            console.log("work");

            createTask(formData, (res) => {
                if (res?.status === 201) {
                    onHide();
                } else {
                    setLoading(false);
                }
            });
        }
    };

    return (
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
                            className={`form-control ${errors.task_name ? "is-invalid" : ""}`} 
                            id="task_name" 
                            name="task_name"
                            placeholder="Enter task name" 
                            value={formData.task_name} 
                            onChange={handleInputChange} 
                            required
                        />
                        {errors.task_name && <small className="text-danger">{errors.task_name}</small>}
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="startDate" className="form-label text-dark">Start Date</label>
                        <input 
                            type="date" 
                            className={`form-control ${errors.start_date ? "is-invalid" : ""}`} 
                            id="start_date" 
                            name="start_date"
                            value={formData.start_date} 
                            onChange={handleInputChange} 
                            required
                        />
                        {errors.start_date && <small className="text-danger">{errors.start_date}</small>}
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="endDate" className="form-label text-dark">End Date</label>
                        <input 
                            type="date" 
                            className={`form-control ${errors.end_date ? "is-invalid" : ""}`} 
                            id="end_date" 
                            name="end_date"
                            value={formData.end_date} 
                            min={formData.start_date} 
                            onChange={handleInputChange} 
                            required
                        />
                        {errors.end_date && <small className="text-danger">{errors.end_date}</small>}
                    </div>
                    <div className='mt-3'>
                        <label htmlFor="priority" className="form-label text-dark">Priority</label>
                        <select 
                            className="form-select" 
                            id="priority" 
                            name="priority"
                            value={formData.priority} 
                            onChange={handleInputChange} 
                            required
                        >
                            <option value="LOW">Low</option>
                            <option value="MEDIUM">Medium</option>
                            <option value="HIGH">High</option>
                        </select>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-end'>
                <div>
                    <CommonButton onClick={onHide} close={true} text={"Close"} />
                </div>
                <div>
                    <CommonButton load={loading} onClick={handleSubmit} text={"Create"} />
                </div>
            </Modal.Footer>
        </Modal>
    );
}

export default TaskModel;
