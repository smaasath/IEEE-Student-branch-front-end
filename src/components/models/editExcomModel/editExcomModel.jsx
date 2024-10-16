import React, { useEffect, useState } from "react";
import "./editExcomModel.css";
import Modal from "react-bootstrap/Modal";
import CommonButton from "../../common/commonButton/commonButton";
import profile from "../../../assets/images/profile.png";
import CommonSearch from "../../common/commonSearch/commonSearch";
import selectIcon from "../../../assets/icons/check_mark_dark.png";
import { assignOuExcomRole, getAllRoles } from "../../../redux/actions/role";
import { getAllUsers } from "../../../redux/actions/user";
import { useParams } from "react-router-dom";

const EditExcomModel = ({ onHide, show, selectedMember, changed }) => {
  const [selectedRoleId, setSelectedRoleId] = useState(null);
  // const [searchTerm, setSearchTerm] = useState("");
  const [selectedMemberID, setSelectedMemberID] = useState(null);
  const [roleData, setRoleData] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [loader, setLoader] = useState(false);
  const [userLoader, setUserLoader] = useState(false);
  const [assignLoading, setAssignLoading] = useState(false);
  const [searchRoleItem, setsearchRoleItem] = useState("");
  const [searchUserItem, setsearchUserItem] = useState("");
  const [error, setError] = useState("");

  // const [refreshTable, setRefreshTable] = useState(0);

  const [userData, setUserData] = useState([]);
  const { id: ouId } = useParams();

  const handleSelectMember = (memberID) => {
    setSelectedMemberID(memberID);
  };
  const handleSelectRole = (roleID) => {
    setSelectedRoleId(roleID);
  };
  const handleSearchChangeofRoles = (e) => setsearchRoleItem(e);
  const handleSearchChangeofUsers = (e) => setsearchUserItem(e);

  const handleAssignRole = () => {
    setAssignLoading(true);
    setError("");
    if (selectedRoleId && selectedMemberID && ouId) {
      assignOuExcomRole(selectedRoleId, selectedMemberID, ouId, (response) => {
        if (response.status === 200) {
          console.log("Role assigned successfully:", response);
          changed();
          onHide();
          setAssignLoading(false);
        } else {
          console.log("Failed to assign role:", response?.data?.error);
          setError(response?.data?.message);
          setAssignLoading(false);
        }
      });
    } else {
      console.error("Please select both a role and a member.");
      setError("Select both a role and a member");
      setAssignLoading(false);
    }
  };

  useEffect(() => {
    setLoader(true);
    getAllRoles(0, searchRoleItem, "EXCOM", (res) => {
      if (res.status == 200) {
        let data = res?.data?.data?.content?.map(({ roleID, userRole }) => ({
          id: roleID,
          role: userRole,
        }));
        console.warn(data);
        setRoleData(data);
        // setTotalPage(res?.data?.data?.totalPages);
        // console.warn(res?.data?.data?.totalPages);
        setLoader(false);
      } else {
        console.error("Failed to load roles");
        setLoader(false);
      }
    });
  }, [searchRoleItem]);

  useEffect(() => {
    setUserLoader(true);
    getAllUsers(0, searchUserItem, (res) => {
      if (res.status == 200) {
        let data = res?.data?.data?.content?.map((user) => ({
          id: user?.userID,
          fname: user?.firstName,
          lname: user?.lastName,
          email: user?.email,
          phone: user?.contactNo,
          academicYear: user?.academicYear?.academicYear || "N/A",
          status: user?.academicYear?.status || "N/A",
          photo: profile,
        }));
        console.warn(data);
        setUserData(data);
        // setTotalPage(res?.data?.data?.totalPages);
        // console.warn(res?.data?.data?.totalPages);
        setUserLoader(false);
      } else {
        console.error("Failed to load Users");
        setUserLoader(false);
      }
    });
  }, [searchUserItem]);

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
              <CommonSearch onChange={handleSearchChangeofRoles} />
              <div
                className="list-group mt-2"
                style={{ maxHeight: "150px", overflowY: "auto" }}
              >
                {roleData.map((data) => (
                  <button
                    key={data.id}
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
            <label htmlFor="memberSelect" className="form-label text-dark">
                Select Member
              </label>
              <CommonSearch onChange={handleSearchChangeofUsers} />
              <div
                className="list-group mt-2"
                style={{ maxHeight: "150px", overflowY: "auto" }}
              >
                {userData.map((user) => (
                  <button
                    key={user.id}
                    type="button"
                    value={user.id}
                    className={`list-group-item list-group-item-action ${
                      selectedMemberID === user.id ? "active1" : ""
                    }`}
                    onClick={() => handleSelectMember(user.id)}
                  >
                    <div className="d-flex align-items-center">
                      <img
                        src={user.photo}
                        alt="Profile"
                        className="rounded-circle me-3"
                        style={{
                          width: "25px",
                          height: "25px",
                          objectFit: "cover",
                        }}
                      />
                      <div>
                        <h6 className="mb-0">
                          {user.fname} {user.lname}
                        </h6>
                        <p
                          className="mb-0 text-muted"
                          style={{ fontSize: "12px" }}
                        >
                          {user.email} | {user.phone}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="text-center text-danger mt-3">{error}</div>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-end mt-3">
          <div>
            <CommonButton
              onClick={handleAssignRole}
              load={assignLoading}
              text={"Done"}
            />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditExcomModel;
