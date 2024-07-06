import React, { useState } from 'react';
import CommonButton from '../../../components/common/commonButton/commonButton';
import EditExcomModal from '../../../components/models/editExcomModel/editExcomModel';
import Envelope from '../../../assets/icons/Circled Envelope.png';
import WhatsApp from '../../../assets/icons/WhatsApp.png';
import Facebook from '../../../assets/icons/Facebook.png';
import Linkedin from '../../../assets/icons/LinkedIn Circled.png';
import profile from '../../../assets/images/profile.png';
import Info from '../../../assets/images/Info.png';

const CommitteeMemberCard = ({ photo, name, phone, email, academicYear }) => {
  const [editExcomModelShow, setEditExcomModelShow] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleCloseEditExcomModel = () => setEditExcomModelShow(false);
  const handleShowEditExcomModel = (member) => {
    setSelectedMember(member);
    setEditExcomModelShow(true);
  };

  return (
    <div className='card' style={{ borderRadius: '10px', padding: '20px', position: 'relative' }}>
      <div className='card-body d-flex'>
        <img
          src={photo || profile}
          alt='Profile'
          className='img-thumbnail me-3 rounded-circle'
          style={{ width: '100px', height: '100px', objectFit: 'cover' }}
        />
        <div>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>{email}</p>
          <p className='card-text'>{phone}</p>
          <p className='card-text'>{academicYear}</p>
          <div className='d-flex gap-2'>
            <img src={Envelope} alt='Envelope'/>
            <img src={WhatsApp} alt='WhatsApp'/>
            <img src={Facebook} alt='Facebook'/>
            <img src={Linkedin} alt='Linkedin'/>
          </div>
        </div>
      </div>
      <img
        src={Info}
        alt='Info'
        style={{ position: 'absolute', bottom: '10px', right: '10px', width: '24px', height: '24px' }}
      />
    </div>
  );
};

const ExcomDetailPage = () => {
  const [editExcomModelShow, setEditExcomModelShow] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  const handleShowEditExcomModel = (member) => {
    setSelectedMember(member);
    setEditExcomModelShow(true);
  };

  const committeeMembers = [
    {
      position: 'Chair',
      photo: profile,
      name: 'Thilini Priyangika',
      phone: '+94712668316',
      email: 'thilini@gmail.com',
      academicYear: '3rd Year',
    },
    {
      position: 'Vice Chair',
      photo: profile,
      name: 'Thilini Priyangika',
      phone: '+94712668316',
      email: 'thilini@gmail.com',
      academicYear: '3rd Year',
    },
    {
      position: 'Secretary',
      photo: profile,
      name: 'Thilini Priyangika',
      phone: '+94712668316',
      email: 'thilini@gmail.com',
      academicYear: '3rd Year',
    },
    {
      position: 'Assistant Secretary',
      photo: profile,
      name: 'Thilini Priyangika',
      phone: '+94712668316',
      email: 'thilini@gmail.com',
      academicYear: '3rd Year',
    },
    {
      position: 'Treasurer',
      photo: profile,
      name: 'Thilini Priyangika',
      phone: '+94712668316',
      email: 'thilini@gmail.com',
      academicYear: '3rd Year',
    },
    {
      position: 'Webmaster',
      photo: profile,
      name: 'Thilini Priyangika',
      phone: '+94712668316',
      email: 'thilini@gmail.com',
      academicYear: '3rd Year',
    },
  ];

  const standingCommittees = [
    {
      name: 'Public Visibility Standing Committee',
      members: [
        {
          position: 'Head',
          photo: profile,
          name: 'Thilini Priyangika',
          phone: '+94712668316',
          email: 'thilini@gmail.com',
          academicYear: '3rd Year',
        },
        {
          position: 'Member',
          photo: profile,
          name: 'Thilini Priyangika',
          phone: '+94712668316',
          email: 'thilini@gmail.com',
          academicYear: '3rd Year',
        },
        {
          position: 'Member',
          photo: profile,
          name: 'Thilini Priyangika',
          phone: '+94712668316',
          email: 'thilini@gmail.com',
          academicYear: '3rd Year',
        },
      ],
    },
    {
      name: 'Editorial Standing Committee',
      members: [
        {
          position: 'Head',
          photo: profile,
          name: 'Thilini Priyangika',
          phone: '+94712668316',
          email: 'thilini@gmail.com',
          academicYear: '3rd Year',
        },
        {
          position: 'Member',
          photo: profile,
          name: 'Thilini Priyangika',
          phone: '+94712668316',
          email: 'thilini@gmail.com',
          academicYear: '3rd Year',
        },
        {
          position: 'Member',
          photo: profile,
          name: 'Thilini Priyangika',
          phone: '+94712668316',
          email: 'thilini@gmail.com',
          academicYear: '3rd Year',
        },
      ],
    },
    {
      name: 'Membership Development Standing Committee',
      members: [
        {
          position: 'Head',
          photo: profile,
          name: 'Thilini Priyangika',
          phone: '+94712668316',
          email: 'thilini@gmail.com',
          academicYear: '3rd Year',
        },
        {
          position: 'Member',
          photo: profile,
          name: 'Thilini Priyangika',
          phone: '+94712668316',
          email: 'thilini@gmail.com',
          academicYear: '3rd Year',
        },
        {
          position: 'Member',
          photo: profile,
          name: 'Thilini Priyangika',
          phone: '+94712668316',
          email: 'thilini@gmail.com',
          academicYear: '3rd Year',
        },
      ],
    },
  ];

  return (
    <div className='container'>
      <div className='d-flex justify-content-end gap-4 align-items-center flex-wrap'>
        <div>
          <CommonButton onClick={() => setEditExcomModelShow(true)} text={"Edit Excom"} />
        </div>
        <div className="">
          <select className="form-select w-100" aria-label="Term Year Select">
            <option selected>Term Year</option>
            <option value="1">1st Year</option>
            <option value="2">2nd Year</option>
            <option value="3">3rd Year</option>
          </select>
        </div>
      </div>

      <div className='text-cl-primary mt-4'>Committee Members Details</div>

      <div className='row mt-4'>
        {committeeMembers.map((member, index) => (
          <div className='col-6 col-md-6 mb-4' key={index}>
            <div className='mb-2 fw-bold'>{member.position}</div>
            <CommitteeMemberCard
              photo={member.photo}
              name={member.name}
              phone={member.phone}
              email={member.email}
              academicYear={member.academicYear}
            />
          </div>
        ))}
      </div>

      {standingCommittees.map((committee, index) => (
        <div key={index} className='mt-4'>
          <div className='fw-bold'>{committee.name}</div>
          <div className='row mt-2'>
            {committee.members.map((member, index) => (
              <div className='col-6 col-md-4 mb-4' key={index}>
                <div className='mb-2 fw-bold'>{member.position}</div>
                <CommitteeMemberCard
                  photo={member.photo}
                  name={member.name}
                  phone={member.phone}
                  email={member.email}
                  academicYear={member.academicYear}
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <EditExcomModal show={editExcomModelShow} onHide={() => setEditExcomModelShow(false)} selectedMember={selectedMember} />
    </div>
  );
};

export default ExcomDetailPage;
