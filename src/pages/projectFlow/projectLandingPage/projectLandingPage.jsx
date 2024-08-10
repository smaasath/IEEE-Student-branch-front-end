import React, { useState } from 'react'
import CommonStatusCountCard from '../../../components/common/commonStatusCountCard/commonStatusCountCard'
import timeLinefrom from '../../../assets/images/timeLine.png'
import CommonSearch from '../../../components/common/commonSearch/commonSearch'
import CommonTable from '../../../components/common/commonTable/commonTable'
import CommonPagination from '../../../components/common/commonPagination/commonPagination'
import CommonButton from '../../../components/common/commonButton/commonButton'
import { useNavigate } from 'react-router-dom'
import ProjectModel from '../../../components/models/projectModel/projectModel'


const ProjectLandingPage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [projectModelShow, setProjectModelShow] = useState(false);
    const [disable, setDisable] = useState(false);
    const [editable, setEditable] = useState(false);
    const [id, setId] = useState(null);


    const handleCloseProjectModel = () => {
        setProjectModelShow(false);
        setDisable(false)
        setEditable(false)
        setId(null)
    }

    function editProject(id) {
        setDisable(false)
        setId(id)
        setEditable(true)
        handleShowProjectModel()
    }

    function navigateToProject(id) {
        const encodedId = encodeURIComponent(id);
        navigate(encodedId);
    }
    const handleShowProjectModel = () => { setProjectModelShow(true); }


    const tableHeading = [
        {
            label: "Project Name",
            value: "project_name"
        },
        {
            label: "Chapter",
            value: "ou_name"
        },
        {
            label: "Start Date",
            value: "start_date"
        },
        {
            label: "End Date",
            value: "end_date"
        },
        {
            label: "Status",
            value: "status"
        },
        {
            label: "",
            value: "ACTION",
            type: ["EDIT", "VIEW",]
        },
    ]

    const tableData = [
        {
            id: "12548796",
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
        <>
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
                        <CommonStatusCountCard type={"TODO"} count={1} />
                        <CommonStatusCountCard type={"ONGOING"} count={1} />
                        <CommonStatusCountCard type={"COMPLETE"} count={1} />
                    </div>
                    <button onClick={() => { navigateToTimeLine() }} className='bg-white border-0 rounded-4 common-transition common-shadow d-flex justify-content-between align-items-center p-3' style={{ width: 350 }}>
                        <div className='h4 fw-bold text-cl-primary'>
                            Projects  time line
                        </div>
                        <div>
                            <img src={timeLinefrom} width={70} />
                        </div>
                    </button>
                </div>
                <div className='mt-4 d-flex justify-content-end'><div><CommonButton onClick={handleShowProjectModel} text={"Add Project"} /></div></div>
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
                        <CommonTable tableHeading={tableHeading} primary={true} tableData={tableData} loading={false} viewAction={(id) => { navigateToProject(id) }} editAction={(id) => { editProject(id) }} />
                    </div>
                    <div className='mt-4 d-flex justify-content-end'>
                        <CommonPagination pages={10} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                    </div>
                </div>
            </div>

            <ProjectModel show={projectModelShow} onHide={handleCloseProjectModel} disabled={disable} editable={editable} id={id} />
        </>
    )
}

export default ProjectLandingPage
