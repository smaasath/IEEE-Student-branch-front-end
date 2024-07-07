import React, { useState } from 'react';
import CommonSearch from '../../../components/common/commonSearch/commonSearch';
import CommonTable from '../../../components/common/commonTable/commonTable';
import CommonPagination from '../../../components/common/commonPagination/commonPagination';
import CommonButton from '../../../components/common/commonButton/commonButton'; // Assuming this is the correct import path for CommonButton
import EditPrimary from '../../../assets/icons/editPrimary.png';

const TermYearPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const tableHeading = [
    { label: "Enrolled Year", value: "enrolledYear" },
    { label: "Academic Year", value: "academicYear" },
    { label: "Status", value: "status" },
    { label: "Action", value: "action" },
  ];
  const tableData = [
    {
      id: 1,
      enrolledYear: 2014,
      academicYear: "2021",
      status: "ACTIVE",
      action: <img src={EditPrimary} alt="View" style={{ width: '34px', height: '28px' }} />,
    },
    {
      id: 2,
      enrolledYear: 2014,
      academicYear: "2021",
      status: "ACTIVE",
      action: <img src={EditPrimary} alt="View" style={{ width: '34px', height: '28px' }} />,
    },
    {
      id: 3,
      enrolledYear: 2014,
      academicYear: "2021",
      status: "ACTIVE",
      action: <img src={EditPrimary} alt="View" style={{ width: '34px', height: '28px' }} />,
    },
    {
      id: 4,
      enrolledYear: 2014,
      academicYear: "2021",
      status: "ACTIVE",
      action: <img src={EditPrimary} alt="View" style={{ width: '34px', height: '28px' }} />,
    },
    {
      id: 5,
      enrolledYear: 2014,
      academicYear: "2021",
      status: "ACTIVE",
      action: <img src={EditPrimary} alt="View" style={{ width: '34px', height: '28px' }} />,
    },
    {
      id: 6,
      enrolledYear: 2014,
      academicYear: "2021",
      status: "ACTIVE",
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
