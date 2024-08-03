import React, { useEffect, useState } from 'react'
import CommonButton from '../../../components/common/commonButton/commonButton'
import BankAccountCard from '../../../components/common/bankAccountCard/bankAccountCard'
import FinanceChart from '../../../components/common/financeChart/financeChart'
import CommonBalanceCard from '../../../components/common/commonBalanceCard/commonBalanceCard'
import CommonFinanceTable from '../../../components/common/commonFinanceTable/commonFinanceTable'
import { useNavigate } from 'react-router-dom'
import AddTransectionModel from '../../../components/models/addTransectionModel/addTransectionModel'
import AddBankAccountModel from '../../../components/models/addBankAccountModel/addBankAccountModel'
import { useSelector } from 'react-redux'
import CommonLoader from '../../../components/common/commonLoader/commonLoader'



const FinanceLanding = () => {


    const userData = useSelector((state) => state.user.userData);
    const [transectionModelShow, setTransectionModelShow] = useState(false);
    const [addBankModelShow, setAddBankModelShow] = useState(false);
    const [disable, setDisable] = useState(false);
    const [editable, setEditable] = useState(false);
    const [id, setId] = useState(null);
    const [pageLoading, setPageLoading] = useState(true);
   
    useEffect(() => {
        setPageLoading(true)
        if (userData) {
            const isFinanceAvailable = userData?.role?.some(role =>
                role.policies.some(policy => policy.policyCode === "FINANCE")
            );
            if (!isFinanceAvailable) {
                navigate('/dashboard')
            } else {
                setPageLoading(false);
            }
        }
    }, [userData])

    const handleCloseTransectionModel = () => { setTransectionModelShow(false); }
    const handleShowTransectionModel = () => { setTransectionModelShow(true); }
    const handleCloseAddBankModel = () => {
        setAddBankModelShow(false);
        setDisable(false)
        setEditable(false)
        setId(null)
    }

    function editAccount() {
        setDisable(false)
        setId("1")
        setEditable(true)
        handleShowAddBankModel()
    }

    function viewAccount() {
        setDisable(true)
        setId(null)
        setEditable(false)
        handleShowAddBankModel()
    }
    const handleShowAddBankModel = () => { setAddBankModelShow(true); }
    const navigate = useNavigate()
    function navigateToProposal() {
        navigate('proposal')
    }


    return (
        <>

            {pageLoading ? (
                <CommonLoader />
            ) : (
                <div className='container'>

                    <div className='d-flex justify-content-between align-items-center gap-3'>
                        <div className='text-cl-primary'>Accounts</div>
                        <div className='d-flex gap-3 flex-row'>
                            <div>
                                <CommonButton text={"Report"} onClick={() => { navigate('report') }} />
                            </div>
                            <div>
                                <CommonButton onClick={handleShowAddBankModel} text={"Add Account"} />
                            </div>
                        </div>


                    </div>
                    <div className='d-flex flex-wrap mt-3 gap-4'>
                        <div className='pb-3 d-flex flex-column align-items-center gap-3 overflow-scroll hide-scrollbar' style={{ maxHeight: 410 }}>
                            <BankAccountCard ViewAction={viewAccount} editAction={editAccount} />
                            <BankAccountCard />


                        </div>
                        <div className='flex-grow-1'>
                            <FinanceChart />
                        </div>
                    </div>

                    <div className='d-flex justify-content-center justify-content-lg-between align-items-center flex-wrap gap-3 mt-5'>
                        <CommonBalanceCard wallet={true} text={"Wallet Balance"} amount={"5,680.00"} />
                        <CommonBalanceCard text={"Income"} amount={"5,680.00"} />
                        <CommonBalanceCard text={"Expense"} amount={"5,680.00"} />
                    </div>

                    <div className='mt-5 d-flex justify-content-between align-items-center gap-4 flex-wrap'>
                        <div className='text-cl-primary'>Accounts</div>
                        <div className='d-flex justify-content-end gap-4'>
                            <div>
                                <CommonButton text={"Go to proposal"} onClick={() => { navigateToProposal() }} />
                            </div>
                            <div>
                                <CommonButton text={"Add Transaction"} onClick={handleShowTransectionModel} />
                            </div>


                        </div>
                    </div>

                    <div className='mt-4'>
                        <CommonFinanceTable />
                    </div>
                </div>
            )}


            <AddTransectionModel show={transectionModelShow} onHide={handleCloseTransectionModel} setTransectionModelShow={setTransectionModelShow} />
            <AddBankAccountModel show={addBankModelShow} onHide={handleCloseAddBankModel} disabled={disable} editable={editable} id={id} />
        </>
    )
}

export default FinanceLanding
