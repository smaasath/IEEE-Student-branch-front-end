import React from "react";
import EditIcon from "../../../assets/icons/editPrimary.png";
import ViewIcon from "../../../assets/icons/viewPrimary.png";
import CopyToClipboardIcon from "../../../assets/icons/copyToClipboardWhite.png";
import OpenNewTabIcon from "../../../assets/icons/externalLinkWhite.png";
import BgImage from "../../../assets/images/event_default_bg.png";

// const handleShowEditEventModel = () => {};
// const handleShowViewEventModel = () => {};

const truncateText = (text, maxWords) => {
  const words = text.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  return text;
};

const CommonEventCard = ({
  eventDetails,
  editable,
  editAction,
  viewAction,
}) => {
  const truncatedDescription = truncateText(eventDetails.description, 20);
  return (
    <div
      className="card m-0 p-0 shadow-sm"
      //   style={{ width: "100%", height: "180px", cursor: "pointer" }}
    >
      <div className="card-header fw-bold text-light bg-dark">
        {eventDetails.eventName}
      </div>
      <div className="card-body text-light d-flex flex-column position-relative bg-dark p-0">
        <img
          src={BgImage}
          className="m-0 w-100"
          style={{ height: "220px", objectFit: "cover" }}
          alt="Event Background"
        />
        <div
          className="position-absolute top-0 start-0 m-0 text-light px-2 py-1"
          style={{ background: "rgba(0, 0, 0, 0.5)", height: "220px" }}
        >
          <div
            className="fw-bold text-center mt-1"
            style={{ fontSize: "1.0rem" }}
          >
            {eventDetails.date}
          </div>
          <div className="mt-1 fw-bold" style={{ fontSize: "0.8rem" }}>
            Venue
          </div>
          <div style={{ fontSize: "0.7rem" }}> {eventDetails.venue}</div>
          <div className="mt-1 fw-bold" style={{ fontSize: "0.8rem" }}>
            Description
          </div>
          <div style={{ fontSize: "0.7rem" }}>{truncatedDescription}</div>
          <div className="mt-1 fw-bold" style={{ fontSize: "0.8rem" }}>
            Event Link
          </div>
          <div className="d-flex py-0 mt-0">
            <button className="bg-transparent border-0 d-flex" onClick={""}>
              <img src={CopyToClipboardIcon} width={20} />
            </button>
            <button
              className="bg-transparent border-0 ms-0 d-flex"
              onClick={""}
            >
              <img src={OpenNewTabIcon} width={20} />
            </button>
          </div>
        </div>
      </div>
      <div className="card-footer d-flex">
        <div className="fw-bold">{eventDetails.projectName}</div>
        <div className="ms-auto me-1">
          <button className="bg-transparent border-0" onClick={viewAction}>
            <img src={ViewIcon} width={25} />
          </button>

        {editable && (<button className="bg-transparent border-0" onClick={editAction}>
            <img src={EditIcon} width={25} />
          </button>)}
        </div>
      </div>
    </div>
  );
};

export default CommonEventCard;
