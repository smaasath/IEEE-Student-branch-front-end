import React, { useEffect, useState } from 'react'
import CommonSearch from '../commonSearch/commonSearch';



const CommonFinanceTable = () => {

  const [selectedType, setSelectedType] = useState();

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

  useEffect(() => {
    setSelectedType("ALL")
  }, [])
  return (
    <div>
      <div className='d-flex align-items-center gap-4'>
        {typeDetail.map((item) => {
          return (
            <div className='d-flex flex-column gap-1'>
              <div>
                <button onClick={() => { setSelectedType(item.value) }} className='border-0 bg-transparent'>{item.lable}</button>
              </div>
              {item.value == selectedType ? <div className='bg-third' style={{ height: 2 }}></div> : null}
            </div>
          )
        })}
      </div>
      <div className='d-flex justify-content-end'>
        <CommonSearch primary={true} />
      </div>
    </div>
  )
}

export default CommonFinanceTable
