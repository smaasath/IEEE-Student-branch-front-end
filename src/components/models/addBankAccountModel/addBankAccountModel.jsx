
import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import CommonButton from '../../common/commonButton/commonButton';

const AddBankAccountModel = ({ onHide, show, disabled, editable, id }) => {
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
                        {editable ? "Edit" : disabled ? "View" : "Add"} Account
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex flex-column'>
                        <div className="mt-3">
                            <label for="exampleFormControlInput1" className="form-label text-dark">Bank</label>
                            <select className="form-select w-100" aria-label="Large select example" disabled={disabled}>
                                <option selected>Select bank</option>
                                <option value="1">BOC</option>
                                <option value="2">Sampath Bank</option>
                            </select>
                        </div>
                        <div className='mt-3'>
                            <div className="">
                                <label for="exampleFormControlInput1" className="form-label text-dark">Branch</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="branch" disabled={disabled} />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className="">
                                <label for="exampleFormControlInput1" className="form-label text-dark">Account Number</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="account number" disabled={disabled} />
                            </div>
                        </div>
                        <div className='mt-3'>
                            <div className="">
                                <label for="exampleFormControlInput1" className="form-label text-dark">Amount</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="amount" disabled={disabled} />
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
                                <CommonButton onClick={onHide} text={editable ? "Edit" : "Add"} />
                            </div>
                        )
                    }


                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddBankAccountModel
