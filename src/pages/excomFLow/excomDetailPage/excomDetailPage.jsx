import React from 'react';
import CommonButton from '../../../components/common/commonButton/commonButton';
// import { FaEnvelope, FaWhatsapp, FaFacebook, FaLinkedin } from 'react-icons/fa';
import profile from '../../../assets/images/profile.png';

const CommitteeMemberCard = ({ photo, name, phone, email, academicYear }) => {
  return (
    <div className='card'>
      <div className='card-body d-flex'>
        <img src={photo || profile} alt='Profile' className='img-thumbnail me-3 rounded-circle' style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
        <div>
          <h5 className='card-title'>{name}</h5>
          <p className='card-text'>{email}</p>
          <p className='card-text'>{phone}</p>
          <p className='card-text'>{academicYear}</p>
          <div className='d-flex gap-2'>
            <a href={`mailto:${email}`} className='text-decoration-none'><FaEnvelope size={20} /></a>
            <a href={`https://wa.me/${phone}`} className='text-decoration-none'><FaWhatsapp size={20} /></a>
            <a href='#' className='text-decoration-none'><FaFacebook size={20} /></a>
            <a href='#' className='text-decoration-none'><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

const ExcomDetailPage = () => {
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

  return (
    <div className='container'>
      <div className='d-flex justify-content-end gap-4 align-items-center flex-wrap'>
        <div>
          <CommonButton onClick={() => { }} text={"Edit Excom"} />
        </div>
        <div className="">
          <select className="form-select w-100" aria-label="Large select example">
            <option selected>Term Year</option>
            <option value="1">1st Year</option>
            <option value="1">2nd Year</option>
            <option value="1">3rd Year</option>
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
    </div>
  );
}

export default ExcomDetailPage;
