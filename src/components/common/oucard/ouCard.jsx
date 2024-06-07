import React from "react";

const OuCard = ({ name, type, logo, onclick }) => {
  return (
    <div
      className="card btn m-0 p-0 shadow-sm rounded-5"
      style={{ width: "100%", height: "180px" }}
    >
      <img
        src={logo}
        className="card-img-top body-bag-secondary pt-3 pb-2 px-2 align-middle rounded-top-5"
        alt=""
        style={{ width: '100%', height: '100px', objectFit: 'contain' }}
      />
      <div className="card-body m-0 pt-2">
        <h4 className="card-title text-start text-uppercase mt-0 mb-1 text-wrap text-cl-primary fw-bolder">
          IEEE UWU {name}
        </h4>
        <h6 className="card-text text-start text-capitalize text-wrap text-cl-primary">
          {type}
        </h6>
      </div>
    </div>
  );
};

export default OuCard;
