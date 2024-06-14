import React, { useState } from 'react'
import CommonSearch from '../../../components/common/commonSearch/commonSearch'
import CommonTable from '../../../components/common/commonTable/commonTable'
import CommonPagination from '../../../components/common/commonPagination/commonPagination'



const Proposal = () => {

    const [currentPage, setCurrentPage] = useState(1);

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
            lable: "Date",
            value: "date"
        },
        {
            lable: "From",
            value: "from"
        },
        {
            lable: "Title",
            value: "title"
        },
        {
            lable: "Amount(LKR)",
            value: "amount"
        },
        {
            lable: "Status",
            value: "status"
        },
        {
            lable: "",
            value: "ACTION",
            type: ["EDIT", "VIEW"]
        },
    ]

    const tableData = [
        {
            id: "P001",
            date: "28 Jan, 12.30 AM",
            from: "CS chapter",
            title: "Fund for Shopping",
            amount: "2500.00",
            status: "RECIEVED"
        },
        {
            id: "P001",
            date: "28 Jan, 12.30 AM",
            from: "CS chapter",
            title: "Fund for Shopping",
            amount: "2500.00",
            status: "RECIEVED"
        }

    ]
    return (
        <div className='container'>
            <div className='text-cl-primary'>Proposal</div>
            <div className='mt-3 pt-4 p-3 rounded-4 bg-white common-shadow'>
                <div className='d-flex justify-content-between flex-wrap align-items-center'>
                    <div>
                        <CommonSearch primary={true} />
                    </div>
                    <div>
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Select Status</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                </div>

                <div className='mt-3 p-3 rounded-4 bg-white d-flex flex-column justify-content-between table-container'>
                    <CommonTable tableHeading={tableHeading} tableData={tableData} primary={true} loading={false} viewAction={() => { console.warn("kkkkk") }} />
                    <div className='mt-4 d-flex justify-content-end'>
                        <CommonPagination pages={10} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Proposal
