import React from "react";
import EditIcon from "../../../assets/icons/editPrimary.png";
import ViewIcon from "../../../assets/icons/viewPrimary.png";
import CopyToClipboardIcon from "../../../assets/icons/copyToClipboardWhite.png";
import OpenNewTabIcon from "../../../assets/icons/externalLinkWhite.png";
import BgImage from "../../../assets/images/event_default_bg.png";

const handleShowEditEventModel = () => {};
const handleShowViewEventModel = () => {};

const data = {
  event_name: "Hackathon Awareness",
  date: "August 01, 2024",
  vanue: "UWU Main Hall",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ligula semper, porttitor mauris commodo, auctor massa. Nunc rutrum augue ac arcu pellentesque",
  event_url: "",
  project_name: "Shecodress<V6.0>",
};

const CommonEventCard = () => {
  return (
    <div
      className="card m-0 p-0 shadow-sm"
      //   style={{ width: "100%", height: "180px", cursor: "pointer" }}
    >
      <div className="card-header fw-bold text-light bg-dark">
        {data.event_name}
      </div>
      <div className="card-body text-light d-flex flex-column position-relative bg-dark p-0">
        <img
          src={BgImage}
          className="m-0 w-100"
          style={{height: "220px", objectFit: "cover" }}
          alt="Event Background"
        />
        <div className="position-absolute top-0 start-0 m-0 text-light px-2 py-1" style={{ background: 'rgba(0, 0, 0, 0.5)', height: "220px" }}>
          <div className="fw-bold text-center mt-1" style={{fontSize:"1.0rem"}}>{data.date}</div>
          <div className="mt-1 fw-bold" style={{fontSize:"0.8rem"}}>Venue</div>
          <div style={{fontSize:"0.7rem"}}> {data.vanue}</div>
          <div className="mt-1 fw-bold" style={{fontSize:"0.8rem"}}>Description</div>
          <div style={{fontSize:"0.7rem"}}>{data.description}</div>
          <div className="mt-1 fw-bold" style={{fontSize:"0.8rem"}}>Event Link</div>
          <div className="d-flex py-0 mt-0">
            <button
            className="bg-transparent border-0 d-flex"
            onClick={handleShowViewEventModel}
          >
            <img src={CopyToClipboardIcon} width={20} />
          </button>
          <button
            className="bg-transparent border-0 ms-0 d-flex"
            onClick={handleShowEditEventModel}
          >
            <img src={OpenNewTabIcon} width={20} />
          </button></div>
        </div>
      </div>
      <div className="card-footer d-flex">
        <div className="fw-bold">{data.project_name}</div>
        <div className="ms-auto me-1">
          <button
            className="bg-transparent border-0"
            onClick={handleShowViewEventModel}
          >
            <img src={ViewIcon} width={25} />
          </button>
          <button
            className="bg-transparent border-0"
            onClick={handleShowEditEventModel}
          >
            <img src={EditIcon} width={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommonEventCard;
