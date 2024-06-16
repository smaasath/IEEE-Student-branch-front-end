import React, { useState } from 'react';
import { Gantt, ViewMode } from 'gantt-task-react';
import "gantt-task-react/dist/index.css";
import { Modal, Button } from 'react-bootstrap';
import ViewSwitcher from '../../../components/common/viewSwitcher/viewSwitcher';

const TimeLinePage = () => {
    const getRandomColor = () => {
        const colors = [
            '#ff5733',
            '#3357ff',
            '#ff33a1',
            '#9933ff',
            '#ff3380',
        ];

        return colors[Math.floor(Math.random() * colors.length)];
    };
    const [tasks] = useState([
        {
            start: new Date(2020, 1, 1),
            end: new Date(2020, 3, 2),
            name: 'Idea',
            id: 'Task 0',
            type: 'task',
            progress: 100,
            styles: { progressColor: '#0E2954' },
        },
        {
            start: new Date(2020, 1, 1),
            end: new Date(2020, 3, 2),
            name: 'Idea',
            id: 'Task 0',
            type: 'task',
            progress: 100,
            styles: {  progressColor: '#0E2954' },
        }, 
        {
            start: new Date(2021, 1, 1),
            end: new Date(2022, 3, 2),
            name: 'Idea',
            id: 'Task 0',
            type: 'task',
            progress: 100,
            styles: {  progressColor: '#0E2954' },
        }, 
        {
            start: new Date(2022, 1, 1),
            end: new Date(2023, 3, 2),
            name: 'Idea',
            id: 'Task 0',
            progress: 100,
            type: 'task',
            styles: {  progressColor: '#0E2954' },
        }, 
        {
            start: new Date(2023, 1, 1),
            end: new Date(2024, 3, 2),
            name: 'Idea',
            id: 'Task 0',
            type: 'task',
            progress: 100,
            styles: {  progressColor: '#0E2954' },
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
                            key={item.id}
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
            <ViewSwitcher
                onViewModeChange={(viewMode) => setView(viewMode)}
            />
            <Gantt tasks={tasks} onClick={handleTaskClick}
                rowHeight={40}
                todayColor="rgba(246, 246, 247, .6)"
                timeStep={100}
                columnWidth={80}
                TaskListHeader={({ headerHeight }) => (
                    <div
                        style={{
                            height: headerHeight,
                                 width: "auto",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                background:  "#ffffff" ,
                                padding: 10,
                        }}
                    >
                       <h6 className='text-third fw-bold'>Projects</h6> 
                    </div>
                )}
                viewMode={view} TaskListTable={(props) => (
                    <TaskListTable {...props} />
                )} />
            <Modal show={modalIsOpen} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Task Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedTask && (
                        <div>
                            <h5>{selectedTask.name}</h5>
                            <p><strong>Start:</strong> {selectedTask.start.toDateString()}</p>
                            <p><strong>End:</strong> {selectedTask.end.toDateString()}</p>
                            <p><strong>Progress:</strong> {selectedTask.progress}%</p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default TimeLinePage;
