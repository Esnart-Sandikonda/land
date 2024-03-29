import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Adminvalidation from "./AdminSignupValidation";
import axios from "axios";

function AdminSignup(){
    const [values, setValues] = useState({
        name: '',
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
        if(errors.name === "" && errors.email === "" && errors.password === "") {
          axios.post('http://localhost:8081/adminlogin', values)
          .then(res => {
                navigate('/StaffPortal');
          })
          .catch(err => console.log(err)); 
        }
      }
    
    return(
        <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2>Sign-Up</h2>
          <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
              <label htmlFor="name"><strong>Name</strong></label>
              <input type="text" placeholder="Enter Name " name="name" 
              onChange={handleInput} className="form-control rounded-2"/>
              {errors.name && <span className="text-danger">{errors.name}</span>}
            </div>
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
            <button type='submit' className="btn btn-success w-100"><strong>Signup</strong></button>
            <p></p>
            <Link to="/StaffPortal" className="btn btn-default border w-100 bg-light text-decoration-none"> Login</Link>
          </form>
        </div>
    </div>
    )
}

export default AdminSignup;