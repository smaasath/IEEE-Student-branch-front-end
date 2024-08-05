import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CommonButton from '../../common/commonButton/commonButton';
import { createPolicy, updatePolicy } from '../../../redux/actions/policy';

const PolicyModel = ({ onHide, show, disabled, editable, item, changed }) => {

  const [formData, setFormData] = useState({
    policy: "",
    type: "",
    policyCode: "",
  });

  const [error, setError] = useState({
    policy: false,
    type: false,
    policyCode: false,
  });

  const [loading, setLoading] = useState(false);
  const [exist, setExist] = useState('');

  useEffect(() => {
    if (!editable) {
      setFormData({
        policy: "",
        type: "",
        policyCode: "",
      });
    } else {
      setFormData(item);
    }

    setError({
      policy: false,
      type: false,
      policyCode: false,
    });

    setExist('');
  }, [show, editable, item]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: false }));
    setExist('');
  };

  function addPolicy() {
    setExist('');
    setError({
      policy: false,
      type: false,
      policyCode: false,
    });

    if (!formData.policy || !formData.policyCode || formData.type === '') {
      setError({
        ...error,
        policy: !formData.policy,
        policyCode: !formData.policyCode,
        type: formData.type === '' ? true : false,
      });
      return;
    }

    setLoading(true);
    if (editable) {
      formData.policyID = item?.id;
      updatePolicy(formData, (res) => {
        if (res?.status === 200) {
          setLoading(false);
          changed();
          onHide();
        } else {
          setLoading(false);
          setExist("Policy Update Failed");
        }
      });
    } else {
      createPolicy(formData, (res) => {
        if (res?.status === 201) {
          setLoading(false);
          changed();
          onHide();
        } else if (res?.status === 409) {
          setLoading(false);
          setExist("Policy Already Exists");
        } else {
          setLoading(false);
          setExist("Policy Creation Failed");
        }
      });
    }
  }

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
            <div className="has-validation">
              <label htmlFor="policy" className="form-label text-dark">Policy Name</label>
              <input
                type="text"
                name='policy'
                value={formData.policy}
                onChange={handleInputChange}
                className={`form-control ${error.policy ? "is-invalid" : ""}`}
                id="policy"
                placeholder="Policy Name"
                disabled={disabled}
              />
              <div className="invalid-feedback">
                This field is required.
              </div>
            </div>
          </div>
          <div className="mt-3">
            <div className="has-validation">
              <label htmlFor="type" className="form-label text-dark">Type</label>
              <select
                name='type'
                value={formData.type}
                onChange={handleInputChange}
                className={`form-select ${error.type ? "is-invalid" : ""}`}
                aria-label="Select Type"
                id="type"
                disabled={disabled}
              >
                <option value=''>Select Type</option>
                <option value="MAIN">Main</option>
                <option value="SUB">Sub</option>
              </select>
              <div className="invalid-feedback">
                This field is required.
              </div>
            </div>
          </div>
          <div className='mt-3'>
            <div className="has-validation">
              <label htmlFor="policyCode" className="form-label text-dark">Policy Code</label>
              <input
                type="text"
                name='policyCode'
                value={formData.policyCode}
                onChange={handleInputChange}
                className={`form-control ${error.policyCode ? "is-invalid" : ""}`}
                id="policyCode"
                placeholder="Policy Code"
                disabled={disabled}
              />
              <div className="invalid-feedback">
                This field is required.
              </div>
            </div>
          </div>
          <div className='text-danger text-center mt-4'>
            {exist}
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-end'>
        <div>
          <CommonButton onClick={onHide} close={true} text={"Close"} />
        </div>
        {disabled ? null : (
          <div>
            <CommonButton load={loading} onClick={addPolicy} text={editable ? "Save" : "Add"} />
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default PolicyModel;
