import React, { useEffect, useState } from "react";

const CommonStatusContainer = ({ status }) => {
  function getData(status) {
    switch (status) {
      case "TODO":
        return { bgcolor: "#E9ECEF", color: "#5F6A6A", text: "To Do" };
      case "RECIEVED":
        return { bgcolor: "#D1EB32", color: "#667085", text: "Recieved" };
      case "REVIEWED":
        return { bgcolor: "#D1EB32", color: "#667085", text: "Reviewed" };
      case "COMPLETE":
        return { bgcolor: "#A7DAA2", color: "#18713D", text: "Complete" };
      case "ONGOING":
        return { bgcolor: "#00B8D9", color: "#00629B ", text: "Ongoing" };
      case "ACTIVE":
        return { bgcolor: "rgb(0, 0, 255,0.1)", color: "rgb(0, 0, 255) ", text: "Active" };
      case "DEACTIVE":
        return { bgcolor: "rgb(128, 128, 128,0.1)", color: "rgb(128, 128, 128) ", text: "Deactive" };
      case "NOTASSIGNED":
        return { bgcolor: "#00B8D9", color: "#00629B ", text: "Not-Assigned" };
      case "READY":
        return { bgcolor: "#00B8D9", color: "#00629B ", text: "Ready" };
      case "PUBLISHED":
        return { bgcolor: "#00B8D9", color: "#00629B ", text: "Published" };
      case "INCOMPLETE":
        return { bgcolor: "#00B8D9", color: "#00629B ", text: "Incomplete" };

      default:
        return { bgcolor: "#FFFFFF", color: "#000000", text: "Unknown" };
    }
  }

  const [data, setData] = useState({ bgcolor: "", color: "", text: "" });

  useEffect(() => {
    setData(getData(status));
  }, [status]);

  return (
    <div
      className="rounded-4 p-1 text-center ps-2 pe-2 fw-bold"
      style={{ color: data.color, backgroundColor: data.bgcolor, fontSize: 14, maxWidth:150 }}
    >
      {data.text}
    </div>
  );
};

export default CommonStatusContainer;
