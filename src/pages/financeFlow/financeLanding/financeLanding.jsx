import React from 'react'
import CommonButton from '../../../components/common/commonButton/commonButton'
import BankAccountCard from '../../../components/common/bankAccountCard/bankAccountCard'
import FinanceChart from '../../../components/common/financeChart/financeChart'


const FinanceLanding = () => {
    return (
        <div>
            <div className='text-cl-primary'>Accounts</div>
            <div className='mt-3 d-flex justify-content-end align-items-center gap-3'>
                <div>
                    <CommonButton text={"Report"} />
                </div>
                <div>
                    <CommonButton text={"Add Account"} />
                </div>

            </div>
            <div className='row mt-3'>
                <div className='col-md-4 d-flex flex-column gap-3 overflow-scroll hide-scrollbar' style={{maxHeight:410}}>
                    <BankAccountCard />
                    <BankAccountCard />
                    
                 
                </div>
                <div className='col-md-8'>
                    <FinanceChart />
                </div>
            </div>
        </div>
    )
}

export default FinanceLanding
