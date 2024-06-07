import React from "react";

import viewBtn from "../../../assets/icons/table_view_btn.png";

import "./excomTable.css";

const handleClick = (id) => {
  console.log("Image clicked fo ID : ", id);
};

const ExcomTable = ({ dataList, search, slectedEntity, selectTerm }) => {
  const filterData = dataList.filter((row) => {
    const matchesName =
      row.fname.toLowerCase().includes(search.toLowerCase()) ||
      row.lname.toLowerCase().includes(search.toLowerCase());

    const matchesEntity =
      slectedEntity === "All" || row.entity === slectedEntity;

    const matchesTerm = row.termYear === selectTerm.toString();

    return matchesName && matchesEntity && matchesTerm;
  });

  return (
    <div className="table-responsive table-container">
      <table className="table table-hover align-middle">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">ContactNo</th>
            <th scope="col">Entity</th>
            <th scope="col">Position</th>
            <th scope="col">Year</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {filterData.map((row, index) => (
            <tr key={row.id}>
              <th scope="row">{index + 1}</th>
              <td>
                {row.fname} {row.lname}
              </td>
              <td>{row.email}</td>
              <td>{row.contactNo}</td>
              <td>{row.entity}</td>
              <td>{row.position}</td>
              <td>{row.academicYear}</td>
              <td>
                <button
                  onClick={() => handleClick(row.id)}
                  className="btn btn-link p-0 border-0"
                >
                  <img src={viewBtn} alt="View" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExcomTable;
