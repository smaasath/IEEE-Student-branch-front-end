import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CommonButton from '../../common/commonButton/commonButton';

const CommonDeleteModel = ({ show, onHide, onclick, text, mode, loading, error }) => {
    return (
        <>
            <Modal
                show={show} onHide={onHide} animation={true}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title className='text-danger' id="contained-modal-title-vcenter">
                        Delete {mode}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='d-flex flex-column'>
                        <div className="mt-3">
                            Are you sure want to detete the <span className='fw-bolder'>{text}</span>?
                        </div>
                    </div>

                    {
                        error ? (
                            <div className="text-danger w-100 mt-3 text-center">
                                delete {mode} is failed.
                            </div>
                        ) : null
                    }
                </Modal.Body>
                <Modal.Footer className='d-flex justify-content-end'>
                    <div>
                        <CommonButton onClick={onHide} close={true} text={"Close"} />
                    </div>
                    <div>
                        <CommonButton load={loading} onClick={onclick} deleteButton={true} text={"Delete"} />
                    </div>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default CommonDeleteModel
