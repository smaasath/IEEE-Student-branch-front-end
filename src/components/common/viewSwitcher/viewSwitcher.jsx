import React from "react";
import "gantt-task-react/dist/index.css";
import { ViewMode } from "gantt-task-react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ViewSwitcher = ({ onViewModeChange, onViewListChange, isChecked }) => {
  return (
    <div className="d-flex flex-column align-items-start p-2">
      <div className="btn-group mb-2" role="group">
        <button
          className="btn btn-primary"
          onClick={() => onViewModeChange(ViewMode.Hour)}
        >
          Hour
        </button>
        <button
          className="btn btn-primary"
          onClick={() => onViewModeChange(ViewMode.QuarterDay)}
        >
          Quarter of Day
        </button>
        <button
          className="btn btn-primary"
          onClick={() => onViewModeChange(ViewMode.HalfDay)}
        >
          Half of Day
        </button>
        <button
          className="btn btn-primary"
          onClick={() => onViewModeChange(ViewMode.Day)}
        >
          Day
        </button>
        <button
          className="btn btn-primary"
          onClick={() => onViewModeChange(ViewMode.Week)}
        >
          Week
        </button>
        <button
          className="btn btn-primary"
          onClick={() => onViewModeChange(ViewMode.Month)}
        >
          Month
        </button>
        <button
          className="btn btn-primary"
          onClick={() => onViewModeChange(ViewMode.Year)}
        >
          Year
        </button>
      </div>
    </div>
  );
};

export default ViewSwitcher;
