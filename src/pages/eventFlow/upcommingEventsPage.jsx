import {React, useEffect, useState} from "react";
import CommonEventCard from "../../components/common/commonEventCard/commonEventCard";
import { uploadImage } from "../../redux/actions/imageUpload";
import { useDispatch } from "react-redux";
import { getAllEvents } from '../../redux/actions/event';

const UpcommingEventsPage = () => {

  const distpatch = useDispatch();

  // const events = [{
  //   id: 1,
  //   eventName: "Hackathon Awareness",
  //   date: "August 10, 2024",
  //   venue: "UWU Main Hall",
  //   description:
  //     "The Shecorder is a revolutionary audio recording device designed with the unique needs and perspectives of women in mind.",
  //   eventUrl: "",
  //   projectName: "Shecodress<V6.0>",
  // },
  // {
  //   id: 2,
  //   eventName: "Hackathon First Round",
  //   date: "August 20, 2024",
  //   venue: "UWU D1 Lab",
  //   description:
  //     "Welcome to the UvaXtreme Hackathon—a dynamic, high-energy event where creativity, technology, and problem-solving converge! ",
  //   eventUrl: "",
  //   projectName: "UvaXtreme<V1.1>",
  // },


  // ];

  const [events, setEvents] = useState([]);

  useEffect(() => {
    // setouloader(true);
    getAllEvents((res) => {
      console.log("res in event", res?.data?.data?.content);
      if (res.status == 201) {
        let data = res?.data?.data?.content?.map(
          ({ eventID, eventName, eventLink,image, date, venue, decsription, project }) => ({
            id: eventID,
            eventName: eventName,
            eventUrl:eventLink,
            image: image,
            date: date,
            venue: venue,
            description: decsription,
            projectName: project?.projectName,
          })
        );
        // console.warn(data);
        setEvents(data);
        // setouloader(false);
      } else {
        setEvents([]);
        // setouloader(false);
      }
    });
  }, []);


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


      <div className="container">
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
      </div>
    </>
  );
};

export default UpcommingEventsPage;
