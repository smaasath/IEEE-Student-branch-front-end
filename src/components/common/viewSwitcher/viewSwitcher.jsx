import React from "react";
import "gantt-task-react/dist/index.css";
import { ViewMode } from "gantt-task-react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewSwitcher = ({ onViewModeChange, view }) => {
  return (
    <div className="d-flex flex-column align-items-start p-2">
      <div className="btn-group mb-2" role="group">
        <button
           className={`btn ${view == ViewMode.Day ? "bg-third text-white" : "text-dark"}`}
          onClick={() => onViewModeChange(ViewMode.Day)}
        >
          Day
        </button>
        <button
           className={`btn ${view == ViewMode.Month ? "bg-third text-white" : "text-dark"}`}
          onClick={() => onViewModeChange(ViewMode.Month)}
        >
          Month
        </button>
        <button
           className={`btn ${view == ViewMode.Year ? "bg-third text-white" : "text-dark"}`}
          onClick={() => onViewModeChange(ViewMode.Year)}
        >
          Year
        </button>
      </div>
    </div>
  );
};

export default ViewSwitcher;
