import React, { useEffect, useState } from 'react';
import CommonSearch from '../../../components/common/commonSearch/commonSearch';
import CommonTable from '../../../components/common/commonTable/commonTable';
import CommonPagination from '../../../components/common/commonPagination/commonPagination';
import EditPrimary from '../../../assets/icons/editPrimary.png';
import CommonButton from '../../../components/common/commonButton/commonButton';
import PolicyModel from '../../../components/models/addPolicyModel/addPolicyModel';
import { getAllPolicy } from '../../../redux/actions/policy';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CommonLoader from '../../../components/common/commonLoader/commonLoader';


const PolicyPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [policyModelShow, setPolicyModelShow] = useState(false);
  const [editable, setEditable] = useState(false);
  const [disable, setDisable] = useState(false);
  const [item, setitem] = useState(null);
  const [policyData, SetPolicyData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [totalPage, setTotalPage] = useState(1);
  const [status, setStatus] = useState('');
  const [searchItem, setsearchItem] = useState('');
  const [refreshTable, setRefreshTable] = useState(0)
  const [pageLoading, setPageLoading] = useState(true);
  const userData = useSelector((state) => state.user.userData);
  const navigate = useNavigate();


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
    { label: "Policy", value: "policy" },
    { label: "Type", value: "type" },
    { label: "Policy Code", value: "policyCode" },
    { label: "", value: "ACTION", type: ["EDIT"] },
  ];

  function search(item) {
    setsearchItem(item?.target?.value)
    console.warn(item?.target?.value);
  }



  const editPolicy = (item) => {
    setDisable(false);
    setitem(item);
    setEditable(true);
    handleShowPolicyModel();
  };

  const handleShowPolicyModel = () => {
    setPolicyModelShow(true);
  };

  const handleClosePolicyModel = () => {
    setEditable(false);
    setPolicyModelShow(false);
  };


  useEffect(() => {

    setLoader(true)
    getAllPolicy(currentPage - 1, searchItem, status, (res) => {
      if (res.status == 200) {

        let data = res?.data?.data?.content?.map(({ policyID, policy, type, policyCode }) => ({
          id: policyID,
          policy,
          type,
          policyCode
        }));
        console.warn(data)
        SetPolicyData(data)
        setTotalPage(res?.data?.data?.totalPages)
        console.warn(res?.data?.data?.totalPages)
        setLoader(false)
      }

    })
  }, [searchItem, currentPage, refreshTable, status])




  return (
    <>
      {pageLoading ? (
        <CommonLoader />
      ) : (
        <>
          <div className='mt-4 d-flex justify-content-end'><div><CommonButton onClick={handleShowPolicyModel} text={"Add"} /></div></div>
          <div className='mt-3 pt-4 p-3 rounded-4 bg-white common-shadow'>
            <div className='d-flex justify-content-between flex-wrap align-items-center p-3'>
              <CommonSearch primary={true} onChange={(item) => { search(item) }} />
            </div>
            <div className='mt-3 p-3 rounded-4 bg-white d-flex flex-column justify-content-between table-container'>
              <CommonTable
                tableHeading={tableHeading}
                tableData={policyData}
                primary={true}
                loading={loader}
                editAction={(item) => { editPolicy(item) }}
              />
              <div className='mt-4 d-flex justify-content-end'>
                <CommonPagination pages={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
              </div>
            </div>
          </div>
          <PolicyModel
            show={policyModelShow}
            onHide={handleClosePolicyModel}
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

export default PolicyPage;
