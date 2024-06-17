import React from "react";
import expense from "../../assets/images/expense.png";
import "../../App.css";
import CommonButton from "../common/commonButton/commonButton";
const AddExpense = (props) => {
  return (
    <div
      className="container bg-white rounded-4 common-shadow"
    >
      <h5 className="fw-bold text-cl-primary">Add Expenses</h5>
      <div className="row pt-5">
        <div className="col-lg-6 col-md-6 sol-sm-12 ps-5 pe-5">
          <div className="row pb-3">
            <label htmlFor="input-field" className="Text-input-label pb-2">
              Expense
            </label>
            <div>
              <input className="form-control" type="text" placeholder="name" />
            </div>
          </div>
          <div className="row pb-3">
            <label htmlFor="input-field" className="Text-input-label pb-2">
              Amount
            </label>
            <div>
              <input
                className="form-control"
                type="Number"
                placeholder="name"
              />
            </div>
          </div>
          <div className="row pb-3">
            <label htmlFor="input-field" className="Text-input-label pb-2">
              Type
            </label>
            <div>
              <select className="form-control">
                <option value="">Select Type</option>
                <option value="">type1</option>
                <option value="">type2</option>
              </select>
            </div>
          </div>
          <div className="row pb-3">
            <label htmlFor="input-field" className="Text-input-label pb-2">
              Date
            </label>
            <div>
              <input className="form-control" type="date" />
            </div>
          </div>
          <div className="row pb-3">
            <label htmlFor="input-field" className="Text-input-label pb-2">
              Description
            </label>
            <div>
              <textarea className="form-control" placeholder="name" />
            </div>
          </div>
        </div>
        <div
          className="col-lg-6 col-md-6 sol-sm-12"
          // style={{backgroundColor:'red'}}
        >
          <div className="d-flex align-items-center justify-content-center">
            <img src={expense} />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end gap-2 pb-5 pt-3">
        <CommonButton text={"Add Expense"} width={200} />
        <CommonButton
          text={"Close"}
          close
          onClick={props.handleClose}
          width={150}
        />
      </div>
    </div>
  );
};

export default AddExpense;
