import React from "react";
import CommonSearch from "../../../components/common/commonSearch/commonSearch";
import add from "../../../assets/icons/Add.png";
import CommonTable from "../../../components/common/commonTable/commonTable";
const ProjectPrPlan = () => {
  const tableHeading = [
    {
        lable:"No",
        value:"pr_no"
    },
    {
        lable:"Date",
        value:"publish_date"
    },
    {
        lable:"Time",
        value:"publish_time"
    },
    {
        lable:"Status",
        value:"status"
    },
    {
        lable:"",
        value:"ACTION",
        type:["MORE"]
    }
  ];

  const tableData = [
    {
        id:"100",
        publish_date:"2024/06/23",
        publish_time:"8.00 PM",
        status:"TODO"
    },
    {
        id:"101",
        publish_date:"2024/06/25",
        publish_time:"8.00 PM",
        status:"TODO"
    },
  ]

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
                <button className="bg-transparent border-0">
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
              moreAction={(id)=>{}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPrPlan;
