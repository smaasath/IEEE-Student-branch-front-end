import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import CommonSearch from "../../common/commonSearch/commonSearch";
import CommonButton from "../../common/commonButton/commonButton";
import profile from "../../../assets/images/profile.png";
import selectIcon from "../../../assets/icons/check_mark_dark.png";
import { useParams } from "react-router-dom";
import { getAllExcomMember } from "../../../redux/actions/ou";
import { assignTask } from "../../../redux/actions/task";

export default function TaskAssignModel({ show, onHide, taskData, changed }) {
  const [assigneesIds, setAssigneesIds] = useState([]);
  const [searchUserItem, setsearchUserItem] = useState("");
  const [error, setError] = useState("");
  const [userData, setUserData] = useState([]);
  const [userLoader, setUserLoader] = useState(false);

  //   const handleSearchChangeofRoles = (e) => setsearchRoleItem(e.target.value);
  const handleSearchChangeofUsers = (e) => setsearchUserItem(e.target.value);
  const handleAssign = (userID) => {
    setAssigneesIds((prevAssigneesIds) => {
      if (prevAssigneesIds.includes(userID)) {
        // Remove the userID from the array
        return prevAssigneesIds.filter((id) => id !== userID);
      } else {
        // Add the userID to the array
        return [...prevAssigneesIds, userID];
      }
    });
  };
  //   const handleAssignRole = () => {
  //     setAssignLoading(true);
  //     setError("");
  //     if (selectedRoleId && selectedMemberID && ouId) {
  //       assignOuExcomRole(selectedRoleId, selectedMemberID, ouId, (response) => {
  //         if (response.status === 200) {
  //           console.log("Role assigned successfully:", response);
  //           changed();
  //           onHide();
  //           setAssignLoading(false);
  //         } else {
  //           console.log("Failed to assign role:", response?.data?.error);
  //           setError(response?.data?.message);
  //           setAssignLoading(false);
  //         }
  //       });
  //     } else {
  //       console.error("Please select both a role and a member.");
  //       setError("Select both a role and a member");
  //       setAssignLoading(false);
  //     }
  //   };

  //   useEffect(() => {
  //     setLoader(true);
  //     getAllRoles(0, searchRoleItem, "EXCOM", (res) => {
  //       if (res.status == 200) {
  //         let data = res?.data?.data?.content?.map(({ roleID, userRole }) => ({
  //           id: roleID,
  //           role: userRole,
  //         }));
  //         console.warn(data);
  //         setRoleData(data);
  //         // setTotalPage(res?.data?.data?.totalPages);
  //         // console.warn(res?.data?.data?.totalPages);
  //         setLoader(false);
  //       } else {
  //         console.error("Failed to load roles");
  //         setLoader(false);
  //       }
  //     });
  //   }, [searchRoleItem]);
  const formData = {
    taskId: taskData.taskId,
    users: assigneesIds,
  };
  useEffect(() => {
    // console.log(assigneesIds, "Assignees");
    if (show) {
      assignTask(formData, (res) => {
        if (res?.status === 201) {
          console.log(res, "Assign Task COmplete");
        } else {
          console.warn(res, "Error in Task Assigning");
          //   setLoading(false);
          //   setExistErr("Task Creation Failed");
        }
      });
    }
  }, [assigneesIds]);
  useEffect(() => {
    setUserLoader(true);
    if (show) {
      if (taskData.type === "EXCOM") {
        // console.log(taskData.ou.ouID, "Kavindraaaaaaaaaaaaaaaaa");
        // page, search, ouid, termyearId, callback
        getAllExcomMember(0, searchUserItem, taskData.ou.ouID, "", (res) => {
          if (res.status == 200) {
            console.log(res?.data?.data?.content, "get ALL Excom members");
            let data = res?.data?.data?.content?.map((users) => ({
              id: users.user?.userID,
              fname: users.user?.firstName,
              lname: users.user?.lastName,
              email: users.user?.email,
              phone: users.user?.contactNo,
              academicYear: users.user?.academicYear?.academicYear || "N/A",
              status: users.user?.academicYear?.status || "N/A",
              photo: users.user?.profilePic || profile,
              role: users.role.userRole,
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
      } else {
        // for projects
      }
    }
  }, [searchUserItem, show]);

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
            Assignees
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column">
            {/* <div className="mt-3">
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
            </div> */}

            <div className="mt-3">
              <label htmlFor="memberSelect" className="form-label text-dark">
                Select{" "}
                {taskData.type === "EXCOM"
                  ? "Excom Members"
                  : "Project OC Members"}
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
                    className={"list-group-item list-group-item-action"}
                    // className={`list-group-item list-group-item-action ${
                    //   selectedMemberID === user.id ? "active1" : ""
                    // }`}
                    onClick={() => handleAssign(user.id)}
                  >
                    <div className="d-flex mb-0 align-items-center justify-content-start">
                      <div className="ms-0 me-0">
                        <img
                          src={user.photo}
                          alt="Profile"
                          className="rounded-circle"
                          style={{
                            width: "30px",
                            height: "30px",
                            objectFit: "cover",
                          }}
                        />
                      </div>

                      <div className="d-flex ms-3">
                        <div className="ms-0 me-auto">
                          <h6 className="mb-0">
                            {user.fname} {user.lname}
                          </h6>
                          <p
                            className="my-0 fw-light"
                            style={{ fontSize: "12px" }}
                          >
                            {user.role}
                          </p>
                        </div>
                      </div>
                      <div className="ms-auto me-0" style={{ width: "25px" }}>
                        <h6 className="mb-0">
                          {assigneesIds.includes(user.id) && (
                            <img
                              className="justify-content-end mb-0"
                              src={selectIcon}
                              alt="Select"
                              style={{ width: "25px", height: "25px" }}
                            />
                          )}
                        </h6>
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
            {/* <CommonButton
              onClick={handleAssignRole}
              load={assignLoading}
              text={"Done"}
            /> */}
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}
