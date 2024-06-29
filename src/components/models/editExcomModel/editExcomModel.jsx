import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import CommonButton from '../../common/commonButton/commonButton';
import profile from '../../../assets/images/profile.png';
import Envelope from '../../../assets/icons/Circled Envelope.png';
import WhatsApp from '../../../assets/icons/WhatsApp.png';
import Facebook from '../../../assets/icons/Facebook.png';
import Linkedin from '../../../assets/icons/LinkedIn Circled.png';
import SearchIcon from '../../../assets/icons/search.png'; 

const EditExcomModal = ({ onHide, show, selectedMember }) => {
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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
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
              <div className="input-group">
                <span className="input-group-text">
                  <img src={SearchIcon} alt="Search" style={{ width: '20px', height: '20px' }} />
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
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

            {selectedMember && (
              <div className='mt-3'>
                <div className='card'>
                  <div className='card-body d-flex'>
                    <img src={selectedMember.photo} alt='Profile' className='img-thumbnail me-3 rounded-circle' style={{ width: '75px', height: '75px', objectFit: 'cover' }} />
                    <div>
                      <h5 className='card-title'>{selectedMember.name}</h5>
                      <p className='card-text'>{selectedMember.email}</p>
                      <p className='card-text'>{selectedMember.phone}</p>
                      <p className='card-text'>{selectedMember.academicYear}</p>
                      <div className='d-flex gap-2 mt-2'>
                        <img src={Envelope} alt='Envelope' style={{ width: '20px', height: '20px' }} />
                        <img src={WhatsApp} alt='WhatsApp' style={{ width: '20px', height: '20px' }} />
                        <img src={Facebook} alt='Facebook' style={{ width: '20px', height: '20px' }} />
                        <img src={Linkedin} alt='Linkedin' style={{ width: '20px', height: '20px' }} />
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
