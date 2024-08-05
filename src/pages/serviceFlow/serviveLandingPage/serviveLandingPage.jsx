import React, { useEffect, useState } from "react";
import service from "../../../assets/images/serviceback.png";
import CommonButton from "../../../components/common/commonButton/commonButton";
import CommonTable from '../../../components/common/commonTable/commonTable';
import CommonSearch from '../../../components/common/commonSearch/commonSearch'
import CommonPagination from '../../../components/common/commonPagination/commonPagination'
import { useNavigate } from 'react-router-dom'
import VolunteerStatusChangeModel from "../../../components/models/volunteerStatusChangeModel/volunteerStatusChangeModel";
import { useSelector } from "react-redux";
import CommonLoader from "../../../components/common/commonLoader/commonLoader";



const serviveLandingPage = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [statusChangeModelShow, setStatusChangeModel] = useState(false);
  const userData = useSelector((state) => state.user.userData);
  const handleCloseStatusChangeModel = () => { setStatusChangeModel(false); }
  const handleShowStatusChangeModel = () => { setStatusChangeModel(true); }
  const [pageLoading, setPageLoading] = useState(true);
  const [service, setService] = useState(false);
  const [serviceVolunteer, setServiceVolunteer] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setPageLoading(true)
    if (userData) {
      const isServiceAvailable = userData?.role?.policies.some(
        policy => policy.policyCode === "SERVICE"
      )

      const isServiceVolunteerAvailable = userData?.role?.policies.some(
        policy => policy.policyCode === "SERVICE_VOLUNTEER"
      )

      if (isServiceAvailable) {
        setService(true);
        setPageLoading(false);
      }

      if (isServiceVolunteerAvailable) {
        setServiceVolunteer(true)
        setPageLoading(false);
      }

      if (!isServiceAvailable || !isServiceVolunteerAvailable) {
        setPageLoading(false)
      }


    }


  }, [userData])


  function navigateToVolunteerDetailsPage() {
    navigate('volunteer')
  }

  const tableHeading = [
    {
      label: "ID",
      value: "id"
    },
    {
      label: "Volunteer Name",
      value: "volunteer_name"
    },
    {
      label: "Academic Year",
      value: "academic_year"
    },
    {
      label: "Contact No",
      value: "contact_no"
    },
    {
      label: "Status",
      value: "status"
    },
    {
      label: "Requested Date",
      value: "requested_date"
    },
    {
      label: "",
      value: "ACTION",
      type: ["VIEW", "EDIT"]
    },
  ];
  const tableData = [
    {
      id: "1234",
      volunteer_name: "Kavindra Weerasinghe",
      academic_year: "3rd",
      contact_no: "0718596324",
      status: "REVIEWED",
      requested_date: "2024/06/08",
    },
    {
      id: "1235",
      volunteer_name: "Thilini Priyangika",
      academic_year: "3rd",
      contact_no: "0708596624",
      status: "REVIEWED",
      requested_date: "2024/06/09",
    },
    {
      id: "1236",
      volunteer_name: "Ishara Herath",
      academic_year: "2nd",
      contact_no: "0708876984",
      status: "REVIEWED",
      requested_date: "2024/06/10",
    },
  ]
  return (
    <>
      <div className="container">
        <div className="conatiner bg-white rounded p-3 common-shadow">
          <h5 className="fw-semibold text-cl-primary">Request Form</h5>
          <div className="row">
            <div className="col-lg-7 col-md-6 col-sm-12">
              <div className="row pb-3">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="row pb-3">
                    <label
                      htmlFor="input-field"
                      className="Text-input-label pb-2"
                    >
                      Due Date
                    </label>
                    <div>
                      <input
                        className="form-control"
                        type="date"
                        placeholder="name"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div className="row pb-3">
                    <label
                      htmlFor="input-field"
                      className="Text-input-label pb-2"
                    >
                      Email
                    </label>
                    <div>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="name"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-around pb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Excom
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Projects
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Others
                  </label>
                </div>
              </div>
              <div className="row pb-3">
                <label htmlFor="input-field" className="Text-input-label pb-2">
                  Description
                </label>
                <div>
                  <textarea
                    className="form-control"
                    placeholder="Autosize height based on content lines"
                    rows={3}
                  />
                </div>
              </div>
              <div className="d-flex justify-content-end pe-2">
                <CommonButton text={"Submit"} width={150} />
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12">
              <div className="d-flex justify-content-center align-items-center">
                <img src={service} />
              </div>
            </div>
          </div>
        </div>

        {
          pageLoading ? (
            <CommonLoader />
          ) : null
        }
        {serviceVolunteer ? (
          <div className='mt-5 d-flex justify-content-between align-items-center gap-4 flex-wrap'>
            <div className='text-cl-primary'>Service letter requests</div>
            <div className='d-flex gap-3 flex-row justify-content-end mt-4 '>
              <div >
                <CommonButton text={"Volunteer"} onClick={() => { navigateToVolunteerDetailsPage() }} />
              </div>
            </div>
          </div>
        ) : null}

        {service ? (
          <div className='mt-4 d-flex flex-column gap-3 justify-content-center bg-white rounded-2 common-shadow p-3'>
            <div className='mt-4 table-container'>
              <div className='mt-2 d-flex flex-wrap justify-content-between align-items-center'>
                <CommonSearch primary={true} />
              </div>
              <div className='mt-4 table-container'>
                <CommonTable tableHeading={tableHeading} primary={true} tableData={tableData} loading={false} editAction={(id) => { handleShowStatusChangeModel() }} />
              </div>
            </div>

            <div className='mt-4 d-flex justify-content-end'>
              <CommonPagination pages={10} currentPage={currentPage} setCurrentPage={setCurrentPage} />
            </div>
          </div>
        ) : null}

      </div>
      <VolunteerStatusChangeModel show={statusChangeModelShow} onHide={handleCloseStatusChangeModel} />
    </>
  )
}

export default serviveLandingPage;
