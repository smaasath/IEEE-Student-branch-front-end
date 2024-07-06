import React from "react";
import Modal from "react-bootstrap/Modal";
import CommonButton from '../../common/commonButton/commonButton';
import Profile from '../../../assets/images/profile.png';
import CommonStatusCountCard from '../../../components/common/commonStatusCountCard/commonStatusCountCard'
import CommonTable from '../../../components/common/commonTable/commonTable'

const ProgressVolunteerCard = ({ photo, name, academicYear, degree, email, contactNumber }) => {
  return (
    <div className='d-flex justify-content-center card bg-body-secondary mt-0 align-items-center' style={{height:"180px" }} >
      <div className="card-body d-flex justify-content-center align-items-center ">
          <img src={photo || Profile}
            alt="Profile" className="mt-3" style={{ width: "100px", marginRight: "20px", height:"130px", marginBottom:"30px" }} />
            
            <div className="text-right" style={{ lineHeight: "0.8" }}>
            <div className='d-flex'>
            <p className='card-text'style={{fontWeight: "bold"}}>Name:</p><p className='card-text ms-2'>{name}</p>
          </div>

          <div className='d-flex'>
            <p className='card-text'style={{fontWeight: "bold"}}>Year:</p><p className='card-text ms-2'>{academicYear}</p>
          </div>

          <div className='d-flex'>
            <p className='card-text'style={{fontWeight: "bold"}}>Degree:</p><p className='card-text ms-2'>{degree}</p>
          </div>

          <div className='d-flex'>
            <p className='card-text'style={{fontWeight: "bold"}}>Email:</p><p className='card-text ms-2'>{email}</p>
          </div>
          <div className='d-flex'>
            <p className='card-text'style={{fontWeight: "bold"}}>Tel:</p><p className='card-text ms-2'>{contactNumber}</p>
          </div>

            </div>       
            </div>
    </div>

  )
}

const VolunteerViewModel = ({show, onHide, volunteerData}) => {
  if (!volunteerData) return null;

  const tableHeadingExcom = [
    {
        label: "Position",
        value: "position"
    },
    {
        label: "Time Period",
        value: "time_period"
    },
    
];

const tableDataExcom = [
  {
      position: "Secretory",
      time_period : "2022",
  },
  {
    position: "Chair",
    time_period : "2022(Current)",
  },
  
];

const tableHeading = [
  {
      label: "Project Name",
      value: "project_name"
  },
  {
      label: "Team",
      value: "team"
  },
  {
      label: "Role",
      value: "role"
  },
  {
      label: "Task",
      value: "task"
  },
  {
      label: "Status",
      value: "status"
  },
];

const tableData = [
  {
      project_name: "IEEE OpenDay 2024",
      team: "Special",
      role: "Chair",
      task: "01",
      status: "COMPLETE",
  },
  {
    project_name: "IEEE Jambory",
    team: "Program",
    role: "Lead",
    task: "03",
    status: "ONGOING",
  },
  {
    project_name: "Shecodress",
    team: "Design",
    role: "Member",
    task: "05",
    status: "TODO",
  },
];

const progressVolunteer = [
  {
     
    photo: Profile,
    name: 'Lavindra Weerasinghe',
    academicYear: '3rd Year',
    degree: 'CST',
    email: 'wdk@gmail.com',
    contactNumber: '0778963541',
    
  },
  
];


    return(
        
        <Modal
        show={show}
        onHide={onHide}
        animation={true}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter "
        centered
        >
        <Modal.Header closeButton>
        <Modal.Title
        className="text-cl-primary" id="contained-modal-title-vcenter"
        >
           Progress

        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="d-flex flex-column ">
        <div className='row mt-4 d-flex justify-content-center'>
          {progressVolunteer.map((volunteer, index) => (
            <div className='col-12 col-md-6 mb-4' key={index}>
              
              <ProgressVolunteerCard
                photo={volunteer.photo}
                name={volunteer.name}
                academicYear={volunteer.academicYear}
                degree={volunteer.degree}
                email={volunteer.email}
                contactNumber={volunteer.contactNumber}
                
              />
            </div>
          ))}
        </div>
<>
        <div className='text-cl-primary'>Project</div>
                <div className='mt-2 d-flex justify-content-between align-items-center gap-4 flex-wrap'>
                    <div className='d-flex justify-content-between gap-4 rounded-4 bg-body-secondary p-4 flex-wrap flex-grow-1'>
                        <CommonStatusCountCard type={"TODO"} count={"05"} />
                        <CommonStatusCountCard type={"ONGOING"} count={"05"} />
                        <CommonStatusCountCard type={"COMPLETE"} count={"05"} />
                    </div>
                </div>

                <div className='text-cl-primary mt-4 ' style={{marginLeft:"190px"}}>Excom</div>
                

                    <div className='align-items-center mt-2 mx-auto' style={{width:"450px", }} >  
                        <CommonTable tableHeading={tableHeadingExcom} primary={true} tableData={tableDataExcom} loading={false} />
                    </div>
                    
                    <div className='text-cl-primary mt-4'>Tasks</div>
                <div className='mt-2 d-flex justify-content-between align-items-center gap-4 flex-wrap'>
                    <div className='d-flex justify-content-between gap-4 rounded-4 bg-body-secondary p-4 flex-wrap flex-grow-1'>
                        <CommonStatusCountCard type={"TODO"} count={"05"} />
                        <CommonStatusCountCard type={"ONGOING"} count={"05"} />
                        <CommonStatusCountCard type={"COMPLETE"} count={"05"} />
                    </div>
                </div>
                

                    <div className='text-cl-primary mt-4'>Progress projects</div>
                <div className='mt-2 '>
                        <CommonTable tableHeading={tableHeading} primary={true} tableData={tableData} loading={false} />
                    </div> 
                    
                    </>
                    </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-end mt-3 ">
        <div>
        <CommonButton  onClick={onHide} close={true} text={"No, cancel"} />
        </div>

      </Modal.Footer  >
        </Modal>
       
        
    );
};

export default VolunteerViewModel