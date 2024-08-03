import React, { useEffect, useState } from 'react';
import CommonButton from '../../../components/common/commonButton/commonButton';
import EditExcomModal from '../../../components/models/editExcomModel/editExcomModel';
import Envelope from '../../../assets/icons/Circled Envelope.png';
import WhatsApp from '../../../assets/icons/WhatsApp.png';
import Facebook from '../../../assets/icons/Facebook.png';
import Linkedin from '../../../assets/icons/LinkedIn Circled.png';
import profile from '../../../assets/images/profile.png';
import Info from '../../../assets/images/Info.png';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CommonLoader from '../../../components/common/commonLoader/commonLoader';



const CommitteeMemberCard = ({ photo, name, phone, email, academicYear }) => {
  const [editExcomModelShow, setEditExcomModelShow] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const handleCloseEditExcomModel = () => setEditExcomModelShow(false);
  const handleShowEditExcomModel = (member) => {
    setSelectedMember(member);
    setEditExcomModelShow(true);
  };

  return (
    <div
      className="card"
      style={{
        borderRadius: '10px',
        padding: '10px',
        position: 'relative',
        width: '308px',
        height: 'auto',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <div className="card-body d-flex">
        <img
          src={photo || profile}
          alt="Profile"
          className="img-thumbnail me-3 rounded-circle"
          style={{
            width: '70px',
            height: '70px',
            objectFit: 'cover',
            borderRadius: '50%',
            border: '2px solid #ccc'
          }}
        />
        <div style={{ flex: 1 }}>
          <h5 className="card-title" style={{ marginBottom: '8px', fontWeight: 'bold', fontSize: '16px' }}>{name}</h5>
          <p className="card-text" style={{ marginBottom: '4px', fontSize: '12px', color: '#555' }}>{email}</p>
          <p className="card-text" style={{ marginBottom: '4px', fontSize: '12px', color: '#555' }}>{phone}</p>
          <p className="card-text" style={{ marginBottom: '8px', fontSize: '12px', color: '#555' }}>{academicYear}</p>
          <div className="d-flex gap-2">
            <img src={Facebook} alt="Facebook" style={{ width: '25px', height: '25px' }} />
            <img src={Linkedin} alt="Linkedin" style={{ width: '25px', height: '25px' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const ExcomDetailPage = () => {
  const [editExcomModelShow, setEditExcomModelShow] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const navigate = useNavigate();
  const [assignPolicy, setAssignPolicy] = useState(false);
  const userData = useSelector((state) => state.user.userData);
  const [pageLoading, setPageLoading] = useState(true);
  useEffect(() => {
    setPageLoading(true)
    if (userData) {
      const isExcomAvailable = userData?.role?.some(role =>
        role.policies.some(policy => policy.policyCode === "EXCOM")
      );


      const isExcomAssignAvailable = userData?.role?.some(role =>
        role.policies.some(policy => policy.policyCode === "EXCOM_ASSIGN")
      );




      if (!isExcomAvailable) {
        navigate('/dashboard')
      } else {
        setAssignPolicy(isExcomAssignAvailable)
        setPageLoading(false);


      }
    }
  }, [userData])
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
    <>
      {pageLoading ? (
        <CommonLoader />
      ) : (
        <div className="container" style={{ padding: '20px' }}>
          {
            assignPolicy ? (
              <div className="d-flex justify-content-end gap-4 align-items-center flex-wrap">
                <div>
                  <CommonButton onClick={() => setEditExcomModelShow(true)} text={"Edit Excom"} />
                </div>
                <div>
                  <select className="form-select w-100" aria-label="Term Year Select">
                    <option selected>Term Year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                  </select>
                </div>
              </div>
            ) : null
          }


          <div className='text-cl-primary mt-4'>Committee Members details</div>

          <div className="row mt-4">
            {committeeMembers.map((member, index) => (
              <div className="col-12 col-md-6 mb-4" key={index}>
                <div className="mb-2 fw-bold" style={{ fontSize: '18px', color: '#555' }}>{member.position}</div>
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
            <div key={index} className="mt-4">
              <div className="fw-bold" style={{ fontSize: '20px', color: '#333' }}>{committee.name}</div>
              <div className="row mt-2">
                {committee.members.map((member, index) => (
                  <div className="col-12 col-md-4 mb-4" key={index}>
                    <div className="mb-2 fw-bold" style={{ fontSize: '18px', color: '#555' }}>{member.position}</div>
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
      )}
    </>

  );
};

export default ExcomDetailPage;
