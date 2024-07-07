import React, { useState } from "react";
import CommonSearch from "../../../components/common/commonSearch/commonSearch";
import add from "../../../assets/icons/Add.png";
import CommonTable from "../../../components/common/commonTable/commonTable";
import PrTaskModel from "../../../components/models/prTaskModel/prTaskModel";
import CommonPagination from "../../../components/common/commonPagination/commonPagination";
import AddPrTaskModel from "../../../components/models/addPrTaskModel/addPrTaskModel";
const ProjectPrPlan = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [prTaskModelShow, setPrTaskModelShow] = useState(false);
  const [addPrTaskModelShow, setAddPrTaskModelShow] = useState(false);
  const [selectPrTask, setSelectPrTask] = useState(null);
  // const [disable, setDisable] = useState(false);
  // const [editable, setEditable] = useState(false);
  // const [id, setId] = useState(null);

  const handleCLosePrTaskDetailModel = () => setPrTaskModelShow(false);
  const handleShowPrTaskDetailModel = (prTask) => {
    setSelectPrTask(prTask);
    setPrTaskModelShow(true);
  };
  const handleCLoseAddPrTaskModel = () => setAddPrTaskModelShow(false);
  const handleShowAddPrTaskModel = () => {
    setAddPrTaskModelShow(true);
  };

  const tableHeading = [
    {
      label: "Publish Date",
      value: "publish_date",
    },
    {
      label: "Publish Time",
      value: "publish_time",
    },
    {
      label: "Title",
      value: "flyer_title",
    },
    {
      label: "Status",
      value: "status",
    },
    {
      label: "",
      value: "ACTION",
      type: ["MORE"],
    },
  ];

  const tableData = [
    {
      id: "100",
      publish_date: "2024 July 23",
      publish_time: "8.00 PM",
      flyer_title:"Comming Soon",
      status: "PUBLISHED",
    },
    {
      id: "101",
      publish_date: "2024 July 25",
      publish_time: "8.00 PM",
      flyer_title:"Event Briefing",
      status: "READY",
    },
    {
      id: "102",
      publish_date: "2024 July 30",
      publish_time: "8.00 PM",
      flyer_title:"Event Briefing",
      status: "INCOMPLETE",
    },
    {
      id: "103",
      publish_date: "2024 August 05",
      publish_time: "8.00 PM",
      flyer_title:"Event Briefing",
      status: "NOTASSIGNED",
    },
  ];

  return (
    <div className="container">
      <div>
        <div className="text-cl-primary mt-4">PR Plan</div>
        <div className="mt-2 d-flex flex-column bg-white rounded-2 common-shadow p-3">
          <div className="mt-2 d-flex flex-wrap justify-content-between align-items-center">
            <CommonSearch primary={false} />
            <div className="d-flex">
              <div>
                <select className="form-select" aria-label="">
                  <option selected>Me</option>
                </select>
              </div>
              <div className="ms-3">
                <select className="form-select" aria-label="">
                  <option selected>Assignees</option>
                </select>
              </div>
              <div className="ms-2">
                <button
                  className="bg-transparent border-0"
                  onClick={handleShowAddPrTaskModel}
                >
                  <img src={add} width={30} />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4 table-container">
            <CommonTable
              tableHeading={tableHeading}
              primary={false}
              tableData={tableData}
              loading={false}
              moreAction={(id) => {
                const prTask = tableData.find((item) => item.id === id);
                handleShowPrTaskDetailModel(prTask);
              }}
            />
            <div className="mt-4 d-flex justify-content-end">
              <CommonPagination
                pages={10}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      </div>
      <AddPrTaskModel
        show={addPrTaskModelShow}
        onHide={handleCLoseAddPrTaskModel}
      />
      <PrTaskModel
        show={prTaskModelShow}
        onHide={handleCLosePrTaskDetailModel}
        memberData={selectPrTask}
      />
    </div>
  );
};

export default ProjectPrPlan;
