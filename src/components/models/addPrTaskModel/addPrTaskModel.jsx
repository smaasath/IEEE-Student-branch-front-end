import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import CommonButton from "../../common/commonButton/commonButton";

const AddPrTaskModel = ({ onHide, show }) => {
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
          <Modal.Title
            className="text-cl-primary"
            id="contained-modal-title-vcenter"
          >
            Create PR Task
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column">
            <div className="mt-3">
              <label
                for="exampleFormControlInput1"
                className="form-label text-dark"
              >
                Flyer Title
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Flyer Title"
              />
            </div>

            <div className="mt-3">
              <label
                for="exampleFormControlInput1"
                className="form-label text-dark"
              >
                Publish Date
              </label>
              <input
                type="date"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Publish Date"
              />
            </div>
            <div className="mt-3">
              <label
                for="exampleFormControlInput1"
                className="form-label text-dark"
              >
                Publish Time
              </label>
              <input
                type="time"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Publish Date"
              />
            </div>
            <div className="mt-3">
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Flyer Details</label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Description about flyer"
                ></textarea>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-end">
          <div>
            <CommonButton onClick={onHide} close={true} text={"Close"} />
          </div>
          <div>
            <CommonButton onClick={onHide} text={"Create"} />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddPrTaskModel;
