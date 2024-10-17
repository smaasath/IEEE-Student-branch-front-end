import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import CommonButton from "../../common/commonButton/commonButton";
import { useDispatch } from "react-redux"; // Import useDispatch to dispatch actions
import { updatEvent } from "../../../redux/actions/event";
import { useParams } from "react-router-dom";

const EditEventModal = ({ onHide, show, eventData, editable }) => {
  const [formData, setFormData] = useState(eventData || {});
  const dispatch = useDispatch(); // Initialize dispatch
  const { id: projectID } = useParams();

  console.log("eventData in edit model");

  // Use useEffect to update formData when eventData changes
  useEffect(() => {
    if (eventData) {
      setFormData(eventData);
    }
  }, [eventData]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // console.log("formdata",formData)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    const updatedData = {
      eventName: formData.eventName,
      status: "ACTIVE",
      eventLink: formData.eventLink,
      date: formData.date.split("T")[0],
      venue: formData.venue,
      image: formData.image,
      description: formData.description,
    };

    console.log(updatedData);

    dispatch(
      updatEvent(projectID, eventData.id, updatedData, (res) => {
        if (res?.status == 201) {
          console.log("event updated");
          onHide();
        } else {
          console.log("event not updated");
        }
      })
    );

    // dispatch(
    //     updatEvent(projectID, eventData.id, updatedData, (res)))
    //     .then(() => {
    //         onHide();
    //     })
    //     .catch((error) => {
    //         console.error('Error updating event:', error);

    //     }
    // );
  };

  if (!eventData) return null;

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
        <Modal.Title
          className="text-cl-primary"
          id="contained-modal-title-vcenter"
        >
          Edit Details
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleSubmit}>
          {" "}
          {/* Wrap the form fields in a form tag */}
          <div className="d-flex flex-column align-items-center">
            <div className="w-100">
              <div className="mb-3">
                <label className="form-label text-dark">Event Name</label>
                <input
                  type="text"
                  name="eventName"
                  className="form-control"
                  value={formData.eventName || ""}
                  onChange={editable ? handleInputChange : undefined}
                  disabled={!editable} // Make input non-editable based on editable prop
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-dark">Date</label>
                <input
                  type="text"
                  name="date"
                  className="form-control"
                  value={formData.date || ""}
                  onChange={editable ? handleInputChange : undefined}
                  disabled={!editable}
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-dark">Venue</label>
                <input
                  type="text"
                  name="venue"
                  className="form-control"
                  value={formData.venue || ""}
                  onChange={editable ? handleInputChange : undefined}
                  disabled={!editable}
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-dark">Description</label>
                <textarea
                  name="description"
                  className="form-control text-red"
                  value={formData.description || ""}
                  onChange={editable ? handleInputChange : undefined}
                  rows={4}
                  disabled={!editable}
                />
              </div>
              <div className="mb-3">
                <label className="form-label text-dark">Link</label>
                <input
                  type="text"
                  name="eventLink"
                  className="form-control"
                  value={formData.eventLink || ""}
                  onChange={editable ? handleInputChange : undefined}
                  disabled={!editable}
                />
              </div>
            </div>
          </div>
        </form>
      </Modal.Body>

      <Modal.Footer className="d-flex justify-content-end mt-3">
        <div>
          <CommonButton onClick={handleSubmit} text={"Save"} />{" "}
          {/* Save button will submit the form */}
        </div>
      </Modal.Footer>
    </Modal>
  );
};

export default EditEventModal;
