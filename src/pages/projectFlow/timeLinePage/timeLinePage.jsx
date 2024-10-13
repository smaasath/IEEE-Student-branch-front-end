import React, { useEffect, useState } from 'react';
import { Gantt, ViewMode } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import { Modal, Button } from 'react-bootstrap';
import ViewSwitcher from '../../../components/common/viewSwitcher/viewSwitcher';
import CommonButton from '../../../components/common/commonButton/commonButton';
import { getAllProject } from '../../../redux/actions/project';
import { getAllOU } from '../../../redux/actions/ou';
import { getAllTermYear } from '../../../redux/actions/termYear';
import CommonLoader from '../../../components/common/commonLoader/commonLoader';




const TimeLinePage = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [view, setView] = useState(ViewMode.Month);
    const [projectData, SetProjectData] = useState([]);
    const [ou, setOu] = useState(null);
    const [termYear, setTermYear] = useState(null);
    const [selectedOU, setSelectedOU] = useState("");
    const [selectedYear, setSelectedYear] = useState("");
    const [loader, setLoader] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    useEffect(() => {
        SetProjectData([]);
        setLoader(true);
        getAllProject(
            0,
            '',
            selectedYear,
            '',
            selectedOU,
            (res) => {
                if (res?.status === 200) {
                    const data = res?.data?.data?.content?.map((item) => ({
                        id: item.projectID,
                        name: item?.projectName,
                        start: new Date(item.startDate),
                        end: new Date(item.endDate),
                        ...item,
                    }));
                    SetProjectData(data);
                    setLoader(false);
                }
            }
        );
    }, [selectedOU, selectedYear]);


    const handleStartDateChange = (e) => {
        const newStartDate = e.target.value;
        setStartDate(newStartDate);
        if (newStartDate > endDate) {
            setEndDate('');
        }
    };

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toISOString().split("T")[0];
    };

    useEffect(() => {
        getAllOU((res) => {
            if (res?.status === 200) {
                setOu(res.data.data);
            }
        });
    }, []);

    useEffect(() => {
        getAllTermYear((res) => {
            if (res?.status === 200) {
                setTermYear(res.data.data);
            }
        });
    }, []);

    const handleTaskClick = (project) => {
        setSelectedProject(project);
        setStartDate(formatDate(project.startDate))
        setEndDate(formatDate(project.endDate))
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
        setSelectedProject(null);
    };

    const handleOUChange = (e) => {
        setSelectedOU(e.target.value);
        setCurrentPage(1);
    };

    const handleYearChange = (e) => {
        setSelectedYear(e.target.value);
        setCurrentPage(1);
    };


    const TaskListTable = ({
        tasks,
        rowHeight,
        onExpanderClick,
    }) => {
        return (
            <div style={{ border: "1px solid #dfe1e5" }}>
                {tasks.map((item, i) => {
                    return (
                        <div
                            key={i}
                            style={{
                                height: rowHeight,
                                width: 280,
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                fontFamily: "sans-serif",
                                background: i % 2 === 0 ? "#ffffff" : "#f4f5f7",
                                padding: 10,
                            }}
                        >
                            <p
                                onClick={() => onExpanderClick(item)}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    margin: 0
                                }}
                            >
                                {item.name}
                            </p>
                        </div>
                    );
                })}
            </div>
        );
    };

    return (
        <div className="container mt-4">
            <div className='text-cl-primary'>Project Time line</div>
            <div className='mt-3 d-flex justify-content-end align-items-center gap-3 flex-wrap'>
                <div className="">
                    <select
                        className="form-select w-100"
                        aria-label="Select Year"
                        value={selectedYear}
                        onChange={handleYearChange}
                    >
                        <option value="">Select Year</option>
                        {termYear &&
                            termYear.map((yearItem) => (
                                <option
                                    key={yearItem.termyearId}
                                    value={yearItem.termYearID}
                                >
                                    {yearItem.termyear}
                                </option>
                            ))}
                    </select>
                </div>
                <div className="">
                    <select
                        className="form-select w-100"
                        aria-label="Select Entity"
                        value={selectedOU}
                        onChange={handleOUChange}
                    >
                        <option value="">Select Entity</option>
                        {ou &&
                            ou.map((ouItem) => (
                                <option key={ouItem.id} value={ouItem.ouID}>
                                    {ouItem.ouName}
                                </option>
                            ))}
                    </select>
                </div>
                <div>
                    <ViewSwitcher
                        onViewModeChange={(viewMode) => setView(viewMode)}
                        view={view}
                    />
                </div>
            </div>
            {
                loader ? (
                    <CommonLoader />
                ) : (
                    <div className='mt-4'>
                        {projectData && projectData.length > 0 ? (
                            <Gantt tasks={projectData} onClick={handleTaskClick}
                                rowHeight={40}
                                todayColor="rgba(246, 246, 247, .6)"
                                timeStep={100}
                                columnWidth={80}
                                barBackgroundColor='#00629B'
                                barBackgroundSelectedColor='#0E2954'
                                TaskListHeader={({ headerHeight }) => (
                                    <div
                                        style={{
                                            height: headerHeight,
                                            width: "auto",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            background: "#ffffff",
                                            padding: 10,
                                        }}
                                    >
                                        <h6 className='text-third fw-bold'>Projects</h6>
                                    </div>
                                )}
                                viewMode={view} TaskListTable={(props) => (
                                    <TaskListTable {...props} />
                                )} />
                        ) : null}

                    </div>

                )
            }



            {/* model */}
            <Modal show={modalIsOpen} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedProject && (
                        <div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    Start Date
                                </div>
                                <div>
                                    <div className="input-group input-group-sm">
                                        <input
                                            type="date"
                                            className="form-control"
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                            min={new Date().toISOString().split('T')[0]}
                                            value={startDate}
                                            onChange={handleStartDateChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4 d-flex justify-content-between align-items-center'>
                                <div>
                                    End Date
                                </div>
                                <div>
                                    <div className="input-group input-group-sm">
                                        <input
                                            type="date"
                                            className="form-control"
                                            aria-label="Sizing example input"
                                            aria-describedby="inputGroup-sizing-sm"
                                            min={startDate} // Set minimum end date to start date
                                            value={endDate}
                                            onChange={(e) => setEndDate(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <div>
                        <CommonButton onClick={handleCloseModal} close={true} text={"Close"} />
                    </div>
                    <div>
                        <CommonButton text={"Save"} />
                    </div>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default TimeLinePage;
