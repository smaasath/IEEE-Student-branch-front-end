import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import CommonButton from '../../common/commonButton/commonButton';

const ProjectModel = ({ onHide, show, disabled, editable, id }) => {
    return (
        <>
            <Modal
                show={show} onHide={onHide} animation={true}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='text-cl-primary' id="contained-modal-title-vcenter">
                        {editable ? "Edit" : disabled ? "View" : "Add"} Project
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex flex-column'>
                        <div className="mt-3">
                            <label for="exampleFormControlInput1" className="form-label text-dark">Bank</label>
                            <select className="form-select w-100" aria-label="Large select example" disabled={disabled}>
                                <option selected>Select Entity</option>
                                <option value="1">CS Chapter</option>
                            </select>
                        </div>
                        <div className='mt-3'>
                            <div className="">
                                <label for="exampleFormControlInput1" className="form-label text-dark">Project Title</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="project title" disabled={disabled} />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className="">
                                <label for="exampleFormControlInput1" className="form-label text-dark">Start Date</label>
                                <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="account number" disabled={disabled} />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className="">
                                <label for="exampleFormControlInput1" className="form-label text-dark">End date</label>
                                <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="amount" disabled={disabled} />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Description</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" disabled={disabled}></textarea>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-end'>
                    <div>
                        <CommonButton onClick={onHide} close={true} text={"Close"} />
                    </div>
                    {
                        disabled ? null : (
                            <div>
                                <CommonButton onClick={onHide} text={editable ? "Save" : "Add"} />
                            </div>
                        )
                    }


                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ProjectModel
