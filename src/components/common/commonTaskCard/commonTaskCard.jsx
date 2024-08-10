import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import testUser from '../../../assets/images/testUser.png'
import deadline from '../../../assets/icons/deadline.png'
import enter from '../../../assets/icons/Enter.png'
import CommonPriorityContainer from '../commonPriorityContainer/commonPriorityContainer';
import TaskDetailModel from '../../models/taskDetailModel/taskDetailModel';




const CommonTaskCard = ({ task, onClick, project, excom }) => {

    const [showTaskModal, setShowTaskModal] = useState(false);

    const openTaskModal = () => {
        setShowTaskModal(true);
    };

    const closeTaskModal = () => {
        setShowTaskModal(false);
    };

    return (
        <>
            <Draggable key={task.id} draggableId={task.id}>
                {(provided) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                            width: 287,
                            ...provided.draggableProps.style,
                        }}
                        className='bg-white p-2 rounded-4 pt-4'
                    >
                        <div className='d-flex justify-content-between align-items-center'>
                            <div className='d-flex align-items-center gap-2'>
                                <CommonPriorityContainer priority={"HIGH"} />
                            </div>
                            <button onClick={openTaskModal} className='bg-transparent border-0'>
                                <img width={35} src={enter} />
                            </button>
                        </div>

                        <div className='mt-3'>
                            <h6 className='fw-bold'>Create project banner</h6>
                        </div>
                        <div className='mt-1'>
                            <p className=''>Choose an image that represents the essence of your project. This could be a high-tech graphic, a creative concept, or a visually appealing abstract design.</p>
                        </div>
                        <div className='d-flex justify-content-between align-items-center mt-3'>
                            <div className='d-flex ms-2'>
                                <div
                                    style={{ width: 29, height: 29, marginRight: -5 }}
                                    className="bg-white  rounded-circle d-flex justify-content-center align-items-center"
                                >
                                    <img
                                        src={testUser}
                                        width={25}
                                        height={25}
                                        className="rounded-circle"
                                    />
                                </div>
                            </div>
                            <div className='text-black-50' style={{ fontSize: 12 }}>
                                + 1 people
                            </div>
                            <div className='d-flex gap-2 align-items-center text-black-50'>
                                <div>
                                    <img src={deadline} width={15} />
                                </div>
                                <div className='text-black-50' style={{ fontSize: 12 }}>
                                    2024/09/11
                                </div>
                            </div>
                        </div>
                        {/* {task.content} */}
                    </div>
                )}
            </Draggable>

            <TaskDetailModel project={project} excom={excom} show={showTaskModal} onHide={closeTaskModal} taskData={{ title: "lo" }} />
        </>
    )
}

export default CommonTaskCard
