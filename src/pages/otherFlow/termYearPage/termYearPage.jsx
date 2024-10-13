import React, { useEffect, useState } from 'react';
import CommonTable from '../../../components/common/commonTable/commonTable';
import CommonButton from '../../../components/common/commonButton/commonButton';
import TermYearModel from '../../../components/models/addTermYearModel/addTermYearModel';
import { getAllTermYear } from '../../../redux/actions/termYear';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CommonLoader from '../../../components/common/commonLoader/commonLoader';


const TermYearPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [termYearModelShow, setTermYearModelShow] = useState(false);
  const [editable, setEditable] = useState(false);
  const [disable, setDisable] = useState(false);
  const [item, setitem] = useState(null);
  const [termYearData, SettermYearData] = useState(null);
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
    { label: "id", value: "id" },
    { label: "Term Year", value: "termyear" },
    { label: "Status", value: "status" },
    { label: "", value: "ACTION", type: ["EDIT"] },
  ];



  function search(item) {
    setsearchItem(item?.target?.value)
    console.warn(item?.target?.value);
  }



  const editYear = (item) => {
    // console.warn(id)
    setDisable(false);
    setitem(item);
    setEditable(true);
    handleShowTermYearModel();
  };

  const handleShowTermYearModel = () => {
    setTermYearModelShow(true);
  };

  const handleCloseTermYearModel = () => {
    setEditable(false);
    setTermYearModelShow(false);
  };

  //   useEffect(() => {

  //     setLoader(true)
  //     getAllTermYear(currentPage - 1, status, searchItem, (res) => {
  //         console.log("work1", res)
  //       if (res.status == 201) {

  //         let data = res?.data?.data?.map(({ termyearId, termyear, status }) => ({
  //           id: termyearId,
  //           termyear,
  //           status
  //         }));
  //         console.log("work2", data)
  //         console.log("work2", data.termyear)
  //         SettermYearData(data)
  //         setTotalPage(res?.data?.data?.totalPages)
  //         console.warn(res?.data?.data?.totalPages)
  //         setLoader(false)
  //       }

  //     })
  //   }, [searchItem, currentPage, refreshTable])



  useEffect(() => {
    setLoader(true);
    getAllTermYear((res) => {
      console.log("work1", res);
      if (res.status == 200) {
        let data = res?.data?.data?.map(({ termyearId, termyear, status }) => ({
          id: termyearId,
          termyear,
          status
        }));

        // Log the array and specific termyear values
        console.log("work2", data);
        data.forEach(item => console.log("Term Year:", item.termyear));

        SettermYearData(data);
        setTotalPage(res?.data?.totalPages); // Access totalPages correctly
        setLoader(false);
      }
    });
  }, [searchItem, currentPage, refreshTable]);




  return (
    <>
      {pageLoading ? (
        <CommonLoader />
      ) : (
        <>
          <div className='text-cl-primary'>Term Year</div>
          <div className='mt-4 d-flex justify-content-end'><div><CommonButton onClick={handleShowTermYearModel} text={"Add"} /></div></div>
          <div className='mt-3 pt-4 p-3 rounded-4 bg-white common-shadow'>
            
            <div className='mt-3 p-3 rounded-4 bg-white d-flex flex-column justify-content-between table-container'>
              <CommonTable
                tableHeading={tableHeading}
                tableData={termYearData}
                primary={true}
                loading={loader}
                editAction={(item) => { editYear(item) }}

              />
             
            </div>
          </div>
          <TermYearModel
            show={termYearModelShow}
            onHide={handleCloseTermYearModel}
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

export default TermYearPage;
