import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import CommonButton from '../../common/commonButton/commonButton';
import CommonSearch from '../../common/commonSearch/commonSearch';


const CommonSearchModel = ({ onHide, show, title, tableData, tableHeading, children, onClick }) => {

    const [method, setMethod] = useState("Bank")

    const methods = ["Bank", "Inside", "Budget"]

    return (
        <Modal
            show={show} onHide={onHide} animation={true}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className='text-cl-primary' id="contained-modal-title-vcenter">
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <div className='d-flex gap-4 justify-content-between align-content-center text-center align-items-center flex-wrap w-100'>
                            <CommonSearch />
                        {children}
                    </div>

                    <div className='mt-4 overflow-scroll custom-scrollbar' style={{ maxHeight: 400 }}>
                        {
                            tableData?.map((item, index) => {
                                return (
                                    <>
                                        <button onClick={() => onClick(item.id)} className='d-flex border-0 w-100 pt-2 border-bottom border-dark-subtle pb-2 justify-content-around align-items-center common-serach-model' key={index}>
                                            {tableHeading?.map((head, headIndex) => {
                                                return (
                                                    <div key={headIndex}>
                                                        {item[head]}
                                                    </div>
                                                );
                                            })}

                                        </button>


                                    </>

                                );
                            })
                        }


                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className='d-flex justify-content-end'>
                <div>
                    <CommonButton onClick={onHide} close={true} text={"Close"} />
                </div>

            </Modal.Footer>
        </Modal>
    )
}

export default CommonSearchModel
