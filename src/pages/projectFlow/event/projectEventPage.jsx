import React from "react";
import CommonEventCard from "../../../components/common/commonEventCard/commonEventCard";

const ProjectEventPage = () => {
  return (
    <>
      <div className="container">
        <div className="text-cl-primary">Events</div>
        
        <div className="row mt-3">
          {[
            { id: 0, name: "SB", type: "Student Branch" },
            { id: 1, name: "WIE", type: "Affinity Group"},
            { id: 2, name: "RAS", type: "Technical Chapter"},
            { id: 3, name: "IAS", type: "Technical Chapter"},
            { id: 4, name: "CS", type: "Technical Chapter"},
          ].map((ou) => (
            <div
              key={ou.id}
              className="col-10 col-sm-6 col-md-5 col-lg-3 me-0 mb-4"
            >
             <CommonEventCard /> 
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectEventPage;
