import React, { useEffect, useState } from 'react'
import CommonSearch from '../commonSearch/commonSearch';
import CommonTable from '../commonTable/commonTable';
import CommonPagination from '../commonPagination/commonPagination';


const CommonFinanceTable = () => {

  const [selectedType, setSelectedType] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const typeDetail = [
    {
      lable: "All Transactions",
      value: "ALL"
    },
    {
      lable: "Income",
      value: "INCOME"
    },
    {
      lable: "Expense",
      value: "EXPENSE"
    },
  ]

  const tableHeading = [
    {
      lable: "",
      value: "STARTIMAGE"
    },
    {
      lable: "ID",
      value: "id"
    },
    {
      lable: "Description",
      value: "description"
    },
    {
      lable: "Type",
      value: "type"
    },
    {
      lable: "Date",
      value: "date"
    },
    {
      lable: "Balance",
      value: "balance"
    },
    {
      lable: "Amount",
      value: "amount"
    },
    {
      lable: "",
      value: "ACTION",
      type: ["EDIT", "VIEW"]
    },
  ]

  const tableData = [
    {
      id: "#12548796",
      description: "Spotify Subscription",
      type: "INCOME",
      date: "28 Jan, 12.30 AM",
      balance: "5750.00",
      amount: "2500.00",
    },
    {
      id: "#12548796",
      description: "Spotify Subscription",
      type: "EXPENCE",
      date: "28 Jan, 12.30 AM",
      balance: "5750.00",
      amount: "2500.00",
    }
  ]

  useEffect(() => {
    setSelectedType("ALL")
  }, [])
  return (
    <div>
      <div className='d-flex align-items-center gap-4'>
        {typeDetail.map((item,index) => {
          return (
            <div key={index} className='d-flex flex-column gap-1'>
              <div>
                <button onClick={() => { setSelectedType(item.value) }} className='border-0 bg-transparent'>{item.lable}</button>
              </div>
              {item.value == selectedType ? <div className='bg-third' style={{ height: 2 }}></div> : null}
            </div>
          )
        })}
      </div>
      <div className='d-flex justify-content-end mt-3'>
        <CommonSearch primary={true} />
      </div>
      <div className='mt-3 p-3 rounded-4 bg-white common-shadow d-flex flex-column justify-content-between table-container'>
        <CommonTable tableHeading={tableHeading} tableData={tableData} finance={true} loading={false} viewAction={() => { console.warn("kkkkk") }} />
        <div className='mt-4 d-flex justify-content-end'>
          <CommonPagination pages={10} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>
      </div>

    </div>
  )
}

export default CommonFinanceTable
