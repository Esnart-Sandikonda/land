import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OwnerPortal = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation
    let validationErrors = {};
    if (!values.email) {
      validationErrors.email = "Email is required";
    }
    if (!values.password) {
      validationErrors.password = "Password is required";
    }

    if (Object.keys(validationErrors).length === 0) {
      axios
      .post("http://localhost:8081/userlogin", values)
      .then((res) => {
        if (res.status === 200) {
          navigate("/Userlanding");
        } else {
          alert("No record existed");
        }
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          alert("Invalid credentials");
        } else {
          console.log(err);
        }
      });
    
    }
  };                                                                      

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign-In</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              onChange={handleInput}
              className="form-control rounded-2"
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleInput}
              className="form-control rounded-2"
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button type="submit" className="btn btn-success w-100">
            <strong>Login</strong>
          </button>
        </form>
      </div>
    </div>
  );
};

export default OwnerPortal;
