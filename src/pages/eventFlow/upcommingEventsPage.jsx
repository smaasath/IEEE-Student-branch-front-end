import React from "react";
import CommonEventCard from "../../components/common/commonEventCard/commonEventCard";
import { uploadImage } from "../../redux/actions/imageUpload";
import { useDispatch } from "react-redux";

const UpcommingEventsPage = () => {

  const distpatch = useDispatch();

  const events = [{
    id: 1,
    eventName: "Hackathon Awareness-1",
    date: "August 01, 2024",
    venue: "UWU Main Hall",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ligula semper, porttitor mauris commodo, auctor massa. Nunc rutrum augue ac arcu pellentesque",
    eventUrl: "",
    projectName: "Shecodress<V6.0>",
  },
  {
    id: 2,
    eventName: "Hackathon First Round",
    date: "August 05, 2024",
    venue: "UWU D1 Lab",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ligula semper, porttitor mauris commodo, auctor massa. Nunc rutrum augue ac arcu pellentesque",
    eventUrl: "",
    projectName: "UvaXtreme<V1.1>",
  },
  {
    id: 2,
    eventName: "Hackathon Second Round",
    date: "August 05, 2024",
    venue: "UWU D1 Lab",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ligula semper, porttitor mauris commodo, auctor massa. Nunc rutrum augue ac arcu pellentesque",
    eventUrl: "",
    projectName: "Shecodress<V6.0>",
  },
  {
    id: 2,
    eventName: "Hackathon Awareness-2",
    date: "August 15, 2024",
    venue: "UWU D1 Lab",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ligula semper, porttitor mauris commodo, auctor massa. Nunc rutrum augue ac arcu pellentesque",
    eventUrl: "",
    projectName: "Shecodress<V6.0>",
  },
  {
    id: 2,
    eventName: "Hackathon Awareness-3 ",
    date: "September 05, 2024",
    venue: "UWU D1 Lab",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ligula semper, porttitor mauris commodo, auctor massa. Nunc rutrum augue ac arcu pellentesque",
    eventUrl: "",
    projectName: "Shecodress<V6.0>",
  }

  ];


  const handleFileChange = (event) => {
    const selectedFile = event?.target?.files[0];
    if (selectedFile) {
      handleProfileUpload(selectedFile);
    }
  };

  const handleProfileUpload = async (selectedFile) => {
    if (!selectedFile) return;
    const uploadedImageUrl = await distpatch(uploadImage(selectedFile));
    console.warn(uploadedImageUrl)
  };

  return (
    <>

      <input
        type="file"

        onChange={handleFileChange}
      />
      {/* <div className="container">
        <div className="text-cl-primary">Upcomming Events</div>

        <div className="row mt-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="col-10 col-sm-6 col-md-5 col-lg-3 me-0 mb-4"
            >
              <CommonEventCard eventDetails={event} editable={false} />
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default UpcommingEventsPage;
