import React, { useState } from "react";
import './editExcomModel.css';
import Modal from "react-bootstrap/Modal";
import CommonButton from "../../common/commonButton/commonButton";
import profile from "../../../assets/images/profile.png";
import CommonSearch from "../../common/commonSearch/commonSearch";
import selectIcon from "../../../assets/icons/check_mark_dark.png";


const EditExcomModel = ({ onHide, show, selectedMember }) => {
  const [selectedRoleId, setSelectedRoleId] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMemberID, setSelectedMemberID] = useState();

  const handleSelectMember = (memberID) => {
    setSelectedMemberID(memberID)
  };
  const handleSelectRole = (roleID) => {
    setSelectedRoleId(roleID);
  };
  // const filteredMembers = members.filter((member) =>
  //   member.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const memberList = [
    {
      id: 1,
      name: "Thilina Kumara",
      email: "thilina@gmail.com",
      phone: "+94712668316",
      academicYear: "3rd Year",
      photo: profile,
    },

    {
      id: 2,
      name: "Ruwan Kumara",
      email: "thilina@gmail.com",
      phone: "+94712668316",
      academicYear: "3rd Year",
      photo: profile,
    },

    {
      id: 3,
      name: "Kamal Kumara",
      email: "thilina@gmail.com",
      phone: "+94712668316",
      academicYear: "3rd Year",
      photo: profile,
    },
  ];

  const roleData = [
    { id: 1, role: "chairperson" },
    { id: 2, role: "Tresurer" },
    { id: 3, role: "PV Head" },
    { id: 4, role: "Editorial Head" },
    { id: 5, role: "Secretary" },
  ];

  return (
    <>
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
            className="text-third"
            id="contained-modal-title-vcenter"
          >
            Assign Executive Committee
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column">
            <div className="mt-3">
              <label htmlFor="roleSelect" className="form-label text-dark">
                Select Role
              </label>
              <CommonSearch />
              <div
                className="list-group mt-2"
                style={{ maxHeight: "150px", overflowY: "auto" }}
              >
                {roleData.map((data, index) => (
                  <button
                    key={index}
                    type="button"
                    value={data.id}
                    className={`list-group-item list-group-item-action`}
                    onClick={() => handleSelectRole(data.id)}
                  >
                    <div className="d-flex align-items-center">
                      <div className="d-flex w-100">
                        <h6 className="my-auto ms-2 me-auto">{data.role}</h6>
                        {selectedRoleId === data.id && (
                          <img
                            className="ms-auto me-2"
                            src={selectIcon}
                            alt="Select"
                            style={{ width: "25px", height: "25px" }}
                          />
                        )}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-3">
              <CommonSearch />
              <div
                className="list-group mt-2"
                style={{ maxHeight: "150px", overflowY: "auto" }}
              >
                {memberList.map((member, index) => (
                  <button
                    key={index}
                    type="button"
                    value={member.id}
                    className={`list-group-item list-group-item-action ${
                      selectedMemberID === member.id ? "active1" : ""
                    }`}
                    onClick={() => handleSelectMember(member.id)}
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={member.photo}
                        alt="Profile"
                        className="rounded-circle me-3"
                        style={{
                          width: "25px",
                          height: "25px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <h6 className="mb-0">{member.name}</h6>
                        <p
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px" }}
                        >
                          {member.email} | {member.phone}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-end mt-3">
          <div>
            <CommonButton onClick={onHide} text={"Done"} />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditExcomModel;
