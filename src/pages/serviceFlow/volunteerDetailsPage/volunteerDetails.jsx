import React from 'react'
import profile from '../../../assets/images/profile.png';

const BestVolunteerCard = ({ photo, name,completedTask, entrolledProjects }) => {
    return (
        <div className='card bg-body-secondary rounded common-shadow text-center' style={{   width: '220px', height: '240px', position: 'relative' }}>
          <div className='header bg-third text-white py-2 rounded-top'style={{ fontSize: '18px', fontWeight: 'bold' }}>
          {name}
          </div>
          <div className='container' style={{ marginTop:'10px'}}>
            <img src={photo || profile} alt='Profile' className='img-thumbnail me-3 rounded-circle' style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
            </div>

            <div className='info mt-1 ' style={{   margin:'10px'}}>
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
    const bestVolunteer = [
        {
           
          photo: profile,
          name: 'Thilini Priyangika',
          completedTask: '9',
          entrolledProjects: '5',
          
        },
        
    ];
    return (
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
      </div>
    )
  }

  export default VolunteerDetailsPage