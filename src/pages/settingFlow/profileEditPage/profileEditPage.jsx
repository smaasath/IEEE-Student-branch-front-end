import React, { useState } from "react";
import Facebook from "../../../assets/icons/Facebook.png";
import Linkedin from "../../../assets/icons/LinkedIn Circled.png";
import profile from "../../../assets/images/profile.png";
import CommonButton from "../../../components/common/commonButton/commonButton";
import EditProfileModal from "../../../components/models/editProfileModel/editProfileModel";

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
          src={photo || profile}
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
  const [showModal, setShowModal] = useState(false); // For modal visibility
  const [profilePhoto, setProfilePhoto] = useState(profile); // For updating profile photo
  const [formData, setFormData] = useState({
    bio: "",
    role: "",
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    phone: "",
    ieeeEmail: "",
    location: "",
    ieeeNumber: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    bio: false,
    role: false,
    firstName: false,
    lastName: false,
    userName: false,
    email: false,
    phone: false,
    location: false,
  });

  const userProfile = [
    {
      photo: profilePhoto,
      name: "Thilini Priyangika",
      role: "Web Master",
    },
  ];

  const handleUploadClick = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSave = (imgUrl) => {
    setProfilePhoto(imgUrl); // Update profile photo after uploading
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
      if (!formData[field] && ['bio', 'role', 'firstName', 'lastName', 'userName', 'email', 'phone', 'location'].includes(field)) {
        newError[field] = true;
      }
    });

    if (Object.keys(newError).length > 0) {
      setError(newError);
      return;
    }

    // Proceed to save changes
    console.log("Form submitted successfully", formData);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <div className="row mt-4 px-5">
          {userProfile.map((user, index) => (
            <div className="col-6 col-md-6 mb-4" key={index}>
              <ProfileCard
                photo={user.photo}
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
            <div>
              <CommonButton text={"Upload New Photo"} onClick={handleUploadClick} />
            </div>
            <div>
              <CommonButton text={"Delete"} close={true} />
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-column px-5">
        <div className="mt-3">
          <label htmlFor="bio" className="form-label text-dark">Bio</label>
          <input
            type="text"
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            className={`form-control`}
            placeholder="Don't worry be happy"
            style={{ width: "520px" }}
          />
        </div>

        <div className="mt-3">
          <label htmlFor="role" className="form-label text-dark">Role</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            className={`form-control ${error.role ? "is-invalid" : ""}`}
            placeholder="Web Master"
            style={{ width: "520px" }}
            required
          />
          {error.role && <div className="invalid-feedback">This field is required.</div>}
        </div>

        <div className="mt-3 d-flex flex-wrap gap-lg-3">
          <div>
            <label htmlFor="firstName" className="form-label text-dark">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className={`form-control ${error.firstName ? "is-invalid" : ""}`}
              placeholder="Ishara"
              style={{ width: "520px" }}
              required
            />
            {error.firstName && <div className="invalid-feedback">This field is required.</div>}
          </div>
          <div>
            <label htmlFor="lastName" className="form-label text-dark">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className={`form-control ${error.lastName ? "is-invalid" : ""}`}
              placeholder="Herath"
              style={{ width: "520px" }}
              required
            />
            {error.lastName && <div className="invalid-feedback">This field is required.</div>}
          </div>
        </div>

        <div className="mt-3">
          <label htmlFor="userName" className="form-label text-dark">User Name</label>
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleInputChange}
            className={`form-control ${error.userName ? "is-invalid" : ""}`}
            placeholder="isharasuvini"
            style={{ width: "1055px" }}
            required
          />
          {error.userName && <div className="invalid-feedback">This field is required.</div>}
        </div>

        <div className="mt-3 d-flex flex-wrap gap-lg-3">
          <div>
            <label htmlFor="email" className="form-label text-dark">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`form-control ${error.email ? "is-invalid" : ""}`}
              placeholder="suvi@gmail.com"
              style={{ width: "520px" }}
              required
            />
            {error.email && <div className="invalid-feedback">This field is required.</div>}
          </div>
          <div>
            <label htmlFor="phone" className="form-label text-dark">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`form-control ${error.phone ? "is-invalid" : ""}`}
              placeholder="0712458963"
              style={{ width: "520px" }}
              required
            />
            {error.phone && <div className="invalid-feedback">This field is required.</div>}
          </div>
        </div>

        <div className="mt-3 d-flex flex-wrap gap-lg-3">
          <div>
            <label htmlFor="email" className="form-label text-dark">IEEE Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.ieeeEmail}
              onChange={handleInputChange}
              className={`form-control ${error.ieeeEmail ? "is-invalid" : ""}`}
              placeholder="ieeesuvi@gmail.com"
              style={{ width: "520px" }}
              required
            />
            {error.ieeeEmail && <div className="invalid-feedback">This field is required.</div>}
          </div>
          <div>
            <label htmlFor="location" className="form-label text-dark">IEEE Membership Number</label>
            <input
              type="text"
              name="ieeeNumber"
              value={formData.ieeeNumber}
              onChange={handleInputChange}
              className={`form-control ${error.ieeeNumber ? "is-invalid" : ""}`}
              placeholder="ieee23"
              style={{ width: "520px" }}
              required
            />
            {error.ieeeNumber && <div className="invalid-feedback">This field is required.</div>}
          </div>
        </div>
        <div className="mt-3">
          <label htmlFor="userName" className="form-label text-dark">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className={`form-control ${error.location ? "is-invalid" : ""}`}
            placeholder="Monaragala"
            style={{ width: "1055px" }}
            required
          />
          {error.location && <div className="invalid-feedback">This field is required.</div>}
        </div>
        <div className="mt-3 d-flex flex-wrap gap-lg-3">
          <div>
            <label htmlFor="email" className="form-label text-dark">Current Password</label>
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleInputChange}
              className={`form-control ${error.currentPassword ? "is-invalid" : ""}`}
              style={{ width: "520px" }}
              required
            />
            {error.currentPassword && <div className="invalid-feedback">This field is required.</div>}
          </div>
          <div>
            <label htmlFor="location" className="form-label text-dark">New Password</label>
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              className={`form-control ${error.newPassword ? "is-invalid" : ""}`}
              style={{ width: "520px" }}
              required
            />
            {error.newPassword && <div className="invalid-feedback">This field is required.</div>}
          </div>
        </div>
        <div className="mt-3">
          <label htmlFor="userName" className="form-label text-dark">Confirm New Password</label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleInputChange}
            className={`form-control ${error.newPassword ? "is-invalid" : ""}`}
            style={{ width: "1055px" }}
            required
          />
          {error.newPassword && <div className="invalid-feedback">This field is required.</div>}
        </div>

        <div className="d-flex justify-content-end align-items-end gap-1 mt-5">
          <div className="d-flex gap-3 flex-row">
            <div>
              <CommonButton text={"Cancel"} close={true} />
            </div>
            <div>
              <CommonButton text={"Save Changes"} onClick={handleSubmit} />
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
