import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CommonButton from '../../common/commonButton/commonButton';
import profile from '../../../assets/images/profile.png';
import CommonSearch from '../../common/commonSearch/commonSearch';

const UserRoleModel = ({ onHide, show, editable, disabled, id }) => {
  const [selectedRole, setSelectedRole] = useState('');
  const [selectedMember, setSelectedMember] = useState(null); 

  const members = [
    {
      name: 'Thilina Kumara',
      email: 'thilina@gmail.com',
      phone: '+94712668316',
      academicYear: '3rd Year',
      photo: profile,
    },
    {
      name: 'Thilini Priyangika',
      email: 'thilini@gmail.com',
      phone: '+94712668316',
      academicYear: '3rd Year',
      photo: profile,
    },
    {
      name: 'Thihara Mallawaarachchi',
      email: 'thihara@gmail.com',
      phone: '+94712668316',
      academicYear: '2nd Year',
      photo: profile,
    },
  ];

  const handleSelectMember = (member) => {
    setSelectedMember(member);
  };

  const handleSubmit = () => {
    onHide(); 
  };

  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        animation={true}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-cl-primary' id="contained-modal-title-vcenter">
            {editable ? "Edit" : disabled ? "View" : "Add"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex flex-column'>
            <div className='mt-3'>
                <div className="">
                <label htmlFor="exampleFormControlInput1" className="form-label text-dark">Role Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Role Name" disabled={disabled} />
                </div>
            </div>
            <div className="mt-3">
            <label htmlFor="exampleFormControlInput1" className="form-label text-dark">Type</label>
            <select className="form-select w-100" aria-label="Large select example" disabled={disabled}>
              <option>Select Type</option>
              <option value="1">pl</option>
            </select>
          </div>

            <div className='mt-3'>
              <CommonSearch /> 
              <div className="list-group mt-2">
                {members.map((member, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`list-group-item list-group-item-action ${selectedMember === member ? 'active' : ''}`}
                    onClick={() => handleSelectMember(member)}
                  >
                    <div className="d-flex align-items-center">
                      <img src={member.photo} alt="Profile" className="rounded-circle me-3" style={{ width: '25px', height: '25px', objectFit: 'cover' }} />
                      <div>
                        <h6 className="mb-0">{member.name}</h6>
                        <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>{member.email} | {member.phone}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-end'>
        <div>
          <CommonButton onClick={onHide} close={true} text={"Close"} />
        </div>
        {disabled ? null : (
          <div>
            <CommonButton onClick={onHide} text={editable ? "Save" : "Add"} />
          </div>
        )}
      </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserRoleModel;
