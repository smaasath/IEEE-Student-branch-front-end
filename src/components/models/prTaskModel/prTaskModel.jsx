import React from "react";
import { Modal } from "react-bootstrap";
import CommonButton from "../../common/commonButton/commonButton";

const PrTaskModel = ({ onHide, show, prTaskData }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        animation={true}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            className="text-third"
            id="contained-modal-title-vcenter"
          >
            PR Task Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column">dasdasasd</div>
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-end">
          <div>
            <CommonButton onClick={onHide} close={true} text={"Close"} />
          </div>
          {
            <div>
              <CommonButton onClick={onHide} text="Save" />
            </div>
          }
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PrTaskModel;
