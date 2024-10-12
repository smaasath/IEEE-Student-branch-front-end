import React, { useEffect, useState } from 'react'
import CommonEventCard from "../../../components/common/commonEventCard/commonEventCard";
import CommonButton from '../../../components/common/commonButton/commonButton';
import AddEventModel from '../../../components/models/addEventModel/addEventModel';

const ProjectEventPage = () => {
  const [addEventModelShow, setAddEventModelShow] = useState(false);
  const [disable, setDisable] = useState(false);
    const [editable, setEditable] = useState(false);
    const [id, setId] = useState(null);

  const events = [{
    id: 1,
    eventName: "Hackathon Awareness",
    date: "August 10, 2024",
    venue: "UWU Main Hall",
    description:
      "The Shecorder is a revolutionary audio recording device designed with the unique needs and perspectives of women in mind.",
    eventUrl: "",
    projectName: "Shecodress<V6.0>",
  },
  {
    id: 2,
    eventName: "Hackathon First Round",
    date: "August 20, 2024",
    venue: "UWU D1 Lab",
    description:
      "Welcome to the UvaXtreme Hackathon—a dynamic, high-energy event where creativity, technology, and problem-solving converge! ",
    eventUrl: "",
    projectName: "UvaXtreme<V1.1>",
  },

];

const handleCloseAddEventModel = () => {
  setAddEventModelShow(false);
  setDisable(false)
  setEditable(false)
  setId(null)
}

const handleShowAddEventModel = () => { setAddEventModelShow(true); }

  return (
    <>
      <div className="container">
      <div className='d-flex justify-content-between align-items-center gap-3'>
        <div className="text-cl-primary">Events</div>
        <div className='d-flex gap-3 flex-row'>
                            
        <div>
         <CommonButton onClick={handleShowAddEventModel} text={"Add Event"} />
                            </div>
                        </div>
                        </div>
        
        <div className="row mt-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="col-10 col-sm-6 col-md-5 col-lg-3 me-0 mb-4"
            >
             <CommonEventCard eventDetails={event} editable={true} /> 
            </div>
          ))}
        </div>
      </div>
      <AddEventModel
        show={addEventModelShow}
        onHide={handleCloseAddEventModel} 
        disabled={disable}
        editable={editable}
        id={id}
      />
    </>
  );
};

export default ProjectEventPage;
