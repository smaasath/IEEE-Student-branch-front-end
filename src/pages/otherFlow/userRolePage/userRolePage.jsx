import React, { useState } from 'react';
import CommonSearch from '../../../components/common/commonSearch/commonSearch';
import CommonTable from '../../../components/common/commonTable/commonTable';
import CommonPagination from '../../../components/common/commonPagination/commonPagination';
import EditPrimary from '../../../assets/icons/editPrimary.png';
import CommonButton from '../../../components/common/commonButton/commonButton';
import UserRoleModel from '../../../components/models/addUserRoleModel/addUserRoleModel'; 

const UserRolePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userRoleModelShow, setUserRoleModelShow] = useState(false); 
  const [editable, setEditable] = useState(false);
  const [disable, setDisable] = useState(false);
  const [id, setId] = useState(null);

  const tableHeading = [
    { label: "ID", value: "id" },
    { label: "Role", value: "role" },
    { label: "Type", value: "type" },
    { label: "", value: "action" },
  ];

  const tableData = [
    {
      id: 1,
      role: "Chair",
      type: "Excom",
      action: <img src={EditPrimary} alt="Edit" style={{ width: '23px', height: '24px', cursor: 'pointer' }} onClick={() => editProject(1)} />,
    },
    {
      id: 2,
      role: "Chair",
      type: "Excom",
      action: <img src={EditPrimary} alt="Edit" style={{ width: '23px', height: '24px', cursor: 'pointer' }} onClick={() => editProject(2)} />,
    },
    {
      id: 3,
      role: "Chair",
      type: "Excom",
      action: <img src={EditPrimary} alt="Edit" style={{ width: '23px', height: '24px', cursor: 'pointer' }} onClick={() => editProject(3)} />,
    },
    {
      id: 4,
      role: "Chair",
      type: "Excom",
      action: <img src={EditPrimary} alt="Edit" style={{ width: '23px', height: '24px', cursor: 'pointer' }} onClick={() => editProject(4)} />,
    },
    {
      id: 5,
      role: "Chair",
      type: "Excom",
      action: <img src={EditPrimary} alt="Edit" style={{ width: '23px', height: '24px', cursor: 'pointer' }} onClick={() => editProject(5)} />,
    },
    {
      id: 6,
      role: "Chair",
      type: "Excom",
      action: <img src={EditPrimary} alt="Edit" style={{ width: '23px', height: '24px', cursor: 'pointer' }} onClick={() => editProject(6)} />,
    },
  ];

  const editProject = (projectId) => {
    setId(projectId);
    setEditable(true);
    setDisable(false);
    setUserRoleModelShow(true);
  };

  const handleCloseUserRoleModel = () => {
    setUserRoleModelShow(false);
  };

  return (
    <>
      <div className='mt-4 d-flex justify-content-end'><div><CommonButton onClick={() => setUserRoleModelShow(true)} text={"Add"} /></div></div>
      <div className='mt-3 pt-4 p-3 rounded-4 bg-white common-shadow'>
        <div className='d-flex justify-content-between flex-wrap align-items-center p-3'>
          <CommonSearch primary={true} />
        </div>
        <div className='mt-3 p-3 rounded-4 bg-white d-flex flex-column justify-content-between table-container'>
          <CommonTable
            tableHeading={tableHeading}
            tableData={tableData}
            primary={true}
            loading={false}
          />
          <div className='mt-4 d-flex justify-content-end'>
            <CommonPagination pages={10} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>
        </div>
      </div>
      <UserRoleModel
        show={userRoleModelShow}
        onHide={handleCloseUserRoleModel}
        editable={editable}
        disabled={disable}
        selectedMember={null} 
      />
    </>
  );
};

export default UserRolePage;
