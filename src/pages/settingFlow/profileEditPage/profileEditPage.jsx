import React, { useState, useEffect } from "react";
import Facebook from "../../../assets/icons/Facebook.png";
import Linkedin from "../../../assets/icons/LinkedIn Circled.png";
import profile from "../../../assets/images/profile.png";
import CommonButton from "../../../components/common/commonButton/commonButton";
import EditProfileModal from "../../../components/models/editProfileModel/editProfileModel";
import { useSelector } from "react-redux";

const ProfileCard = ({ photo, name, role }) => {
  return (
    <div
      className="card"
      style={{
        borderRadius: "10px",
        padding: "20px",
        position: "relative",
        width: "450px",
      }}
    >
      <div className="card-body d-flex">
        <img
          src={photo}
          alt="Profile"
          className="img-thumbnail me-3 rounded-circle"
          style={{ width: "100px", height: "100px", objectFit: "cover" }}
        />
        <div>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{role}</p>
          <div className="d-flex gap-2">
            <img src={Facebook} alt="Facebook" />
            <img src={Linkedin} alt="Linkedin" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileEditPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(profile);
  const [isEditable, setIsEditable] = useState(false);
  const userData = useSelector((state) => state.user.userData);

  const [formData, setFormData] = useState({
    bio: "",
    role: "",
    profilePic: "",
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    contactNo: "",
    ieeeEmail: "",
    location: "",
    ieeeNumber: "",
  });

  const [error, setError] = useState({
    bio: false,
    role: false,
    profilePic: false,
    firstName: false,
    lastName: false,
    userName: false,
    email: false,
    contactNo: false,
    ieeeEmail: false,
    location: false,
    ieeeNumber: false,
  });

  useEffect(() => {
    if (userData && userData.length > 0) {
      const user = userData[0]?.user;
      setFormData({
        profilePic: user.profilePic || "",
        bio: user.bio || "",
        role: user.role || "",
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        fbURL: user.fbURL || "",
        linkedInURL: user.linkedInURL || "",
        userName: user.username || "",
        email: user.email || "",
        contactNo: user.contactNo || "",
        ieeeEmail: user.ieeeEmail || "",
        location: user.location || "",
        ieeeNumber: user.ieeeNumber || "",
      });
      setProfilePhoto(user.profilePic || profile);
    }
  }, [userData]);

  const handleUploadClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSave = (imgUrl) => {
    setProfilePhoto(imgUrl);
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: false }));
  };

  const handleSubmit = () => {
    const newError = {};
    Object.keys(formData).forEach((field) => {
      if (
        !formData[field] &&
        [
          "bio",
          "role",
          "profilePic",
          "firstName",
          "lastName",
          "userName",
          "email",
          "phone",
          "location",
        ].includes(field)
      ) {
        newError[field] = true;
      }
    });

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    console.log("Form submitted successfully", formData);
    setIsEditable(false);
  };

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const userProfile = [
    {
      photo: profilePhoto,
      name: `${formData.firstName} ${formData.lastName}`,
      role: formData.role,
    },
  ];

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <div className="row mt-4 px-5">
          {userProfile.map((user, index) => (
            <div className="col-6 col-md-6 mb-4" key={index}>
              <ProfileCard
                photo={user.profilePic}
                name={user.name}
                role={user.role}
              />
            </div>
          ))}
        </div>

        <div
          className="d-flex justify-content-between align-items-center gap-1"
          style={{ marginRight: "150px" }}
        >
          <div className="d-flex gap-3 flex-row">
            {isEditable && (
              <div>
                <CommonButton
                  text={"Upload New Photo"}
                  onClick={handleUploadClick}
                />
              </div>
            )}

            {!isEditable && (
              <div>
                <CommonButton text={"Edit Profile"} onClick={handleEditClick} />
              </div>
            )}
            {isEditable && (
              <div>
                <CommonButton text={"Delete"} close={true} />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="d-flex flex-column px-5">
        {formData.bio && (
          <div className="mt-3">
            <label htmlFor="bio" className="form-label text-dark">
              Bio
            </label>
            <input
              type="text"
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              className={`form-control`}
              style={{ width: "520px" }}
              readOnly={!isEditable}
            />
          </div>
        )}

        {formData.role && (
          <div className="mt-3">
            <label htmlFor="role" className="form-label text-dark">
              Role
            </label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              className={`form-control ${error.role ? "is-invalid" : ""}`}
              style={{ width: "520px" }}
              required
              readOnly={!isEditable}
            />
            {error.role && (
              <div className="invalid-feedback">This field is required.</div>
            )}
          </div>
        )}

        <div className="mt-3 d-flex flex-wrap gap-lg-3">
          <div>
            <label htmlFor="firstName" className="form-label text-dark">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`form-control ${error.firstName ? "is-invalid" : ""}`}
              style={{ width: "520px" }}
              required
              readOnly={!isEditable}
            />
            {error.firstName && (
              <div className="invalid-feedback">This field is required.</div>
            )}
          </div>
          <div>
            <label htmlFor="lastName" className="form-label text-dark">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`form-control ${error.lastName ? "is-invalid" : ""}`}
              style={{ width: "520px" }}
              required
              readOnly={!isEditable}
            />
            {error.lastName && (
              <div className="invalid-feedback">This field is required.</div>
            )}
          </div>
        </div>

        <div className="mt-3">
          <label htmlFor="userName" className="form-label text-dark">
            User Name
          </label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            className={`form-control ${error.userName ? "is-invalid" : ""}`}
            style={{ width: "1055px" }}
            required
            readOnly={!isEditable}
          />
          {error.userName && (
            <div className="invalid-feedback">This field is required.</div>
          )}
        </div>

        <div className="mt-3 d-flex flex-wrap gap-lg-3">
          <div>
            <label htmlFor="email" className="form-label text-dark">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`form-control ${error.email ? "is-invalid" : ""}`}
              style={{ width: "520px" }}
              required
              readOnly={!isEditable}
            />
            {error.email && (
              <div className="invalid-feedback">This field is required.</div>
            )}
          </div>

          <div>
            <label htmlFor="contactNo" className="form-label text-dark">
              Contact No
            </label>
            <input
              type="text"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleInputChange}
              className={`form-control ${error.contactNo ? "is-invalid" : ""}`}
              style={{ width: "520px" }}
              required
              readOnly={!isEditable}
            />
            {error.contactNo && (
              <div className="invalid-feedback">This field is required.</div>
            )}
          </div>
        </div>

        {formData.location && (
          <div className="mt-3">
            <label htmlFor="location" className="form-label text-dark">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              className={`form-control ${error.location ? "is-invalid" : ""}`}
              style={{ width: "1055px" }}
              required
              readOnly={!isEditable}
            />
            {error.location && (
              <div className="invalid-feedback">This field is required.</div>
            )}
          </div>
        )}

        <div className="d-flex justify-content-end align-items-end gap-1 mt-5">
          <div className="d-flex gap-3 flex-row">
            <div>
              {isEditable && (
                <CommonButton
                  text={"Cancel"}
                  close={true}
                  onClick={() => setIsEditable(false)}
                />
              )}
            </div>
            <div>
              {isEditable && (
                <CommonButton
                  text={"Save Changes"}
                  onClick={handleSubmit}
                  disabled={!isEditable}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <EditProfileModal
        showModal={showModal}
        onClose={handleModalClose}
        onSave={handleSave}
      />
    </div>
  );
};

export default ProfileEditPage;
