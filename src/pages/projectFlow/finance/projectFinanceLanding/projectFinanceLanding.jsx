import React, { useState } from "react";
import CommonBalanceCard from "../../../../components/common/commonBalanceCard/commonBalanceCard";
import CommonButton from "../../../../components/common/commonButton/commonButton";
import CommonFinanceTable from "../../../../components/common/commonFinanceTable/commonFinanceTable";
import AddExpense from "../../../../components/sections/AddExpense";

const ProjectFinanceLanding = () => {
  const [showAddSection, setShowAddSection] = useState(false);

  const handleOpenAddSection = () => {
    setShowAddSection(!showAddSection);
  };
  return (
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
            <div className="text-cl-primary fw-bold">Recent Transactions</div>
            <div className="d-flex justify-content-end gap-4">
              <div>
                <CommonButton text={"Expenses"}  onClick={handleOpenAddSection}/>
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
  );
};

export default ProjectFinanceLanding;
