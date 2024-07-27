import React, { useEffect, useState } from "react";
import AuthLayout from "../../../components/layouts/authLayout/authLayout";
import CommonButton from "../../../components/common/commonButton/commonButton";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import back from "../../../assets/icons/Back.png";
import { verifyOTP } from "../../../redux/actions/user";
import { useDispatch } from "react-redux";

const VerifyCode = () => {
  const [param, setParam] = useState();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let { type } = useParams();
  const location = useLocation();
  const email = location.state?.email;

  const [formData, setFormData] = useState({
    otp: null,
    email: email,
    type: "REG",
  });

  const [error, setError] = useState({
    otp: false,
    other: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setError((prevError) => ({ ...prevError, [name]: "" }));
  };

  useEffect(() => {
    if (!(type == "forgot" || type == "signup")) {
      navigate("/*");
    } else if (type == "forgot") {
      setParam("/forgot-password/change-password");
    } else if (type == "signup") {
      setParam("/dashboard");
    }
  }, []);

  function verifyCode() {
    setError({
      otp: false,
      other: "",
    });

    if (!formData.otp) {
      setError({
        ...error,
        otp: !formData.otp,
      });
      return;
    }
    setLoading(true);
    dispatch(
      verifyOTP(formData, (res) => {
        if (res.status == 200) {
          setLoading(false);
          navigate("/dashboard");
        } else {
          setLoading(false);
          setError({
            ...error,
            other: "Invalid OTP",
          });
        }
      })
    );
  }

  return (
    <AuthLayout type={"VERIFY"}>
      <div className="d-flex w-100 justify-content-between align-items-start">
        <div className="d-flex flex-column ">
          <div className="">
            <Link
              to={type == "signup" ? "/sign-up" : "/forgot-password"}
              className="nav-link d-flex align-items-center text-center justify-content-center "
            >
              <div>
                <img src={back} className="img-fluid" style={{ width: 22 }} />
              </div>
              <div className="h6 m-0"></div>
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <div className="h5 fw-bold">Verify code</div>
        <div className="h6 text-secondary">
          An authentication code has been sent to your email.
        </div>
      </div>
      <div className="mt-5">
        <div className="mb-3">
          <label
            for="exampleFormControlInput1"
            className="form-label text-dark"
          >
            Enter your code
          </label>
          <input
            type="text"
            className={`form-control ${error.otp !== true ? "is-invalid" : ""}`}
            id="exampleFormControlInput1"
            placeholder="enter code"
            name="otp"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="text-center text-danger">{error.other}</div>
      <div className="mt-3">
        <span>
          Didn’t receive a code? <span className="text-cl-primary">Resend</span>
        </span>
      </div>
      <div className="mt-5 w-100 mb-3">
        <CommonButton
          load={loading}
          text={"Verify"}
          onClick={() => verifyCode()}
        />
      </div>
    </AuthLayout>
  );
};

export default VerifyCode;
