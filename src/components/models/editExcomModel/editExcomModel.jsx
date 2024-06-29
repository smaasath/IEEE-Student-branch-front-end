import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CommonButton from '../../common/commonButton/commonButton';
import profile from '../../../assets/images/profile.png';
import Envelope from '../../../assets/icons/Circled Envelope.png';
import WhatsApp from '../../../assets/icons/WhatsApp.png';
import Facebook from '../../../assets/icons/Facebook.png';
import Linkedin from '../../../assets/icons/LinkedIn Circled.png';

const EditExcomModal = ({ onHide, show, selectedMember }) => {
  const [selectedRole, setSelectedRole] = useState('');

  const members = [
    {
      name: 'Thilina Kumara',
      email: 'thilini@gmail.com',
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
    // Add more members as needed
  ];

  const handleSelectMember = (member) => {
    setSelectedMember(member);
  };

  return (
    <>
      <Modal
        show={show} onHide={onHide} animation={true}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-cl-primary' id="contained-modal-title-vcenter">
            Assign Executive Committee
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex flex-column'>
            <div className="mt-3">
              <label htmlFor="roleSelect" className="form-label text-dark">Select Role</label>
              <select
                id="roleSelect"
                className="form-select w-100"
                aria-label="Select Role"
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
              >
                <option value="" disabled>Select Role</option>
                <option value="Chair">Chair</option>
                <option value="Vice Chair">Vice Chair</option>
                <option value="Secretary">Secretary</option>
                <option value="Assistant Secretary">Assistant Secretary</option>
                <option value="Treasurer">Treasurer</option>
                <option value="Webmaster">Webmaster</option>
              </select>
            </div>

            <div className='mt-3'>
              <label htmlFor="memberSelect" className="form-label text-dark">Select Member</label>
              <input
                type="text"
                className="form-control"
                placeholder="Search..."
                disabled
              />
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
                        <h5 className="mb-1">{member.name}</h5>
                        <p className="mb-1">{member.email}</p>
                        <small>{member.academicYear}</small>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {selectedMember && (
              <div className='mt-3'>
                <div className='card'>
                  <div className='card-body d-flex'>
                    <img src={selectedMember.photo} alt='Profile' className='img-thumbnail me-3 rounded-circle' style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                    <div>
                      <h5 className='card-title'>{selectedMember.name}</h5>
                      <p className='card-text'>{selectedMember.email}</p>
                      <p className='card-text'>{selectedMember.phone}</p>
                      <p className='card-text'>{selectedMember.academicYear}</p>
                      <div className='d-flex gap-2'>
                        <img src={Envelope} alt='Envelope' />
                        <img src={WhatsApp} alt='WhatsApp' />
                        <img src={Facebook} alt='Facebook' />
                        <img src={Linkedin} alt='Linkedin' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-end'>
          <div>
            <CommonButton onClick={onHide} text={"Done"} />
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditExcomModal;
