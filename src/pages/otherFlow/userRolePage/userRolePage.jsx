import React, { useEffect, useState } from 'react';
import CommonSearch from '../../../components/common/commonSearch/commonSearch';
import CommonTable from '../../../components/common/commonTable/commonTable';
import CommonPagination from '../../../components/common/commonPagination/commonPagination';
import EditPrimary from '../../../assets/icons/editPrimary.png';
import CommonButton from '../../../components/common/commonButton/commonButton';
import UserRoleModel from '../../../components/models/addUserRoleModel/addUserRoleModel';
import { getAllRoles } from '../../../redux/actions/role';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CommonLoader from '../../../components/common/commonLoader/commonLoader';

const UserRolePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [userRoleModelShow, setUserRoleModelShow] = useState(false);
  const [editable, setEditable] = useState(false);
  const [disable, setDisable] = useState(false);
  const [item, setitem] = useState(null);
  const [roleData, SetRoleData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [totalPage, setTotalPage] = useState(1);
  const [status, setStatus] = useState('');
  const [searchItem, setsearchItem] = useState('');
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
    { label: "Role", value: "userRole" },
    { label: "Type", value: "type" },
    { label: "", value: "ACTION", type: ["EDIT"] },
  ];

  function search(item) {
    setsearchItem(item?.target?.value)
    console.warn(item?.target?.value);
  }

  const editRole = (item) => {
    setitem(item);
    setEditable(true);
    setDisable(false);
    setUserRoleModelShow(true);
  };

  const handleCloseUserRoleModel = () => {
    setEditable(false);
    setUserRoleModelShow(false);
  };

  useEffect(() => {

    setLoader(true)
    getAllRoles(currentPage - 1, searchItem, status, (res) => {
      if (res.status == 200) {

        let data = res?.data?.data?.content?.map(({ roleID, userRole, type, policies }) => ({
          id: roleID,
          userRole,
          type,
          policies
        }));
        console.warn(data)
        SetRoleData(data)
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
          <div className='mt-4 d-flex justify-content-end'><div><CommonButton onClick={() => setUserRoleModelShow(true)} text={"Add"} /></div></div>
          <div className='mt-3 pt-4 p-3 rounded-4 bg-white common-shadow'>
            <div className='d-flex justify-content-between flex-wrap align-items-center p-3'>
              <CommonSearch primary={true} onChange={(item) => { search(item) }} />
            </div>
            <div className='mt-3 p-3 rounded-4 bg-white d-flex flex-column justify-content-between table-container'>
              <CommonTable
                tableHeading={tableHeading}
                tableData={roleData}
                primary={true}
                loading={loader}
                editAction={(item) => { editRole(item) }}
              />
              <div className='mt-4 d-flex justify-content-end'>
                <CommonPagination pages={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
              </div>
            </div>
          </div>
          <UserRoleModel
            show={userRoleModelShow}
            onHide={handleCloseUserRoleModel}
            editable={editable}
            disabled={disable}
            selectedMember={null}
            item={item}
            changed={() => { setRefreshTable(refreshTable + 1) }}

          />
        </>
      )}
    </>
  );
};

export default UserRolePage;
