import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import Adminvalidation from "./AdminLoginValidation"; 
import axios from "axios";

const StaffPortal = () =>{
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate();

  const [errors, setErrors] = useState({})
  const handleInput = (event) =>{
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
  }
  const handleSubmit = (event ) =>{
    event.preventDefault();
    setErrors(Adminvalidation(values));

    if( errors.email === "" && errors.password === "") {
      axios.post('http://localhost:8081/login', values)
      .then(res => {
            if (res.data === "success"){
              navigate('/AdminNavigation');
            } else{
              alert("No record existed");
            }
      })
      .catch(err => console.log(err)); 
    }
  }
  return(
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
    <div className='p-3 rounded w-25 border loginForm'>
          <h2>Sign-In</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email"><strong>Email</strong></label>
              <input type="text" placeholder="Enter Email " name="email"
              onChange={handleInput} className="form-control rounded-2"/>
              {errors.email && <span className="text-danger">{errors.email}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="password"><strong>Password</strong></label>
              <input type="password" placeholder="Enter Password " name="password"
              onChange={handleInput} className="form-control rounded-2"/>
               {errors.password && <span className="text-danger">{errors.password}</span>}
            </div>
            <button type='submit' className="btn btn-success w-100"><strong>Login</strong></button>
            <p>You are agreeing to our terms and policies</p>
           
          </form>
        </div>
    </div>
  )
}

export default StaffPortal;