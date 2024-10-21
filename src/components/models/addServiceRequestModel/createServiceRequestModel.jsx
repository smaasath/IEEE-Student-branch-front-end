import React, { useState } from "react";
import service from "../../../assets/images/serviceback.png";
import Modal from "react-bootstrap/Modal";
import CommonButton from "../../common/commonButton/commonButton";

const CreateServiceRequestModel = ({ onHide, show, view, edit }) => {
  const initialFormData = {
    due_date: "",
    email: "",
    remarks: "",
    excom: false,
    projects: false,
    others: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({
    due_date: false,
    email: false,
    remarks: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: false,
    }));
  };

  const handleSubmit = () => {
    // Validate form here if necessary
    // Submit form data
    console.log("Form Submitted:", formData);
    // Clear the form
    setFormData(initialFormData);
    // Close the modal
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} animation={true} size="md" centered>
      <Modal.Header closeButton>
        <Modal.Title className="text-cl-primary">Request Form</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column">
          <div className="">
            {view && (
              <div className="pb-3">
                <label htmlFor="due_date" className="Text-input-label pb-2">
                  Requested Date
                </label>
                <div>
                  <input
                    className="form-control"
                    type="date"
                    id="due_date"
                    name="due_date"
                    value={formData.due_date}
                    onChange={handleInputChange}
                    disabled
                  />
                </div>
              </div>
            )}

            <div className="pb-3">
              <label htmlFor="due_date" className="Text-input-label pb-2">
                Due Date
              </label>
              <div>
                <input
                  className="form-control"
                  type="date"
                  id="due_date"
                  name="due_date"
                  value={formData.due_date}
                  onChange={handleInputChange}
                  disabled = {view? true : false}
                />
              </div>
            </div>

            <div className="pb-3">
              <label htmlFor="email" className="Text-input-label pb-2">
                Email
              </label>
              <div>
                <input
                  className="form-control"
                  type="text"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled = {view? true : false}
                />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-around pb-3">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="excom"
                name="excom"
                checked={formData.excom}
                onChange={handleInputChange}
                disabled = {view? true : false}
              />
              <label className="form-check-label" htmlFor="excom">
                Excom
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="projects"
                name="projects"
                checked={formData.projects}
                onChange={handleInputChange}
                disabled = {view? true : false}
              />
              <label className="form-check-label" htmlFor="projects">
                Projects
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="others"
                name="others"
                checked={formData.others}
                onChange={handleInputChange}
                disabled = {view? true : false}
              />
              <label className="form-check-label" htmlFor="others">
                Others
              </label>
            </div>
          </div>
          <div className="pb-3">
            <label htmlFor="remarks" className="Text-input-label pb-2">
              Remarks
            </label>
            <div>
              <textarea
                className="form-control"
                id="remarks"
                name="remarks"
                rows={3}
                value={formData.remarks}
                onChange={handleInputChange}
                disabled = {view? true : false}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-end">
        <div>
          <CommonButton onClick={onHide} close={true} text={"Close"} />
        </div>
        {edit && (
          <div>
            <CommonButton text={"Submit"} width={150} onClick={handleSubmit} />
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
};

export default CreateServiceRequestModel;
