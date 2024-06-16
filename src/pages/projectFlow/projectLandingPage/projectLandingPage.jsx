import React, { useState } from 'react'
import CommonStatusCountCard from '../../../components/common/commonStatusCountCard/commonStatusCountCard'
import timeLinefrom from '../../../assets/images/timeLine.png'
import CommonSearch from '../../../components/common/commonSearch/commonSearch'
import CommonTable from '../../../components/common/commonTable/commonTable'
import CommonPagination from '../../../components/common/commonPagination/commonPagination'
import CommonButton from '../../../components/common/commonButton/commonButton'
import { useNavigate } from 'react-router-dom'


const ProjectLandingPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const tableHeading = [
        {
            lable: "Project Name",
            value: "project_name"
        },
        {
            lable: "Chapter",
            value: "ou_name"
        },
        {
            lable: "Start Date",
            value: "start_date"
        },
        {
            lable: "End Date",
            value: "end_date"
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
            id: "#12548796",
            project_name: "IEEE OpenDay 2024",
            ou_name: "CS Chapter",
            start_date: "2024/08/13",
            end_date: "2024/12/08",
            status: "TODO",
        },
        {
            id: "#12548796",
            project_name: "IEEE OpenDay 2024",
            ou_name: "CS Chapter",
            start_date: "2024/08/13",
            end_date: "2024/12/08",
            status: "TODO",
        },
    ]

    const navigate = useNavigate()
    function navigateToTimeLine() {
        navigate('time-line')
    }


    return (
        <div>
            <div className='d-flex justify-content-end gap-3 flex-wrap align-items-center'>
                <div className="">
                    <select className="form-select w-100" aria-label="Large select example">
                        <option selected>Select Entity</option>
                        <option value="1">CS chapter</option>
                    </select>
                </div>

                <div className="">
                    <select className="form-select w-100" aria-label="Large select example">
                        <option selected>Select Year</option>
                        <option value="1">2024</option>
                    </select>
                </div>
            </div>
            <div className='text-cl-primary'>Project</div>
            <div className='mt-2 d-flex justify-content-between align-items-center gap-4 flex-wrap'>
                <div className='d-flex justify-content-between gap-4 rounded-4 bg-body-secondary p-4 flex-wrap flex-grow-1'>
                    <CommonStatusCountCard type={"TODO"} count={"05"} />
                    <CommonStatusCountCard type={"ONGOING"} count={"05"} />
                    <CommonStatusCountCard type={"COMPLETE"} count={"05"} />
                </div>
                <button onClick={()=>{navigateToTimeLine()}} className='bg-white border-0 rounded-4 common-transition common-shadow d-flex justify-content-between align-items-center p-3' style={{ width: 350 }}>
                    <div className='h4 fw-bold text-cl-primary'>
                        Projects  time line
                    </div>
                    <div>
                        <img src={timeLinefrom} width={70} />
                    </div>
                </button>
            </div>
            <div className='mt-4 d-flex justify-content-end'><div><CommonButton text={"Add Project"} /></div></div>
            <div className='mt-4 d-flex flex-column gap-3 justify-content-center bg-white rounded-2 common-shadow p-3'>
                <div className='mt-2 d-flex flex-wrap justify-content-between align-items-center'>
                    <CommonSearch primary={true} />
                    <div className="">
                        <select className="form-select w-100" aria-label="Large select example">
                            <option selected>Select Status</option>
                            <option value="1">To Do</option>
                        </select>
                    </div>
                </div>

                <div className='mt-4 table-container'>
                    <CommonTable tableHeading={tableHeading} primary={true} tableData={tableData} loading={false} viewAction={(id) => { console.warn(id) }} editAction={(id) => { console.warn(id) }} />
                </div>
                <div className='mt-4 d-flex justify-content-end'>
                    <CommonPagination pages={10} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>
            </div>
        </div>
    )
}

export default ProjectLandingPage
