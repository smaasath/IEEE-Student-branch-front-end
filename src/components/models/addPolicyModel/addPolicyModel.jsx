import React from 'react';
import Modal from 'react-bootstrap/Modal';
import CommonButton from '../../common/commonButton/commonButton';

const PolicyModel = ({ onHide, show, disabled, editable, id }) => {
  return (
    <Modal
      show={show} onHide={onHide} animation={true}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className='text-cl-primary' id="contained-modal-title-vcenter">
          {editable ? "Edit" : disabled ? "View" : "Add"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='d-flex flex-column'>
          <div className='mt-3'>
            <div className="">
              <label htmlFor="exampleFormControlInput1" className="form-label text-dark">Policy Name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Policy Name" disabled={disabled} />
            </div>
          </div>
          <div className="mt-3">
            <label htmlFor="exampleFormControlInput1" className="form-label text-dark">Type</label>
            <select className="form-select w-100" aria-label="Large select example" disabled={disabled}>
              <option>Select Type</option>
              <option value="1">pl</option>
            </select>
          </div>
          <div className='mt-3'>
            <div className="">
              <label htmlFor="exampleFormControlInput1" className="form-label text-dark">Policy Code</label>
              <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Policy Code" disabled={disabled} />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-end'>
        <div>
          <CommonButton onClick={onHide} close={true} text={"Close"} />
        </div>
        {disabled ? null : (
          <div>
            <CommonButton onClick={onHide} text={editable ? "Save" : "Add"} />
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default PolicyModel;
