import React, { useEffect, useState } from 'react';
import CommonSearch from '../../../components/common/commonSearch/commonSearch';
import CommonTable from '../../../components/common/commonTable/commonTable';
import CommonPagination from '../../../components/common/commonPagination/commonPagination';
import CommonButton from '../../../components/common/commonButton/commonButton';
import AddOuModel from '../../../components/models/addOuModel/addOuModel';
import { getAllAcademicYear } from '../../../redux/actions/academicYear';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CommonLoader from '../../../components/common/commonLoader/commonLoader';
import { getAllOU } from '../../../redux/actions/ou';


const OuPage = () => {

  const [AddOuModelShow, setAddOuModelShow] = useState(false);
  const [editable, setEditable] = useState(false);
  const [disable, setDisable] = useState(false);
  const [item, setitem] = useState(null);
  const [ouData, SetOuData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [refreshTable, setRefreshTable] = useState(0)
  const userData = useSelector((state) => state.user.userData);
  const navigate = useNavigate();
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    setPageLoading(true)
    if (userData) {
      const isOtherAvailable = userData?.some(userRoleDetail =>
        userRoleDetail.role?.policies.some(policy => policy.policyCode === "OTHER")
      );
      if (!isOtherAvailable) {
        navigate('/dashboard')
      } else {
        setPageLoading(false);
      }
    }
  }, [userData])
  const tableHeading = [
    { label: "ID", value: "id" },
    { label: "OU Name", value: "ouName" },
    { label: "OU Short Name", value: "ou_short_name" },
    { label: "", value: "ACTION", type: ["EDIT"] },
  ];


  const editOu = (item) => {
    setDisable(false);
    setitem(item);
    setEditable(true);
    handleShowaddOuModel();
  };

  const handleShowaddOuModel = () => {
    setAddOuModelShow(true);
  };

  const handleCloseaddOuModel = () => {
    setEditable(false);
    setAddOuModelShow(false);
  };

  useEffect(() => {
    setLoader(true)
    getAllOU((res) => {
      if (res.status == 200) {

        let data = res?.data?.data.map(({ ouID, ouName, ou_logo, ou_short_name }) => ({
          id: ouID,
          ouName,
          ou_logo,
          ou_short_name
        }));
        SetOuData(data)
        setLoader(false)
      }

    })
  }, [refreshTable])

  return (
    <>
      {pageLoading ? (
        <CommonLoader />
      ) : (
        <>
          <div className='text-cl-primary'>OU Page</div>
          <div className='mt-4 d-flex justify-content-end'><div><CommonButton onClick={handleShowaddOuModel} text={"Add"} /></div></div>
          <div className='mt-3 pt-4 p-3 rounded-4 bg-white common-shadow'>
            <div className='mt-3 p-3 rounded-4 bg-white d-flex flex-column justify-content-between table-container'>
              <CommonTable
                tableHeading={tableHeading}
                tableData={ouData}
                primary={true}
                loading={loader}
                editAction={(item) => { editOu(item) }}

              />
            </div>
          </div>
          <AddOuModel
            show={AddOuModelShow}
            onHide={handleCloseaddOuModel}
            disabled={disable}
            editable={editable}
            item={item}
            changed={() => { setRefreshTable(refreshTable + 1) }}
          />
        </>
      )}
    </>
  );
};

export default OuPage;
