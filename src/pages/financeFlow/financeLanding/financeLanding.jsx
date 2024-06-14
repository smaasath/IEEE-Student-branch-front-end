import React from 'react'
import CommonButton from '../../../components/common/commonButton/commonButton'
import BankAccountCard from '../../../components/common/bankAccountCard/bankAccountCard'
import FinanceChart from '../../../components/common/financeChart/financeChart'
import CommonBalanceCard from '../../../components/common/commonBalanceCard/commonBalanceCard'
import CommonFinanceTable from '../../../components/common/commonFinanceTable/commonFinanceTable'
import { useNavigate } from 'react-router-dom'


const FinanceLanding = () => {


    const navigate = useNavigate()
    function navigateToProposal() {
      navigate('proposal')
    }


    return (
        <div className='container'>

            <div className='d-flex justify-content-between align-items-center gap-3'>
                <div className='text-cl-primary'>Accounts</div>
                <div className='d-flex gap-3 flex-row'>
                    <div>
                        <CommonButton text={"Report"} />
                    </div>
                    <div>
                        <CommonButton text={"Add Account"} />
                    </div>
                </div>


            </div>
            <div className='d-flex flex-wrap mt-3 gap-4'>
                <div className='pb-3 d-flex flex-column align-items-center gap-3 overflow-scroll hide-scrollbar' style={{ maxHeight: 410 }}>
                    <BankAccountCard />
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

            <div className='mt-5 d-flex justify-content-between align-items-center'>
                <div className='text-cl-primary'>Accounts</div>
                <div className='d-flex justify-content-end gap-4'>
                    <div>
                    <CommonButton text={"Go to proposal"} onClick={()=>{navigateToProposal()}} />
                    </div>
                    <div>
                     <CommonButton text={"Add Transaction"} />
                    </div>
                    
                   
                </div>
            </div>

            <div className='mt-4'>
                <CommonFinanceTable />
            </div>
        </div>
    )
}

export default FinanceLanding
