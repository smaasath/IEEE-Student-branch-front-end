import React, { useState } from 'react';
import { Modal,  Form } from 'react-bootstrap';
import CommonButton from '../../common/commonButton/commonButton';


const AddSubTaskModel = ({ show, onHide, editable, disabled }) => {
//   const [subTaskData, setSubTaskData] = useState({
//     title: '',
//     priority: '',
//     due: '',
//   });

//   const handleChange = (e) => {
//     setSubTaskData({
//       ...subTaskData,
//       [e.target.name]: e.target.value,
//     });
//   };

  

  return (
    <>
    
    <Modal show={show} onHide={onHide} animation={true} size="md" 
    aria-labelledby="contained-modal-title-vcenter" centered >

      <Modal.Header closeButton>
        <Modal.Title className='text-cl-primary' id="contained-modal-title-vcenter">Add Sub Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className='d-flex flex-column'>

      <div className='mt-3'>
                            <div className="">
                                <label for="exampleFormControlInput1" className="form-label text-dark">Title</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="task title" disabled={disabled} />
                            </div>

                            <div className="">
                                <label for="exampleFormControlInput1" className="form-label text-dark">Priority</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="priority" disabled={disabled} />
                            </div>

                            <div className='mt-3'>
                            <label htmlFor="startDate" className="form-label text-dark">Due Date</label>
                            <input type="date" className="form-control" id="date" />
                        </div>

                            <div className="mt-3">
                            <label for="exampleFormControlInput1" className="form-label text-dark">Status</label>
                            <select className="form-select w-100" aria-label="Large select example" disabled={disabled}>
                                <option selected>Select status</option>
                                <option value="1">To Do</option>
                                <option value="2">Ongoing</option>
                            </select>
                        </div>


                        </div>
        
        </div>
      </Modal.Body>
      <Modal.Footer className='d-flex justify-content-end'>
      <div>
                        <CommonButton onClick={onHide} close={true} text={"Close"} />
                    </div>
                    {
                        disabled ? null : (
                            <div>
                                <CommonButton onClick={onHide} text={editable ? "Save" : "Add"} />
                            </div>
                        )
                    }
      </Modal.Footer>
    </Modal>
    </>
  );
};

export default AddSubTaskModel;
