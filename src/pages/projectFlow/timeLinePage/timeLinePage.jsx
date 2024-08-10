import React, { useState } from 'react';
import { Gantt, ViewMode } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import { Modal, Button } from 'react-bootstrap';
import ViewSwitcher from '../../../components/common/viewSwitcher/viewSwitcher';
import CommonButton from '../../../components/common/commonButton/commonButton';


const TimeLinePage = () => {
    const [tasks] = useState([
        {
            start: new Date(2020, 1, 1),
            end: new Date(2020, 3, 2),
            name: 'IEEE OpenDay 2024',
            id: '1',
            type: 'task',
        },
    ]);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState(null);
    const [view, setView] = useState(ViewMode.Month);

    const handleTaskClick = (task) => {
        setSelectedTask(task);
        setModalIsOpen(true);
    };

    const handleCloseModal = () => {
        setModalIsOpen(false);
        setSelectedTask(null);
    };

    const TaskListTable = ({
        tasks,
        rowWidth,
        rowHeight,
        onExpanderClick,
        handleAddTask
    }) => {
        return (
            <div style={{ border: "1px solid #dfe1e5" }}>
                {tasks.map((item, i) => {
                    const isProject = item.type === "project";
                    return (
                        <div
                            key={i}
                            style={{
                                height: rowHeight,
                                width: "auto",
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
                    <select className="form-select w-100" aria-label="Large select example">
                        <option selected>Select Year</option>
                        <option value="1">2024</option>
                    </select>
                </div>
                <div className="">
                    <select className="form-select w-100" aria-label="Large select example">
                        <option selected>Select Entity</option>
                        <option value="1">CS Chapter</option>
                    </select>
                </div>
                <div>
                    <ViewSwitcher
                        onViewModeChange={(viewMode) => setView(viewMode)}
                        view={view}
                    />
                </div>
            </div>

            <div className='mt-4'>
                <Gantt tasks={tasks} onClick={handleTaskClick}
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
            </div>


            {/* model */}
            <Modal show={modalIsOpen} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Task Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedTask && (
                        <div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div>
                                    Start Date
                                </div>
                                <div className=''>
                                    <div className="input-group input-group-sm">
                                        <input type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                                    </div>
                                </div>
                            </div>
                            <div className='mt-4 d-flex justify-content-between align-items-center'>
                                <div>
                                    End Date
                                </div>
                                <div className=''>
                                    <div className="input-group input-group-sm">
                                        <input type="date" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
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
