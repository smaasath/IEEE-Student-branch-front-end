import React, { useState } from 'react';
import CommonSearch from '../../../components/common/commonSearch/commonSearch';
import CommonTable from '../../../components/common/commonTable/commonTable';
import CommonPagination from '../../../components/common/commonPagination/commonPagination';
import EditPrimary from '../../../assets/icons/editPrimary.png';
import CommonButton from '../../../components/common/commonButton/commonButton';
import PolicyModel from '../../../components/models/addPolicyModel/addPolicyModel';

const PolicyPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [policyModelShow, setPolicyModelShow] = useState(false);
  const [editable, setEditable] = useState(false);
  const [disable, setDisable] = useState(false);
  const [id, setId] = useState(null);

  const tableHeading = [
    { label: "ID", value: "id" },
    { label: "Policy", value: "policy" },
    { label: "Type", value: "type" },
    { label: "Policy Code", value: "policyCode" },
    { label: "", value: "action" },
  ];

  const tableData = [
    {
      id: 1,
      policy: "pl",
      type: "abcd",
      policyCode: 1234,
      action: <img src={EditPrimary} alt="View" style={{ width: '23px', height: '24px' }} onClick={() => editProject(1)} />,
    },
    {
      id: 2,
      policy: "pl",
      type: "abcd",
      policyCode: 1234,
      action: <img src={EditPrimary} alt="View" style={{ width: '23px', height: '24px' }} onClick={() => editProject(2)} />,
    },
    {
      id: 3,
      policy: "pl",
      type: "abcd",
      policyCode: 1234,
      action: <img src={EditPrimary} alt="View" style={{ width: '23px', height: '24px' }} onClick={() => editProject(3)} />,
    },
    {
      id: 4,
      policy: "pl",
      type: "abcd",
      policyCode: 1234,
      action: <img src={EditPrimary} alt="View" style={{ width: '23px', height: '24px' }} onClick={() => editProject(4)} />,
    },
    {
      id: 5,
      policy: "pl",
      type: "abcd",
      policyCode: 1234,
      action: <img src={EditPrimary} alt="View" style={{ width: '23px', height: '24px' }} onClick={() => editProject(5)} />,
    },
    {
      id: 6,
      policy: "pl",
      type: "abcd",
      policyCode: 1234,
      action: <img src={EditPrimary} alt="View" style={{ width: '23px', height: '24px' }} onClick={() => editProject(6)} />,
    },
  ];

  const editProject = (id) => {
    setDisable(false);
    setId(id);
    setEditable(true);
    handleShowPolicyModel();
  };

  const handleShowPolicyModel = () => {
    setPolicyModelShow(true);
  };

  const handleClosePolicyModel = () => {
    setPolicyModelShow(false);
  };

  return (
    <>
      <div className='mt-4 d-flex justify-content-end'><div><CommonButton onClick={handleShowPolicyModel} text={"Add"} /></div></div>
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
      <PolicyModel 
        show={policyModelShow}
        onHide={handleClosePolicyModel}
        disabled={disable}
        editable={editable}
        id={id}
      />
    </>
  );
};

export default PolicyPage;
