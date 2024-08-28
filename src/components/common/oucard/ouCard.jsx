import React from "react";

const OuCard = ({ name, type, logo, onclick, loading, id }) => {
  return (
    <>
      {
        loading ? (
          <>
            <div
              className="card btn m-0 p-0 shadow-sm rounded-5"
              style={{ width: "100%", height: "180px", cursor: "pointer" }}
            >
              <div className="card-img-top body-bag-secondary pt-3 pb-2 px-2 align-middle rounded-top-5">
                <div className="placeholder-glow" style={{ width: '100%', height: '100px' }}>
                  <span className="placeholder col-12" style={{ width: '100%', height: '100px', display: 'block', backgroundColor: '#e0e0e0', borderRadius: '0.25rem' }}></span>
                </div>
              </div>
              <div className="card-body m-0 pt-2">
                <h4 className="card-title text-start text-uppercase mt-0 mb-1 text-wrap text-cl-primary fw-bolder">
                  <span className="placeholder col-6" style={{ display: 'block', backgroundColor: '#e0e0e0', height: '1.5rem', borderRadius: '0.25rem' }}></span>
                </h4>
                <h6 className="card-text text-start text-capitalize text-wrap text-cl-primary">
                  <span className="placeholder col-4" style={{ display: 'block', backgroundColor: '#e0e0e0', height: '1rem', borderRadius: '0.25rem' }}></span>
                </h6>
              </div>
            </div>
          </>
        ) : (
          <>
            <div
              onClick={()=>onclick(id)}
              className="card btn m-0 p-0 shadow-sm rounded-5"
              style={{ width: "100%", height: "180px", cursor: "pointer" }}
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
          </>
        )
      }
    </>


  );
};

export default OuCard;
