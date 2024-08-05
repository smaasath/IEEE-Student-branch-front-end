import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CommonButton from '../../common/commonButton/commonButton';
import uploadimage from '../.../../../../assets/icons/upload.png';
import deleteimage from '../.../../../../assets/icons/delete.png';
import { createAcademicYear, updateAcademicYear } from '../../../redux/actions/academicYear';

const AddOuModel = ({ onHide, show, disabled, editable, item, changed }) => {
  const [formData, setFormData] = useState({
    enrolledBatch: "",
    academicYear: "",
    status: "",
    ouLogo: null
  });

  const [error, setError] = useState({
    enrolledBatch: false,
    academicYear: false,
    status: false,
    ouLogo: false
  });

  const [loading, setLoading] = useState(false);
  const [exist, setExist] = useState('');

  useEffect(() => { 
    if (!editable) {
      setFormData({
        enrolledBatch: "",
        academicYear: "",
        status: "",
        ouLogo: null
      });
    } else {
      setFormData(item);
    }

    setError({
      enrolledBatch: false,
      academicYear: false,
      status: false,
      ouLogo: false
    });

    setExist('');
  }, [show, editable, item]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: false }));
    setExist('');
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 1024 * 1024) {
        setError(prevError => ({ ...prevError, ouLogo: true }));
        setExist("Please select an image smaller than 1 MB.");
      } else if (!['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
        setError(prevError => ({ ...prevError, ouLogo: true }));
        setExist("Only PNG, JPG, and JPEG formats are allowed.");
      } else {
        setFormData(prevData => ({ ...prevData, ouLogo: URL.createObjectURL(file) }));
        setError(prevError => ({ ...prevError, ouLogo: false }));
        setExist('');
      }
    }
  };

  const handleDeleteClick = () => {
    setFormData(prevData => ({ ...prevData, ouLogo: null }));
  };

  function addAcademicYear() {
    setExist('');
    setError({
      enrolledBatch: false,
      academicYear: false,
      status: false,
      ouLogo: false
    });

    if (!formData.academicYear || !formData.enrolledBatch || formData.status === '' || !formData.ouLogo) {
      setError({
        academicYear: !formData.academicYear,
        enrolledBatch: !formData.enrolledBatch,
        status: formData.status === '' ? true : false,
        ouLogo: !formData.ouLogo
      });
      return;
    }

    setLoading(true);
    if (editable) {
      formData.academicId = item?.id;
      updateAcademicYear(formData, (res) => {
        if (res?.status === 200) {
          setLoading(false);
          changed();
          onHide();
        } else {
          setLoading(false);
          setExist("Academic Year Update Failed");
        }
      });
    } else {
      createAcademicYear(formData, (res) => {
        if (res?.status === 201) {
          setLoading(false);
          changed();
          onHide();
        } else if (res?.status === 409) {
          setLoading(false);
          setExist("Academic Year Already Exists");
        } else {
          setLoading(false);
          setExist("Academic Year Creation Failed");
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
              <label htmlFor="academicYear" className="form-label text-dark">OU Name</label>
              <input type="text" className={`form-control ${error.academicYear ? "is-invalid" : ""}`} name='academicYear' value={formData.academicYear} onChange={handleInputChange} id="academicYear" placeholder="OU Name" disabled={disabled} required />
              <div className="invalid-feedback">
                This field is required.
              </div>
            </div>
          </div>
          <div className='mt-3'>
            <div className="">
              <label htmlFor="enrolledBatch" className="form-label text-dark">OU Short Name</label>
              <input type="text" name='enrolledBatch' value={formData.enrolledBatch} onChange={handleInputChange} className={`form-control ${error.enrolledBatch ? "is-invalid" : ""}`} id="enrolledBatch" placeholder="OU Short Name" disabled={disabled} />
              <div className="invalid-feedback">
                This field is required.
              </div>
            </div>
          </div>
          <div className="mt-3 d-flex justify-content-center">
            {formData.ouLogo ? (
              <div className="p-1 border border-2 border-black d-flex flex-column justify-content-center align-items-center">
                <div style={{ position: 'relative', height: '180px', width: '360px', overflow: 'hidden' }}>
                  <img
                    src={formData.ouLogo}
                    className="img-fluid"
                    alt="OU Logo"
                    style={{ width: '100%', height: '100%' }}
                    loading="lazy"
                  />
                  <div
                    className="delete-button w-100 h-100 text-center d-flex align-items-center justify-content-center"
                    style={{ position: 'absolute', top: 0, left: 0, cursor: 'pointer' }}
                    onClick={handleDeleteClick}
                  >
                    <img
                      src={deleteimage}
                      alt="Delete"
                      width="30"
                      height="30"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="p-3 border border-2 border-black d-flex flex-column justify-content-center align-items-center bg-secondary-subtle"
                style={{ borderStyle: 'dotted', height: '180px', width: '360px', cursor: 'pointer' }}
                onClick={() => document.getElementById('customFile').click()}
              >
                <img
                  src={uploadimage}
                  alt="Upload the Logo"
                  loading="lazy"
                  className="text-center"
                  height="90"
                  width="90"
                />
                <input
                  type="file"
                  id="customFile"
                  style={{ visibility: 'hidden' }}
                  accept="image/png, image/jpeg"
                  onChange={handleImageChange}
                />
                <p>Click here to upload your image.</p>
              </div>
            )}
            {error.ouLogo && (
              <div className="mt-3">
                <p className="text-danger text-center">OU Logo is required</p>
              </div>
            )}
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

export default AddOuModel;
