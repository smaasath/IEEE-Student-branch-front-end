import React, { useState } from 'react';
import CommonSearch from '../../../components/common/commonSearch/commonSearch';
import CommonTable from '../../../components/common/commonTable/commonTable';
import CommonPagination from '../../../components/common/commonPagination/commonPagination';
import EditPrimary from '../../../assets/icons/editPrimary.png';
import CommonButton from '../../../components/common/commonButton/commonButton';

const TermYearPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const tableHeading = [
    { label: "Policy", value: "policy" },
    { label: "Type", value: "type" },
    { label: "Policy Code", value: "policyCode" },
    { label: "Action", value: "action" },
  ];
  const tableData = [
    {
      id: 1,
      policy: "pl",
      type: "abcd",
      policyCode: 1234,
      action: <img src={EditPrimary} alt="View" style={{ width: '34px', height: '28px' }} />,
    },
    {
        id: 1,
        policy: "pl",
        type: "abcd",
        policyCode: 1234,
        action: <img src={EditPrimary} alt="View" style={{ width: '34px', height: '28px' }} />,
    },
    {
        id: 1,
        policy: "pl",
        type: "abcd",
        policyCode: 1234,
        action: <img src={EditPrimary} alt="View" style={{ width: '34px', height: '28px' }} />,
    },
    {
        id: 1,
        policy: "pl",
        type: "abcd",
        policyCode: 1234,
        action: <img src={EditPrimary} alt="View" style={{ width: '34px', height: '28px' }} />,
    },
    {
        id: 1,
        policy: "pl",
        type: "abcd",
        policyCode: 1234,
        action: <img src={EditPrimary} alt="View" style={{ width: '34px', height: '28px' }} />,
    },
    {
        id: 1,
        policy: "pl",
        type: "abcd",
        policyCode: 1234,
        action: <img src={EditPrimary} alt="View" style={{ width: '34px', height: '28px' }} />,
    },
  ];

  return (
    <>
    <div className='mt-4 d-flex justify-content-end'><div><CommonButton text={"Add"} /></div></div>
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
    </>
  );
};

export default TermYearPage;
