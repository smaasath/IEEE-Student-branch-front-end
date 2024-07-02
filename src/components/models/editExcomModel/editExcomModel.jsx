import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CommonButton from '../../common/commonButton/commonButton';
import profile from '../../../assets/images/profile.png';
import Envelope from '../../../assets/icons/Circled Envelope.png';
import WhatsApp from '../../../assets/icons/WhatsApp.png';
import Facebook from '../../../assets/icons/Facebook.png';
import Linkedin from '../../../assets/icons/LinkedIn Circled.png';
import CommonSearch from '../../common/commonSearch/commonSearch';

const EditExcomModel = ({ onHide, show, selectedMember }) => {
  const [selectedRole, setSelectedRole] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [members, setMembers] = useState([
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
  ]);

  const handleSelectMember = (member) => {
    setSelectedMember(member);
  };

  const filteredMembers = members.filter((member) =>
    member.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
              <CommonSearch/>
              <div className="list-group mt-2">
                {filteredMembers.map((member, index) => (
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
                        <p className="mb-0 text-muted" style={{ fontSize: '12px' }}>{member.email}</p>
                        <small>{member.academicYear}</small>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Modal.Body>
        
        <div className='card mt-3' style={{ maxWidth: '300px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', marginLeft: '20px' }}>
          <div className='card-body d-flex align-items-center'>
            <img
              src={profile}
              alt='Profile'
              className='img-thumbnail me-3 rounded-circle'
              style={{ width: '80px', height: '80px', objectFit: 'cover' }}
            />
            <div>
              <h5 className='card-title mb-1'>Thilini Priyangika</h5>
              <p className='card-text mb-1'>thilini@gmail.com</p>
              <p className='card-text mb-1'>+94712668316</p>
              <p className='card-text mb-0'>3rd Year</p>
              <div className='d-flex gap-2 mt-2'>
                <img src={Envelope} alt='Envelope' style={{ width: '20px', height: '20px' }} />
                <img src={WhatsApp} alt='WhatsApp' style={{ width: '20px', height: '20px' }} />
                <img src={Facebook} alt='Facebook' style={{ width: '20px', height: '20px' }} />
                <img src={Linkedin} alt='Linkedin' style={{ width: '20px', height: '20px' }} />
              </div>
            </div>
          </div>
        </div>

        <Modal.Footer className='d-flex justify-content-end mt-3'>
                <div>
                  <CommonButton onClick={onHide} text={"Done"} />
                </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditExcomModel;
