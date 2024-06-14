import React from 'react'
import financeIncome from '../../../assets/icons/financeIncome.png'
import financeExpence from '../../../assets/icons/financeExpence.png'
import editPrimary from '../../../assets/icons/editPrimary.png'
import viewPrimary from '../../../assets/icons/viewPrimary.png'
import CommonStatusContainer from '../commonStatusContainer/commonStatusContainer'


const CommonTable = ({ tableHeading, tableData, finance, primary }) => {



    return (
        <div className='table-responsive'>
            <table className="table table-hover">
                <thead>
                    <tr>
                        {tableHeading?.map((item) => {
                            return (
                                <th scope="col" className={`${primary ? "bag-primary" : finance ? "white" : "bg-third"}`}>{item.lable}</th>
                            )
                        })}

                    </tr>
                </thead>
                <tbody>
                    {tableData?.map((item) => {
                        return (
                            <tr>
                                {tableHeading?.map((head) => {

                                    return (
                                        <td>
                                            {head.value == "ACTION" ? (
                                                head.type.map((action) => {
                                                    return (
                                                        <button className='border-0 bg-transparent'>
                                                            <img src={action == "VIEW" ? viewPrimary : action == "EDIT" ? editPrimary : null} style={{ width: 24 }} />
                                                        </button>
                                                    )
                                                })
                                            ) : finance && head.value == "STARTIMAGE" ? (
                                                <img
                                                    src={item.type === "INCOME" ? financeIncome : financeExpence}
                                                    style={{ width: 24 }}
                                                    alt={item.type === "INCOME" ? "Income" : "Expense"}
                                                />
                                            ) : head.value == "status" ? (<CommonStatusContainer status={item[head.value]} />) : item[head.value]}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>

    )
}

export default CommonTable
