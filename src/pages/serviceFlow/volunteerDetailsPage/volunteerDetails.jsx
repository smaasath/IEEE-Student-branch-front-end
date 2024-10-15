
import React, { useEffect, useState } from "react";
import profile from '../../../assets/images/profile.png';
import CommonTable from '../../../components/common/commonTable/commonTable';
import CommonSearch from '../../../components/common/commonSearch/commonSearch'
import CommonPagination from '../../../components/common/commonPagination/commonPagination'
import VolunteerViewModel from "../../../components/models/volunteerViewModel/volunteerViewModel";
import CommonLoader from "../../../components/common/commonLoader/commonLoader";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PolicyValidate } from "../../../utils/valitations/Valitation";




const BestVolunteerCard = ({ photo, name, completedTask, entrolledProjects }) => {
  return (
    <div className='card bg-white rounded common-shadow text-center' style={{ width: '220px', height: '240px', position: 'relative' }}>
      <div className='header bg-third text-white py-2 rounded-top' style={{ fontSize: '18px', fontWeight: 'bold' }}>
        {name}
      </div>
      <div className='container' style={{ marginTop: '10px' }}>
        <img src={photo || profile} alt='Profile' className='img-thumbnail me-3 rounded-circle' style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
      </div>

      <div className='info mt-1 ' style={{ margin: '10px' }}>
        <div className='d-flex justify-content-between py-2 '>
          <span>Complete task</span>
          <span className="badge rounded-circle" style={{ backgroundColor: '#6c63ff', color: 'white', width: '24px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {completedTask}
          </span>
        </div>

        <div className="d-flex justify-content-between py-2">
          <span>Entrolled Projects</span>
          <span className="badge rounded-circle" style={{ backgroundColor: '#ff4b4b', color: 'white', width: '24px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {entrolledProjects}
          </span>
        </div>

      </div>
    </div>
  );
}

const VolunteerDetailsPage = () => {


  const [currentPage, setCurrentPage] = useState(1);

  const [volunteerDetailModalShow, setVolunteerDetailModalShow] = useState(false);
  const [selectedVolunteer, setSelectedVolunteer] = useState(null);
  const userData = useSelector((state) => state.user.userData);
  const [pageLoading, setPageLoading] = useState(true);
  const navigate = useNavigate()
  useEffect(() => {
    setPageLoading(true)
    if (userData) {
      const isFinanceAvailable = PolicyValidate(userData,"SERVICE_VOLUNTEER")
      if (!isFinanceAvailable) {
        navigate('/dashboard')
      } else {
        setPageLoading(false);
      }
    }
  }, [userData])

  const handleCloseVolunteerDetailModal = () => setVolunteerDetailModalShow(false);
  const handleShowVolunteerDetailModal = () => {
    // setSelectedVolunteer(volunteer);
    setVolunteerDetailModalShow(true);
  };
  const bestVolunteer = [
    {

      photo: profile,
      name: 'Thilini Priyangika',
      completedTask: '9',
      entrolledProjects: '5',

    },

  ];

  const tableHeading = [
    {
      label: "Name",
      value: "name"
    },
    {
      label: "Name With Initial",
      value: "name_with_initial"
    },
    {
      label: "Email",
      value: "email"
    },
    {
      label: "Contact No",
      value: "contact_no"
    },
    {
      label: "Degree",
      value: "degree"
    },
    {
      label: "Role",
      value: "role"
    },
    {
      label: "Academic Year",
      value: "academic_year"
    },
    {
      label: "",
      value: "ACTION",
      type: ["VIEW", "EDIT"]
    },
  ];

  const tableData = [
    {
      name: "W.D.Kavindra Weerasinghe",
      name_with_initial: "W.D.K.Weerasinghe",
      email: "wdk@gmail.com",
      contact_no: "0718596324",
      degree: "CST",
      role: "Chair",
      academic_year: "3rd year",
    },
    {
      name: "A.M.Thilini Priyangika",
      name_with_initial: "A.M.T.P.Adhikari",
      email: "thilini@gmail.com",
      contact_no: "0712956874",
      degree: "CST",
      role: "Secretory",
      academic_year: "3rd year",
    },
    {
      name: "T.P.G.Senura Adithya",
      name_with_initial: "T.P.G.S.Adithya",
      email: "senura@gmail.com",
      contact_no: "0701975648",
      degree: "ICT",
      role: "Member",
      academic_year: "2nd year",
    },
  ];
  return (
    <>
      {pageLoading ? (
        <CommonLoader />
      ) : (
        <div className='container'>

          <div className='text-cl-primary mt-3'>Best Volunteer</div>

          <div className='row mt-4'>
            {bestVolunteer.map((volunteer, index) => (
              <div className='col-12 col-md-6 mb-4' key={index}>

                <BestVolunteerCard
                  photo={volunteer.photo}
                  name={volunteer.name}
                  completedTask={volunteer.completedTask}
                  entrolledProjects={volunteer.entrolledProjects}

                />
              </div>
            ))}
          </div>

          <div className='mt-5 d-flex justify-content-between align-items-center gap-4 flex-wrap'>
            <div className='text-cl-primary'>Volunteers</div>

          </div>

          <div className='mt-4 d-flex flex-column gap-3 justify-content-center bg-white rounded-2 common-shadow p-3'>
            <div className='mt-4 table-container'>
              <div className='mt-2 d-flex flex-wrap justify-content-between align-items-center'>
                <CommonSearch primary={true} />
              </div>
              <div className='mt-4 table-container'>
                <CommonTable
                  tableHeading={tableHeading}
                  primary={true}
                  tableData={tableData}
                  loading={false}
                  viewAction={() => { handleShowVolunteerDetailModal() }}
                  editAction={(id) => { handleShowVolunteerDetailModal() }} />
              </div>
            </div>

            <div className='mt-4 d-flex justify-content-end'>
              <CommonPagination pages={10} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
          </div>
        </div>
      )}
      <VolunteerViewModel
        show={volunteerDetailModalShow}
        onHide={handleCloseVolunteerDetailModal}
        volunteerData={selectedVolunteer}
      />
    </>
  )

}

export default VolunteerDetailsPage;
