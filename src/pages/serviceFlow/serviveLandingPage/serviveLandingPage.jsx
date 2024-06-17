import React from "react";
import service from "../../../assets/images/serviceback.png";
import CommonButton from "../../../components/common/commonButton/commonButton";

const serviveLandingPage = () => {
  return (
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
              <CommonButton text={"Submit"} width={150}/>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center align-items-center">
              <img src={service} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default serviveLandingPage;
