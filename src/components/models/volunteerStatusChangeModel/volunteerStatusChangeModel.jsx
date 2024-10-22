import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import CommonButton from '../../common/commonButton/commonButton';

const VolunteerStatusChangeModel = ({ onHide, show, id }) => {
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
                        Edit Status
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex flex-column'>
                        <div className="mt-3">
                            <label for="exampleFormControlInput1" className="form-label text-dark">Select Status</label>
                            <select className="form-select w-100" aria-label="Large select example">
                                <option selected>Select status</option>
                                <option value="REVIEWED">Reviewed</option>
                            </select>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-end'>
                    <div>
                        <CommonButton onClick={onHide} close={true} text={"Close"} />
                    </div>
                    <div>
                        <CommonButton onClick={onHide} text={"Save"} />
                    </div>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default VolunteerStatusChangeModel