import React from "react";
import CommonEventCard from "../../../components/common/commonEventCard/commonEventCard";

const ProjectEventPage = () => {

  const events = [{
    id:1,
    eventName: "Hackathon Awareness-1",
    date: "August 01, 2024",
    venue: "UWU Main Hall",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ligula semper, porttitor mauris commodo, auctor massa. Nunc rutrum augue ac arcu pellentesque",
    eventUrl: "",
    projectName: "Shecodress<V6.0>",
  },
  {
    id:2,
    eventName: "Hackathon First Round",
    date: "August 05, 2024",
    venue: "UWU D1 Lab",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ligula semper, porttitor mauris commodo, auctor massa. Nunc rutrum augue ac arcu pellentesque",
    eventUrl: "",
    projectName: "Shecodress<V6.0>",
  },
  {
    id:2,
    eventName: "Hackathon Second Round",
    date: "August 05, 2024",
    venue: "UWU D1 Lab",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ligula semper, porttitor mauris commodo, auctor massa. Nunc rutrum augue ac arcu pellentesque",
    eventUrl: "",
    projectName: "Shecodress<V6.0>",
  },
  {
    id:2,
    eventName: "Hackathon Awareness-2",
    date: "August 15, 2024",
    venue: "UWU D1 Lab",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ligula semper, porttitor mauris commodo, auctor massa. Nunc rutrum augue ac arcu pellentesque",
    eventUrl: "",
    projectName: "Shecodress<V6.0>",
  },
  {
    id:2,
    eventName: "Hackathon Awareness-3 ",
    date: "September 05, 2024",
    venue: "UWU D1 Lab",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ligula semper, porttitor mauris commodo, auctor massa. Nunc rutrum augue ac arcu pellentesque",
    eventUrl: "",
    projectName: "Shecodress<V6.0>",
  }

];

  return (
    <>
      <div className="container">
        <div className="text-cl-primary">Events</div>
        
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
    </>
  );
};

export default ProjectEventPage;
