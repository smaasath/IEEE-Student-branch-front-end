import React, { useEffect, useState } from "react";
import AuthLayout from "../../../components/layouts/authLayout/authLayout";
import { Link, useNavigate } from "react-router-dom";
import CommonButton from "../../../components/common/commonButton/commonButton";
import { getAllAcademicYear } from "../../../redux/actions/academicYear";
import { EmailValidation } from "../../../utils/valitations/Valitation";
import { userRegistration } from "../../../redux/actions/user";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [academicYears, setAcademicYears] = useState([]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    academicyear: "",
    contactno: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    academicyear: "",
    contactno: "",
    other: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: "" }));
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllAcademicYear(0, "ACTIVE", "", (res) => {
      if (res.status == 200) {
        let data = res?.data?.data?.content?.map(
          ({ acedemicId, academicYear }) => ({
            id: acedemicId,
            year: academicYear,
          })
        );
        console.warn(data);
        setAcademicYears(data);
      }
    });
  }, []);

  function signUP() {
    setError({
      email: "",
      password: "",
      other: "",
    });

    if (!EmailValidation(formData.email)) {
      setError({
        ...error,
        email: "Email is not valid",
      });
      return;
    }

    if (formData.firstname == "") {
      setError({
        ...error,
        password: "First name is required",
      });
      return;
    }

    if (formData.lastname == "") {
      setError({
        ...error,
        password: "Last name is required",
      });
      return;
    }

    if (formData.contactno == "") {
      setError({
        ...error,
        password: "Contact No is required",
      });
      return;
    }

    if (formData.password == "") {
      setError({
        ...error,
        password: "Password is required",
      });
      return;
    }

    setLoading(true);
    dispatch(
      userRegistration(formData, (res) => {
        if (res.status == 200) {
          setLoading(false);
          navigate("/verify-code/signup");
        } else {
          setLoading(false);
          setError({
            ...error,
            other: "Already Registred Account",
          });
        }
      })
    );
  }

  return (
    <AuthLayout type={"SIGNUP"}>
      <div className="d-flex w-100 justify-content-between align-items-start">
        <div className="d-flex flex-column ">
          <div>
            <span className="h6">Welcome to </span>
            <span className="h6 text-cl-primary fw-bold">IEEE</span>
          </div>
          <div className="mt-4">
            <h1>Sign up</h1>
          </div>
        </div>
        <div className="d-flex flex-column ">
          <div>
            <span className="p text-secondary">Have an Account ?</span>
          </div>
          <div className="">
            <Link to={`/`} className="nav-link">
              <p className="text-cl-primary">Sign in</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-dark"
          >
            Enter your email address (Eg: cst2****1@std.uwu.ac.lk)
          </label>
          <input
            type="email"
            className={`form-control ${error.email != '' ? "is-invalid" : ""}`}
            id="exampleFormControlInput1"
            placeholder="enter email"
            name="email"
            onChange={handleInputChange}
          />
          <div class="invalid-feedback">
            {error.email}
          </div>
        </div>
      </div>

      <div className="mt-3 gap-3 d-flex justify-content-between align-items-center ">
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-dark"
          >
            First name
          </label>
          <input
            type="text"
            className={`form-control ${error.firstname != '' ? "is-invalid" : ""}`}
            id="exampleFormControlInput1"
            placeholder="first name"
            name="firstname"
            onChange={handleInputChange}
          />
          <div class="invalid-feedback">
            {error.firstname}
          </div>
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-dark"
          >
            Last name
          </label>
          <input
            type="text"
            className={`form-control ${error.lastname != '' ? "is-invalid" : ""}`}
            id="exampleFormControlInput1"
            placeholder="last name"
            name="lastname"
            onChange={handleInputChange}
          />
          <div class="invalid-feedback">
            {error.lastname}
          </div>
        </div>
      </div>

      <div className="mt-3 d-flex gap-3 justify-content-between align-items-center ">
        <div className="mb-3 w-50">
          <label
            for="exampleFormControlInput1"
            className="form-label text-dark"
          >
            Academic Year
          </label>
          <select
            className="form-select w-100"
            aria-label="Large select example"
            name="academicYear"
            onChange={handleInputChange}
          >
            <option value="" selected>select year</option>
            {academicYears.map(({ id, year }) => (
              <option key={id} value={id}>
                {year}
              </option>
            ))}
          </select>
          <div class="invalid-feedback">
            {error.academicYear}
          </div>
        </div>
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-dark"
          >
            Contact No
          </label>
          <input
            type="text"
            className={`form-control ${error.contactno != '' ? "is-invalid" : ""}`}
            id="exampleFormControlInput1"
            name="contactno"
            placeholder="contact no"
          />
          <div class="invalid-feedback">
            {error.contactno}
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-dark"
          >
            Enter your password
          </label>
          <input
            type="password"
            className={`form-control ${error.password != '' ? "is-invalid" : ""}`}
            id="exampleFormControlInput1"
            name="password"
            placeholder="enter password"
          />
          <div class="invalid-feedback">
            {error.password}
          </div>
        </div>
      </div>

      <div className="text-center text-danger">{error.other}</div>
      <div className="mt-5 w-100 mb-3">
        <CommonButton
          load={loading}
          text={"Sign Up"}
          onClick={() => signUP()}
        />
      </div>
    </AuthLayout>
  );
};

export default SignUp;
