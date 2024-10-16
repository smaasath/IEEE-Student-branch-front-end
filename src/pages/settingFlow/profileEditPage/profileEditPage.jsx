import React, { useState, useEffect } from "react";
import Facebook from "../../../assets/icons/Facebook.png";
import Linkedin from "../../../assets/icons/LinkedIn Circled.png";
import profile from "../../../assets/images/profile.png";
import CommonButton from "../../../components/common/commonButton/commonButton";
import EditProfileModal from "../../../components/models/editProfileModel/editProfileModel";
import { useSelector } from "react-redux";
import { editUsers } from "../../../redux/actions/user";

const ProfileCard = ({ photo, name, userRole }) => {
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
          <p className="card-text">{userRole}</p>
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
  const [loader, setLoader] = useState(false);
  const userData = useSelector((state) => state.user.userData);

  const [formData, setFormData] = useState({
    bio: "",
    profilePic: "",
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    contactNo: "",
    ieeeEmail: "",
    location: "",
    ieeeNumber: "",
    fbURL: "",
    linkedInURL: "",
  });

  const [error, setError] = useState({
    bio: false,
    profilePic: false,
    firstName: false,
    lastName: false,
    userName: false,
    fbURL: false,
    linkedInURL: false,
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

  console.log(formData);

  const handleSubmit = () => {
    const error = {};
    Object.keys(formData).forEach((field) => {
      if (
        !formData[field] &&
        [
          "profilePic",
          "firstName",
          "lastName",
          "userName",
          "email",
          "contactNo",
          "location",
        ].includes(field)
      )

        if (!formData.profilePic || !formData.firstName ||!formData.lastName ||!formData.userName ||!formData.email ||!formData.contactNo ||!formData.location || formData.type === "") {
          setError({
            ...error,
            profilePic: !formData.profilePic,
            firstName: !formData.firstName,
            lastName: !formData.lastName,
            userName: !formData.userName,
            email: !formData.email,
            contactNo: !formData.contactNo,
            location: !formData.location,
            type: formData.type === "" ? true : false,
          });
          return;
        }
    });

    const data = {
      email: formData.email,
      ieee_email: formData.ieeeEmail,
      firstName: formData.firstName,
      lastName: formData.lastName,
      ieee_membership_number: formData.ieeeNumber,
      contactNo: formData.contactNo,
      bio: formData.bio,
      profilePic: formData.profilePic,
      fbURL: formData.fbURL,
      linkedInURL: formData.linkedInURL,
      location: formData.location,
    };

    console.log(data);

    setLoader(true);

    editUsers(data, (res) => {
      setLoader(false);
      if (res?.status === 200) {
        console.log(res, "User updated successfully:");
        setIsEditable(false);
      } else {
        console.log(res, "User Update Failed.");
      }
    });
  };

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const userProfile = [
    {
      photo: profilePhoto,
      name: `${formData.firstName} ${formData.lastName}`, 
    },
  ];
  

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <div className="row mt-4 px-5">
          {userProfile.map((user, index) => (
            <div className="col-6 col-md-6 mb-4" key={index}>
              <ProfileCard photo={user.profilePic} name={user.name} />
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
        {(formData.bio || isEditable) && (
          <div className="mt-3">
            <label htmlFor="bio" className="form-label text-dark">
              Bio
            </label>
            <input
              type="text"
              name="bio"
              value={formData.bio || ""}
              onChange={handleInputChange}
              className={`form-control ${error.bio ? "is-invalid" : ""}`}
              style={{ width: "520px" }}
              readOnly={!isEditable}
              placeholder={
                !isEditable && !formData.bio ? "No role defined" : ""
              }
            />
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
              value={formData.firstName || ""}
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
              value={formData.lastName || ""}
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
            value={formData.userName || ""}
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
              value={formData.email || ""}
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
              value={formData.contactNo || ""}
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

        {(formData.location || isEditable) && (
          <div className="mt-3">
            <label htmlFor="location" className="form-label text-dark">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location || ""}
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

        {(formData.ieeeEmail || isEditable) && (
          <div className="mt-3">
            <label htmlFor="location" className="form-label text-dark">
              IEEE Email
            </label>
            <input
              type="text"
              name="ieeeEmail"
              value={formData.ieeeEmail || ""}
              onChange={handleInputChange}
              className={`form-control ${error.ieeeEmail ? "is-invalid" : ""}`}
              style={{ width: "1055px" }}
              readOnly={!isEditable}
            />
          </div>
        )}

        {(formData.ieeeNumber || isEditable) && (
          <div className="mt-3">
            <label htmlFor="location" className="form-label text-dark">
              IEEE Number
            </label>
            <input
              type="text"
              name="ieeeNumber"
              value={formData.ieeeNumber || ""}
              onChange={handleInputChange}
              className={`form-control ${error.ieeeNumber ? "is-invalid" : ""}`}
              style={{ width: "1055px" }}
              readOnly={!isEditable}
            />
          </div>
        )}

        {(formData.fbURL || isEditable) && (
          <div className="mt-3">
            <label htmlFor="location" className="form-label text-dark">
              Facebook URL
            </label>
            <input
              type="text"
              name="fbURL"
              value={formData.fbURL || ""}
              onChange={handleInputChange}
              className={`form-control ${error.fbURL ? "is-invalid" : ""}`}
              style={{ width: "1055px" }}
              readOnly={!isEditable}
            />
          </div>
        )}

        {(formData.linkedInURL || isEditable) && (
          <div className="mt-3">
            <label htmlFor="location" className="form-label text-dark">
              LinkedIn URL
            </label>
            <input
              type="text"
              name="linkedInURL"
              value={formData.linkedInURL || ""}
              onChange={handleInputChange}
              className={`form-control ${error.linkedInURL ? "is-invalid" : ""}`}
              style={{ width: "1055px" }}
              readOnly={!isEditable}
            />
          </div>
        )}

        <div className="d-flex justify-content-end align-items-end gap-1 mt-5">
          <div className="d-flex gap-3 flex-row">
            <div>
              {isEditable && <CommonButton text={"Cancel"} close={true} onClick={handleSubmit}/>}
            </div>
            <div>
              {isEditable && (
                <CommonButton
                  text={"Save Changes"}
                  loader={loader}
                  onClick={() => setIsEditable(false)}
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