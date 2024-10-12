import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CommonButton from '../../common/commonButton/commonButton';
import uploadimage from '../.../../../../assets/icons/upload.png';
import deleteimage from '../.../../../../assets/icons/delete.png';
import { uploadImage } from '../../../redux/actions/imageUpload';
import { useDispatch } from 'react-redux';
import { CreateOU, updateOU } from '../../../redux/actions/ou';


const AddOuModel = ({ onHide, show, disabled, editable, item, changed }) => {


  const [formData, setFormData] = useState({
    ouName: "",
    ou_logo: "",
    ou_short_name: "",
  });


  const [error, setError] = useState({
    ouName: false,
    ou_logo: false,
    ou_short_name: false,
  });

  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [exist, setExist] = useState('');
  const distpatch = useDispatch();

  useEffect(() => {
    if (!editable) {
      setFormData({
        ouName: "",
        ou_logo: "",
        ou_short_name: "",
      });
    } else {
      setFormData(item);
    }

    setError({
      ouName: false,
      ou_logo: false,
      ou_short_name: false,
    });
    setImage(null)
    setExist('');
  }, [show, editable, item]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: false }));
    setExist('');
  };

  const handleImageChange = (e) => {
    setExist('');
    setError(prevData => ({ ...prevData, ou_logo: false }))
    const file = e.target.files[0];
    if (file) {
      if (file.size > 1024 * 1024) {
        setExist("Please select an image smaller than 1 MB.");
      } else if (!['image/png', 'image/jpeg', 'image/jpg'].includes(file.type)) {
        setExist("Only PNG, JPG, and JPEG formats are allowed.");
      } else {
        console.log("fileeee")
        setImage(file);
        setExist('');
      }
    }
  };


  const handleProfileUpload = async (selectedFile) => {
    if (!selectedFile) return;
    const uploadedImageUrl = await distpatch(uploadImage(selectedFile));
    console.warn(uploadedImageUrl)
    return uploadedImageUrl
  };

  const handleDeleteClick = () => {
    setImage(null)
    setFormData(prevData => ({ ...prevData, ou_logo: '' }));
  };

  async function addAcademicYear() {
    setExist('');
    setError({
      ouName: false,
      ou_logo: false,
      ou_short_name: false,
    });

    const hasErrors = {
      ouName: !formData.ouName,
      ou_logo: !formData.ou_logo && !image,
      ou_short_name: !formData.ou_short_name
    };



    if (hasErrors.ouName || hasErrors.ou_logo || hasErrors.ou_short_name) {
      if (image) {
        hasErrors.ou_logo = false;
      }

      setError(hasErrors);
      return;
    }



    setLoading(true);
    if (editable) {
      let updatedFormData = { ...formData };
  
      // If image is not null, upload the image; otherwise, keep the existing logo
      if (image) {
        const imgurl = await handleProfileUpload(image);
        updatedFormData = { ...updatedFormData, project_logo: imgurl };
      }
  
      updatedFormData.projectID = item?.id;
      updateOU(updatedFormData, (res) => {
        if (res?.status === 200) {
          setLoading(false);
          changed();
          onHide();
        } else {
          setLoading(false);
          setExist("Project Update Failed");
        }
      });
    } else {
      let updatedFormData = { ...formData };
      const imgurl = await handleProfileUpload(image);
      updatedFormData = { ...updatedFormData, project_logo: imgurl };
      CreateOU(updatedFormData, (res) => {
        if (res?.status === 201) {
          setLoading(false);
          resetFields();
          changed();
          onHide();
        } else if (res?.status === 409) {
          setLoading(false);
          setExist("Project Already Exists");
        } else {
          setLoading(false);
          setExist("Project Creation Failed");
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
              <input
                type="text"
                className={`form-control ${error.ouName ? "is-invalid" : ""}`}
                name='ouName'
                value={formData.ouName}
                onChange={handleInputChange}
                id="ouName"
                placeholder="OU Name"
                disabled={disabled}
                required
              />
              <div className="invalid-feedback">
                This field is required.
              </div>
            </div>
          </div>
          <div className='mt-3'>
            <div className="">
              <label htmlFor="enrolledBatch" className="form-label text-dark">OU Short Name</label>
              <input type="text"
                name='ou_short_name'
                value={formData.ou_short_name}
                onChange={handleInputChange}
                className={`form-control ${error.ou_short_name ? "is-invalid" : ""}`}
                id="ou_short_name" placeholder="OU Short Name"
                disabled={disabled} />
              <div className="invalid-feedback">
                This field is required.
              </div>
            </div>
          </div>


          <label htmlFor="academicYear" className="form-label mt-3 text-dark">OU logo</label>
          <div className=" d-flex flex-column align-items-center justify-content-center">
            {image != null || formData.ou_logo != '' ? (
              <div className="p-1 border border-2 border-black d-flex flex-column justify-content-center align-items-center">
                <div style={{ position: 'relative', height: '180px', width: '360px', overflow: 'hidden' }}>
                  <img
                    src={image != null ? URL.createObjectURL(image) : formData.ou_logo}
                    className="img-fluid object-fit-cover"
                    alt="OU Logo"
                    style={{ width: '100%', height: '100%' }}
                    loading="lazy"
                  />
                  <div
                    className="delete-button w-100 h-100 text-center d-flex align-items-center justify-content-center"
                  >
                    <div>
                      <img
                        style={{ cursor: "pointer" }}
                        onClick={handleDeleteClick}
                        src={deleteimage}
                        alt="Delete"
                        width="30"
                        height="30"
                        loading="lazy"
                      />
                    </div>

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
                <p>Click here to upload OU Logo.</p>
              </div>
            )}
          </div>
          <div className='text-danger text-center mt-4'>
            {error.ou_logo && (
              <div className="mt-3">
                <p className="text-danger text-center">OU Logo is required</p>
              </div>
            )}
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
