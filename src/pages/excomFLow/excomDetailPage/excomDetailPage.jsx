import React, { useEffect, useState } from "react";
import CommonButton from "../../../components/common/commonButton/commonButton";
import EditExcomModal from "../../../components/models/editExcomModel/editExcomModel";
import Envelope from "../../../assets/icons/Circled Envelope.png";
import WhatsApp from "../../../assets/icons/WhatsApp.png";
import Facebook from "../../../assets/icons/Facebook.png";
import Linkedin from "../../../assets/icons/LinkedIn Circled.png";
import profile from "../../../assets/images/profile.png";
import Info from "../../../assets/images/Info.png";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CommonLoader from "../../../components/common/commonLoader/commonLoader";
import { getAllExcomMember, getOUById } from "../../../redux/actions/ou";
import { getAllTermYear } from '../../../redux/actions/termYear';
import { PolicyValidate } from "../../../utils/valitations/Valitation";

const CommitteeMemberCard = ({
  photo,
  name,
  phone,
  email,
  academicYear,
  fbURL,
  linkedInURL,
  loading,
}) => {
  const [editExcomModelShow, setEditExcomModelShow] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const handleCloseEditExcomModel = () => setEditExcomModelShow(false);


  const handleShowEditExcomModel = (member) => {
    setSelectedMember(member);
    setEditExcomModelShow(true);
  };

  return (
    <>
      {loading ? (
        <div
          className="card"
          style={{
            borderRadius: "10px",
            padding: "10px",
            position: "relative",
            width: "308px",
            height: "auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="card-body d-flex">
            <div
              className="placeholder-glow me-3 rounded-circle"
              style={{ width: "70px", height: "70px" }}
            >
              <span
                className="placeholder col-12"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  display: "block",
                  backgroundColor: "#e0e0e0",
                }}
              ></span>
            </div>
            <div style={{ flex: 1 }}>
              <h5 className="card-title">
                <span
                  className="placeholder col-6"
                  style={{
                    display: "block",
                    height: "1.5rem",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "0.25rem",
                  }}
                ></span>
              </h5>
              <p className="card-text">
                <span
                  className="placeholder col-8"
                  style={{
                    display: "block",
                    height: "1rem",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "0.25rem",
                  }}
                ></span>
              </p>
              <p className="card-text">
                <span
                  className="placeholder col-6"
                  style={{
                    display: "block",
                    height: "1rem",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "0.25rem",
                  }}
                ></span>
              </p>
              <p className="card-text">
                <span
                  className="placeholder col-4"
                  style={{
                    display: "block",
                    height: "1rem",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "0.25rem",
                  }}
                ></span>
              </p>
              <div className="d-flex gap-2">
                <span
                  className="placeholder"
                  style={{
                    width: "25px",
                    height: "25px",
                    display: "block",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "50%",
                  }}
                ></span>
                <span
                  className="placeholder"
                  style={{
                    width: "25px",
                    height: "25px",
                    display: "block",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "50%",
                  }}
                ></span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="card"
          style={{
            borderRadius: "10px",
            padding: "10px",
            position: "relative",
            width: "308px",
            height: "auto",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="card-body d-flex">
            <img
              src={photo || profile}
              alt="Profile"
              className="img-thumbnail me-3 rounded-circle"
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
                borderRadius: "50%",
                border: "2px solid #ccc",
              }}
            />
            <div style={{ flex: 1 }}>
              <h5
                className="card-title"
                style={{
                  marginBottom: "8px",
                  fontWeight: "bold",
                  fontSize: "16px",
                }}
              >
                {name}
              </h5>
              <p
                className="card-text"
                style={{ marginBottom: "4px", fontSize: "12px", color: "#555" }}
              >
                {email}
              </p>
              <p
                className="card-text"
                style={{ marginBottom: "4px", fontSize: "12px", color: "#555" }}
              >
                {phone}
              </p>
              <p
                className="card-text"
                style={{ marginBottom: "8px", fontSize: "12px", color: "#555" }}
              >
                {academicYear}
              </p>
              <div className="d-flex gap-2">
                {fbURL && (
                  <a href={fbURL}>
                    <img
                      src={Facebook}
                      alt="Facebook"
                      style={{ width: "25px", height: "25px" }}
                    />
                  </a>
                )}
                {linkedInURL && (
                  <a href={linkedInURL}>
                    <img
                      src={Linkedin}
                      alt="LinkedIn"
                      style={{ width: "25px", height: "25px" }}
                    />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const ExcomDetailPage = () => {
  const [editExcomModelShow, setEditExcomModelShow] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const currentYear = new Date().getFullYear();
  const [termFilter, setTermFilter] = useState('');
  const [availableTermYears, setAvailableTermYears] = useState([]);
  const navigate = useNavigate();
  const [assignPolicy, setAssignPolicy] = useState(false);
  const userData = useSelector((state) => state.user.userData);
  const [pageLoading, setPageLoading] = useState(true);
  const [refreshExcomData, setRefreshExcomData] = useState(0);
  const [excomCardLoader, setExcomCardLoader] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const { id: ouId } = useParams();
  const [excomData, SetExcomData] = useState(null);
  const [totalPage, setTotalPage] = useState(1);

  useEffect(() => {
    setPageLoading(true);
    if (userData) {
      const isExcomAvailable = PolicyValidate(userData, "EXCOM");

      const isExcomAssignAvailable = PolicyValidate(userData, "EXCOM_ASSIGN");

      getOUById(ouId, (res) => {
        if (res.status == 200) {
          if (!isExcomAvailable) {
            navigate("/dashboard");
          } else {
            setAssignPolicy(isExcomAssignAvailable);
            setPageLoading(false);
          }
        }
        else {
          navigate("/dashboard/not-found");
        }
      });

    }
  }, [userData, ouId]);
  const handleShowEditExcomModel = (member) => {
    setSelectedMember(member);
    setEditExcomModelShow(true);
  };

  useEffect(() => {
    setExcomCardLoader(true);
    getAllExcomMember(currentPage - 1, "", ouId, termFilter, (res) => {
      if (res.status == 200) {
        let data = res?.data?.data?.content?.map((user) => ({
          id: user?.userRoleDetailsId,
          fname: user?.user?.firstName,
          lname: user?.user?.lastName,
          email: user?.user?.email,
          photo: user?.user?.profilePic,
          phone: user?.user?.contactNo,
          entity: user?.ou?.ou_short_name,
          position: user?.role?.userRole,
          priority: user?.role?.priorityMain,
          academicYear: user?.user?.academicYear?.academicYear || "N/A",
          termYear: "",
        }));
        console.warn(data);
        SetExcomData(data);
        setTotalPage(res?.data?.data?.totalPages);
        setExcomCardLoader(false);
      } else {
        setExcomCardLoader(false);
      }
    });
  }, [refreshExcomData, termFilter, ouId]);

  const handleTermChange = (e) => setTermFilter(e.target.value);

  useEffect(() => {
    getAllTermYear((res) => {
      if (res.status == 200) {
        let termYears = res?.data?.data;
        console.log(termYears, "termyear");
        setAvailableTermYears(termYears);
      }
    });
  }, []);


  return (
    <>
      {pageLoading ? (
        <CommonLoader />
      ) : (
        <div className="container" style={{ padding: "20px" }}>
          {assignPolicy ? (
            <div className="d-flex justify-content-end gap-4 align-items-center flex-wrap">
              <div>
                <CommonButton
                  onClick={() => setEditExcomModelShow(true)}
                  text={"Edit Excom"}
                />
              </div>
              <div>
                {/* <select
                  className="form-select w-100"
                  aria-label="Term Year Select"
                >
                  <option selected>Term Year</option>
                  <option value="2024">2024 Term</option>
                  <option value="2023">2023 Term</option>
                  <option value="2022">2022 Term</option>
                </select> */}

                <select
                  className="form-select ms-2 me-1"
                  value={termFilter}
                  onChange={handleTermChange}
                >
                  <option value={''}>Select Term</option>
                  {availableTermYears.map((year) => (
                    <option key={year.termyearId} value={year.termyearId}>
                      {year.termyear}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ) : null}

          <div className="text-cl-primary mt-4">Committee Members details</div>
          {[...Array(7).keys()].map((raw) => (
            <div className="row mt-4" key={raw + 1}>
              {excomCardLoader
                ? [0, 0, 0].map((_, index) => (
                  <div
                    key={index}
                    className="col-12 col-sm-12 col-lg-4 col-md-4 mb-4"
                  >
                    <CommitteeMemberCard loading={true} />
                  </div>
                ))
                : excomData &&
                excomData
                  .filter((member) => member.priority === raw + 1)
                  .map((member, index) => (

                    <div
                      className="col-12 col-sm-12 col-lg-4 col-md-4 mb-4"
                      key={index}
                    >
                      <div
                        className="mb-2 fw-bold"
                        style={{ fontSize: "18px", color: "#555" }}
                      >
                        {member.position}
                      </div>
                      <CommitteeMemberCard
                        photo={member.photo}
                        name={`${member.fname} ${member.lname}`}
                        phone={member.phone}
                        email={member.email}
                        academicYear={member.academicYear}
                        fbURL={member.fbURL}
                        linkedInURL={member.linkedInURL}
                      />
                    </div>
                  ))}
            </div>
          ))}

          <EditExcomModal
            show={editExcomModelShow}
            onHide={() => setEditExcomModelShow(false)}
            selectedMember={selectedMember}
            changed={() => {
              setRefreshExcomData(refreshExcomData + 1);
            }}
          />
        </div>
      )}
    </>
  );
};

export default ExcomDetailPage;
