import React, { useState } from 'react';
import CommonSearch from '../../../components/common/commonSearch/commonSearch';
import CommonTable from '../../../components/common/commonTable/commonTable';
import CommonPagination from '../../../components/common/commonPagination/commonPagination';
import CommonButton from '../../../components/common/commonButton/commonButton'; // Assuming this is the correct import path for CommonButton
import EditPrimary from '../../../assets/icons/editPrimary.png';
import TermYearModel from '../../../components/models/addTermYearModel/addTermYearModel';

const TermYearPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [termYearModelShow, setTermYearModelShow] = useState(false);
  const [editable, setEditable] = useState(false);
  const [disable, setDisable] = useState(false);
  const [id, setId] = useState(null);

  const tableHeading = [
    { label: "ID", value: "id" },
    { label: "Enrolled Year", value: "enrolledYear" },
    { label: "Academic Year", value: "academicYear" },
    { label: "", value: "action" },
  ];

  const tableData = [
    {
      id: 1,
      enrolledYear: 2014,
      academicYear: "2021",
      action: <img src={EditPrimary} alt="View" style={{ width: '23px', height: '24px' }} onClick={() => editProject(1)} />,
    },
    {
      id: 2,
      enrolledYear: 2014,
      academicYear: "2021",
      action: <img src={EditPrimary} alt="View" style={{ width: '23px', height: '24px' }} onClick={() => editProject(2)} />,
    },
    {
      id: 3,
      enrolledYear: 2014,
      academicYear: "2021",
      action: <img src={EditPrimary} alt="View" style={{ width: '23px', height: '24px' }} onClick={() => editProject(3)} />,
    },
    {
      id: 4,
      enrolledYear: 2014,
      academicYear: "2021",
      action: <img src={EditPrimary} alt="View" style={{ width: '23px', height: '24px' }} onClick={() => editProject(4)} />,
    },
    {
      id: 5,
      enrolledYear: 2014,
      academicYear: "2021",
      action: <img src={EditPrimary} alt="View" style={{ width: '23px', height: '24px' }} onClick={() => editProject(5)} />,
    },
    {
      id: 6,
      enrolledYear: 2014,
      academicYear: "2021",
      action: <img src={EditPrimary} alt="View" style={{ width: '23px', height: '24px' }} onClick={() => editProject(6)} />,
    },
  ];

  const editProject = (id) => {
    setDisable(false);
    setId(id);
    setEditable(true);
    handleShowTermYearModel();
  };

  const handleShowTermYearModel = () => {
    setTermYearModelShow(true);
  };

  const handleCloseTermYearModel = () => {
    setTermYearModelShow(false);
  };

  return (
    <>
      <div className='mt-4 d-flex justify-content-end'><div><CommonButton onClick={handleShowTermYearModel} text={"Add"} /></div></div>
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
      <TermYearModel 
        show={termYearModelShow}
        onHide={handleCloseTermYearModel}
        disabled={disable}
        editable={editable}
        id={id}
      />
    </>
  );
};

export default TermYearPage;
