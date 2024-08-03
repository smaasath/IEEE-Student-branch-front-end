import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CommonButton from '../../common/commonButton/commonButton';
import { createAcademicYear, updateAcademicYear } from '../../../redux/actions/academicYear';


const TermYearModel = ({ onHide, show, disabled, editable, item, changed }) => {


  const [formData, setFormData] = useState({
    enrolledBatch: "",
    academicYear: "",
    status: "",
  });

  const [error, setError] = useState({
    enrolledBatch: false,
    academicYear: false,
    status: false,
  });

  const [loading, setLoading] = useState(false);
  const [exist, setExist] = useState('');

  useEffect(() => { 

    if (!editable) {
      setFormData({
        enrolledBatch: "",
        academicYear: "",
        status: "",
      });
    } else {
      setFormData(item)
    }

    setError({
      enrolledBatch: false,
      academicYear: false,
      status: false,
    });

    setExist('')

  }, [show])



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: false }));
    setExist('')
  };

  function addAcademicYear() {
    setExist('')
    setError({
      enrolledBatch: false,
      academicYear: false,
      status: false,
    });

    if (!formData.academicYear || !formData.enrolledBatch || formData.status == '') {
      setError({
        ...error,
        academicYear: !formData.academicYear,
        enrolledBatch: !formData.enrolledBatch,
        status: formData.status == '' ? true : false,
      });
      return;
    }

    setLoading(true)
    if (editable) {
      formData.acedemicId = item?.id;
      updateAcademicYear(formData, (res) => {
        if (res?.status == 200) {
          setLoading(false)
          changed()
          onHide()

        } else {
          setLoading(false)
          setExist("Acedemic Year Added Failed")
        }
      })
    } else {

      createAcademicYear(formData, (res) => {
        if (res?.status == 201) {
          setLoading(false)
          changed()
          onHide()

        } else if (res?.status == 409) {
          setLoading(false)
          setExist("Acedemic Year Already Exist")
        } else {
          setLoading(false)
          setExist("Acedemic Year Added Failed")
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
              <label htmlFor="exampleFormControlInput1" className="form-label text-dark">Academic Year</label>
              <input type="text" className={`form-control ${error.academicYear ? "is-invalid" : ""}`} name='academicYear' value={formData.academicYear} onChange={handleInputChange} id="exampleFormControlInput1" placeholder="Academic Year" disabled={disabled} required />
              <div class="invalid-feedback">
                This field is required.
              </div>
            </div>
          </div>
          <div className='mt-3'>
            <div className="">
              <label htmlFor="exampleFormControlInput1" className="form-label text-dark">Enrolled Batch</label>
              <input type="text" name='enrolledBatch' value={formData.enrolledBatch} onChange={handleInputChange} className={`form-control ${error.enrolledBatch ? "is-invalid" : ""}`} id="exampleFormControlInput1" placeholder="Enrolled Batch" disabled={disabled} />
              <div class="invalid-feedback">
                This field is required.
              </div>
            </div>
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
            <CommonButton load={loading} onClick={addAcademicYear} text={editable ? "Save" : "Add"} />
          </div>
        )}
      </Modal.Footer>
    </Modal>
  );
}

export default TermYearModel;
