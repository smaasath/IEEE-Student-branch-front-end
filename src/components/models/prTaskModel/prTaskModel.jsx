import React from "react";
import { Modal } from "react-bootstrap";
import CommonButton from "../../common/commonButton/commonButton";
import TitleIcon from "../../../assets/icons/title.png";
import DateIcon from "../../../assets/icons/flag.png";
import TimeIcon from "../../../assets/icons/time.png";
import StatusIcon from "../../../assets/icons/status.png";
import PersonIcon from "../../../assets/icons/person.png";
import UrlIcon from "../../../assets/icons/link.png";
import CheckedIcon from "../../../assets/icons/doubleTick.png";
import OpenNewTabIcon from "../../../assets/icons/externalLink.png";
import send from '../../../assets/icons/Sent.png';
import CommonSearch from "../../common/commonSearch/commonSearch";
import CommonNoteContainer from "../../common/commonNoteContainer/commonNoteContainer";

const PrTaskModel = ({ onHide, show, prTaskData }) => {
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        animation={true}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title
            className="text-third"
            id="contained-modal-title-vcenter"
          >
            PR Task Details
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="col-8 d-flex flex-column text-third">
                {/* flyer details */}
                <div className="text-cl-primary mt-0">Flyer Details</div>
                <div className="d-flex">
                  <div className="d-flex flex-column w-100">
                    <div className="mt-3 d-flex align-items-center">
                      <img
                        src={TitleIcon}
                        className="mt-0 mb-auto me-2"
                        alt="Title Icon"
                      />
                      <label
                        for="exampleFormControlInput1"
                        className="form-label   w-100"
                      >
                        Flyer Title
                      </label>
                      <input
                        type="text"
                        value={"Comming Soon"}
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Flyer Title"
                      />
                    </div>
                    <div className="mt-3 d-flex align-items-center">
                      <img
                        src={DateIcon}
                        className="mt-0 mb-auto me-2"
                        alt="Title Icon"
                      />
                      <label
                        for="exampleFormControlInput1"
                        className="form-label   w-100"
                      >
                        Publish Date
                      </label>
                      <input
                        type="date"
                        value={"2024-07-23"}
                        className="form-control"
                        id="exampleFormControlInput1"
                      />
                    </div>
                    <div className="mt-3 d-flex align-items-center">
                      <img
                        src={TimeIcon}
                        className="mt-0 mb-auto me-2"
                        alt="Title Icon"
                      />
                      <label
                        for="exampleFormControlInput"
                        className="form-label   w-100"
                      >
                        Publish Time
                      </label>
                      <input
                        type="time"
                        value={"20:00"}
                        className="form-control"
                        id="exampleFormControlInput1"
                      />
                    </div>
                    <div className="mt-3 d-flex align-items-center">
                      <img
                        src={StatusIcon}
                        className="mt-0 mb-auto me-2"
                        alt="Title Icon"
                      />
                      <label
                        for="exampleFormControlInput1"
                        className="form-label   w-100"
                      >
                        Status
                      </label>
                      <select
                        className="form-select"
                        aria-label="exampleFormControlInput1"
                      >
                        <option value="PUBLISHED" selected>Published</option>
                        <option value="PUBLISHED">Ready</option>
                      </select>
                    </div>
                  </div>
                  <div className="d-flex w-75 justify-content-center mt-3">
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">
                        Flyer Details
                      </label>
                      <textarea
                        class="form-control"
                        value={"COMING SOON"}
                        id="exampleFormControlTextarea1"
                        rows="6"
                        placeholder="Description about flyer"
                      ></textarea>
                    </div>
                  </div>
                </div>
                {/* flyer design */}
                <div className="text-cl-primary mt-3">Flyer Design</div>
                <div className="d-flex">
                  <div className="d-flex flex-column w-100">
                    <div className="mt-3 d-flex align-items-center">
                      <img
                        src={PersonIcon}
                        className="mt-0 mb-auto me-2"
                        alt="Person Icon"
                      />
                      <label
                        for="exampleFormControlInput1"
                        className="form-label   w-100"
                      >
                        Designer
                      </label>
                      <select
                        className="form-select"
                        aria-label="exampleFormControlInput1"
                      >
                        <option >Assign Designer</option>
                        <option value="1" selected>Kavidra Weerasinghe</option>
                        <option value="2">Ishara Suvini</option>
                      </select>
                    </div>
                    <div className="mt-3 d-flex align-items-center">
                      <img
                        src={UrlIcon}
                        className="mt-0 mb-auto me-2"
                        alt="URL Icon"
                      />
                      <label
                        for="exampleFormControlInput1"
                        className="form-label   w-100"
                      >
                        Design URL
                      </label>
                      <input
                        type="text"
                        value={"https://drive.google.com/file/d/1OIGXM3qcCJztjtDO9j67qaCU38nsu_Pc/view?usp=drive_link"}
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter URL"
                      />
                      <button className="bg-transparent border-0" onClick={" "}>
                        <img
                          src={OpenNewTabIcon}
                          className="mt-1 mb-auto ms-1"
                          alt="URL Icon"
                        />
                      </button>
                    </div>

                    <div className="mt-3 d-flex align-items-center">
                      <img
                        src={StatusIcon}
                        className="mt-0 mb-auto me-2"
                        alt="Title Icon"
                      />
                      <label
                        for="exampleFormControlInput1"
                        className="form-label   w-100"
                      >
                        Status
                      </label>
                      <select
                        className="form-select"
                        aria-label="exampleFormControlInput1"
                      >
                        <option value="TODO">Todo</option>
                        <option value="ONGOING">Ongoing</option>
                        <option value="COMPLETE" selected>Complete</option>
                        
                      </select>
                    </div>
                    <div className="mt-3 d-flex align-items-center">
                      <img
                        src={CheckedIcon}
                        className="mt-0 mb-auto me-2"
                        alt="Title Icon"
                      />
                      <label
                        for="flexCheckDefault"
                        className="form-check-label me-4"
                      >
                        Checked
                      </label>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="flexCheckDefault"
                        value={""}
                        checked
                      />
                      <div className="ms-3 fw-bold">
                        By Kavindra Weerasinghe
                      </div>
                    </div>
                  </div>
                  <div className="d-flex w-75 justify-content-center mt-3"></div>
                </div>

                {/* flyer caption */}
                <div className="text-cl-primary mt-3">Flyer Caption</div>
                <div className="d-flex">
                  <div className="d-flex flex-column w-100">
                    <div className="mt-3 d-flex align-items-center">
                      <img
                        src={PersonIcon}
                        className="mt-0 mb-auto me-2"
                        alt="Person Icon"
                      />
                      <label
                        for="exampleFormControlInput1"
                        className="form-label   w-100"
                      >
                        Caption Writer
                      </label>
                      <select
                        className="form-select"
                        aria-label="exampleFormControlInput1"
                      >
                        <option >Assign Writer</option>
                        <option value="1">Kavidra Weerasinghe</option>
                        <option value="2" selected>Ishara Suvini</option>
                      </select>
                    </div>
                    {/* <div className="mt-3 d-flex align-items-center">
                      <img
                        src={UrlIcon}
                        className="mt-0 mb-auto me-2"
                        alt="URL Icon"
                      />
                      <label
                        for="exampleFormControlInput1"
                        className="form-label   w-100"
                      >
                        Design URL
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Enter URL"
                      />
                      <button className="bg-transparent border-0" onClick={" "}>
                        <img
                          src={OpenNewTabIcon}
                          className="mt-1 mb-auto ms-1"
                          alt="URL Icon"
                        />
                      </button>
                    </div> */}

                    <div className="mt-3 d-flex align-items-center">
                      <img
                        src={StatusIcon}
                        className="mt-0 mb-auto me-2"
                        alt="Title Icon"
                      />
                      <label
                        for="exampleFormControlInput1"
                        className="form-label   w-100"
                      >
                        Status
                      </label>
                      <select
                        className="form-select"
                        aria-label="exampleFormControlInput1"
                      >
                        <option value="TODO">Todo</option>
                        <option value="ONGOING">Ongoing</option>
                        <option value="COMPLETE" selected>Complete</option>
                      </select>
                    </div>
                    <div className="mt-3 d-flex align-items-center">
                      <img
                        src={CheckedIcon}
                        className="mt-0 mb-auto me-2"
                        alt="Title Icon"
                      />
                      <label
                        for="flexCheckDefault"
                        className="form-check-label me-4"
                      >
                        Checked
                      </label>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="flexCheckDefault"
                        value={""}
                        checked
                      />
                      <div className="ms-3 fw-bold">
                        By Mohomed Aasath
                      </div>
                    </div>
                  </div>
                  <div className="d-flex w-75 justify-content-center mt-3">
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">Caption</label>
                      <textarea
                        class="form-control"
                        value={"Attention all tech enthusiasts! Get ready to unleash your tech potential and dive into the world of innovation!💡 Join us at IEEE Open Day 2024, hosted by the IEEE Uva Wellassa University Student Branch.Discover the incredible opportunities and pathways provided by the world's largest technical professional organization, committed to advancing technological innovation and excellence for the benefit of humanity. 🌐🙌🏼 COMING SOON 🌟 Stay tuned for more details!"}
                        id="exampleFormControlTextarea1"
                        rows="6"
                        placeholder="Insert Caption Here"
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="d-flex bg-white common-shadow flex-column p-3 rounded-3">
                  <div className="d-flex justify-content-between align-items-center gap-4 flex-wrap">
                    <div>
                      <h6 className="text-third ms-2 fw-bold">Notes</h6>
                    </div>
                  </div>

                  <div className="mt-3 ms-2 d-flex justify-content-start">
                    <div>
                      <CommonSearch primary={false} />
                    </div>
                  </div>

                  <div
                    className="mt-4 d-flex justify-content-between align-items-center gap-4 flex-wrap overflow-scroll overflow-x-hidden custom-scrollbar pb-3 ps-2 pe-2 pt-1"
                    style={{ maxHeight: 500 }}
                  >
                    <CommonNoteContainer />
                  
                  </div>
                  <div className="mt-3">
                    <div className="d-flex justify-content-between align-items-center gap-3">
                      <div class="form-group w-100">
                        <textarea
                          class="form-control"
                          placeholder="Add note here"
                          id="exampleFormControlTextarea1"
                        ></textarea>
                      </div>
                      <button className="bg-transparent border-0">
                        <img src={send} width={30} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-end">
          <div>
            <CommonButton onClick={onHide} close={true} text={"Close"} />
          </div>
          {/* {
            <div>
              <CommonButton onClick={onHide} text="Save" />
            </div>
          } */}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default PrTaskModel;
