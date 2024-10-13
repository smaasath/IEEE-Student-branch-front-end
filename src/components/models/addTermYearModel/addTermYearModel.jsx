import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CommonButton from '../../common/commonButton/commonButton';
import { createTermYear, updateTermYear } from '../../../redux/actions/termYear';


const TermYearModel = ({ onHide, show, disabled, editable, item, changed }) => {


  const [formData, setFormData] = useState({
    termyear: "",
    status: "",
  });

  const [error, setError] = useState({
    termyear: false,
    status: false,
  });

  const [loading, setLoading] = useState(false);
  const [exist, setExist] = useState('');
  const [validationMessage, setValidationMessage] = useState('');

  useEffect(() => { 

    if (!editable) {
      setFormData({
        termyear: "",
        status: "",
      });
    } else {
      setFormData(item)
    }

    setError({
      termyear: false,
      status: false,
    });

    setExist('')
    setValidationMessage('');

  }, [show])



  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Check if the value is not numeric
    if (name === 'termyear' && isNaN(value)) {
      setValidationMessage('Please only input numbers');
      setError((prevError) => ({ ...prevError, termyear: true }));
    } else {
      setValidationMessage('');
      setError((prevError) => ({ ...prevError, termyear: false }));
    }

    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: false }));
    setExist('')
  };

  function addTermYear() {
    setExist('')
    setError({
      termyear: false,
      status: false,
    });

    if (!formData.termyear ||  formData.status == '') {
      setError({
        ...error,
        termyear: !formData.termyear,
        status: formData.status == '' ? true : false,
      });
      return;
    }

    setLoading(true)
    if (editable) {
      formData.termyearId = item?.id;
      updateTermYear(formData, (res) => {
        console.log(res.data);
        if (res?.status == 200) {
          setLoading(false)
          changed()
          onHide()

        } else {
          setLoading(false)
          setExist("Term Year Added Failed")
        }
      })
    } else {

      createTermYear(formData, (res) => {
        if (res?.status == 201) {
          setLoading(false)
          changed()
          onHide()

        } else if (res?.status == 409) {
          setLoading(false)
          setExist("Term Year Already Exist")
        } else {
          setLoading(false)
          setExist("Term Year Added Failed")
        }


      })
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
              <label htmlFor="exampleFormControlInput1" className="form-label text-dark">Term Year</label>
              <input
                type="text"
                className={`form-control ${error.termyear ? "is-invalid" : ""}`}
                name='termyear'
                value={formData.termyear}
                onChange={handleInputChange}
                id="exampleFormControlInput1"
                placeholder="Term Year"
                disabled={disabled}
                required
              />

              <div class="invalid-feedback">
                This field is required.
              </div>
              {validationMessage && (
                <div className="text-danger mt-1">
                  {validationMessage}
                </div>
              )}
            </div>
          </div>
          <div className='mt-3'>
          </div>
          <div className="mt-3">
            <label htmlFor="exampleFormControlInput1" className="form-label text-dark">Status</label>
            <select value={formData.status} name='status' onChange={handleInputChange} className={`form-select w-100 ${error.status ? "is-invalid" : ""}`} aria-label="Large select example" disabled={disabled}>
              <option value={''}>Select Status</option>
              <option value="ACTIVE">Active</option>
              <option value="DEACTIVE">Deactive</option>
            </select>
            <div class="invalid-feedback">
              This field is required.
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
            <CommonButton load={loading} onClick={addTermYear} text={editable ? "Save" : "Add"} />
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default TermYearModel;
