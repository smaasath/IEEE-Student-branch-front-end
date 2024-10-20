import React, { useEffect, useState } from 'react'
import CommonEventCard from "../../../components/common/commonEventCard/commonEventCard";
import CommonButton from '../../../components/common/commonButton/commonButton';
import AddEventModel from '../../../components/models/addEventModel/addEventModel';
import { PolicyValidate } from '../../../utils/valitations/Valitation';
import { getProjectById } from '../../../redux/actions/project';
import { projectPolicy } from '../../../redux/reducers/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import CommonLoader from '../../../components/common/commonLoader/commonLoader';
import { getEventsByProject } from '../../../redux/actions/event';


const ProjectEventPage = () => {
  const [addEventModelShow, setAddEventModelShow] = useState(false);
  const [disable, setDisable] = useState(false);
  const [editable, setEditable] = useState(false);
  const { id: eventId } = useParams();
  const userData = useSelector((state) => state.user.userData);
  const projectPolicyData = useSelector((state) => state.user.projectPolicy);
  const [pageLoading, setPageLoading] = useState(true);
  const distpatch = useDispatch();
  const [projectData, setProjectData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setPageLoading(true);
    if (userData) {
      if (projectPolicyData) {
        const isEventPolicyAvailable = PolicyValidate(projectPolicyData?.my_user_role_details, "PROJECT_EVENT");
        const isAllPolicyAvailable = PolicyValidate(userData, "PROJECT");
        if (!(isEventPolicyAvailable || isAllPolicyAvailable)) {
          navigate(-1);
        }
        setPageLoading(false);
      } else {
        getProjectById(eventId, (res) => {
          if (res?.status == 200) {
            setProjectData(res?.data?.data);
            const isEventPolicyAvailable = PolicyValidate(res?.data?.data?.my_user_role_details, "PROJECT_EVENT");
            const isAllPolicyAvailable = PolicyValidate(userData, "PROJECT");
            if (!(isEventPolicyAvailable || isAllPolicyAvailable)) {
              navigate(-1);
            }
            distpatch(projectPolicy(res?.data?.data));
            setPageLoading(false);
          } else {
            setPageLoading(false);
            navigate(-1);
          }
        })
      }
    }
  }, [userData, projectPolicyData, eventId])

  const [events, setEvents] = useState([]);

  useEffect(() => {
    // setouloader(true);
    getEventsByProject(eventId, (res) => {
      console.log("res in event", res?.data?.data?.content);
      if (res.status == 200) {
        let data = res?.data?.data?.content?.map(
          ({ eventID, eventName, eventLink,image, date, venue, description, project }) => ({
            id: eventID,
            eventName: eventName,
            eventLink:eventLink,
            image: image,
            date: date,
            venue: venue,
            description: description,
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
  }, [eventId]);

  const handleCloseAddEventModel = () => {
    setAddEventModelShow(false);
    setDisable(false)
    setEditable(false)
    // setId(null)
  }

  const handleShowAddEventModel = () => { setAddEventModelShow(true); }

  return (

    pageLoading ? (<CommonLoader />) : (
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
          id={eventId}
        />
      </>
    )
  );
};

export default ProjectEventPage;
