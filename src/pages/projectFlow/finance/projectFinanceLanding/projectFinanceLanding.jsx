import React, { useEffect, useState } from "react";
import CommonBalanceCard from "../../../../components/common/commonBalanceCard/commonBalanceCard";
import CommonButton from "../../../../components/common/commonButton/commonButton";
import CommonFinanceTable from "../../../../components/common/commonFinanceTable/commonFinanceTable";
import AddExpense from "../../../../components/sections/AddExpense";
import { useDispatch, useSelector } from "react-redux";
import CommonLoader from "../../../../components/common/commonLoader/commonLoader";
import { PolicyValidate } from "../../../../utils/valitations/Valitation";
import { useNavigate, useParams } from "react-router-dom";
import { projectPolicy } from "../../../../redux/reducers/userSlice";
import { getProjectById } from "../../../../redux/actions/project";


const ProjectFinanceLanding = () => {
  const [showAddSection, setShowAddSection] = useState(false);
  const { id } = useParams();
  const userData = useSelector((state) => state.user.userData);
  const projectPolicyData = useSelector((state) => state.user.projectPolicy);
  const [pageLoading, setPageLoading] = useState(true);
  const distpatch = useDispatch();
  const [projectData, setProjectData] = useState(null);
  const [isFinanceAvailable, setIsFinanceAvailable] = useState(false);
  const navigate = useNavigate();

  const handleOpenAddSection = () => {
    setShowAddSection(!showAddSection);
  };



  useEffect(() => {
    setPageLoading(true);
    if (userData) {
      if (projectPolicyData) {
        policyCheck(projectPolicyData, false);
      } else {
        getProjectById(id, (res) => {
          if (res?.status == 200) {
            policyCheck(res?.data?.data, true);
          } else {
            setPageLoading(false);
            navigate(-1);
          }
        })
      }
    }
  }, [userData, projectPolicyData, id])

  function policyCheck(data, useAPI) {
    setProjectData(data);
    const isEventPolicyAvailable = PolicyValidate(data?.my_user_role_details, "PROJECT_FINANCE");
    const isAllPolicyAvailable = PolicyValidate(userData, "PROJECT");
    if (!(isEventPolicyAvailable || isAllPolicyAvailable)) {
      navigate(-1);
    }
    if (useAPI) {
      distpatch(projectPolicy(data))
    }
    setPageLoading(false);
  }

  return (
    <>
      {pageLoading ? (
        <CommonLoader />
      ) : (
        <>
          {showAddSection ? (
            <AddExpense handleClose={handleOpenAddSection} />
          ) : (
            <div className="container">
              <div className="d-flex justify-content-center justify-content-lg-between align-items-center flex-wrap gap-3 mt-5">
                <CommonBalanceCard
                  wallet={true}
                  text={"Wallet Balance"}
                  amount={"5,680.00"}
                />

                <CommonBalanceCard text={"Income"} amount={"5,680.00"} />

                <CommonBalanceCard text={"Expense"} amount={"2,000.00"} />
              </div>

              <div className="mt-5 d-flex justify-content-between align-items-center gap-4 flex-wrap">
                <div className="text-cl-primary fw-bold">
                  Recent Transactions
                </div>
                <div className="d-flex justify-content-end gap-4">
                  <div>
                    <CommonButton
                      text={"Expenses"}
                      onClick={handleOpenAddSection}
                    />
                  </div>
                  <div>
                    <CommonButton text={"Report"} />
                  </div>
                </div>
              </div>
              <div className="container mt-4">
                <CommonFinanceTable />
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default ProjectFinanceLanding;
