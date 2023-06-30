import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ApplyForLease = () => {
  const [holdername, setHoldername] = useState('');
  const [datebirth, setDatebirth] = useState('');
  const [email, setEmail] = useState('');
  const [benchmark, setBenchmark] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [occupation, setOccupation] = useState('');
  const [area, setArea] = useState('');
  const [district, setDistrict] = useState('');
  const [landtype, setLandtype] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if any required fields are empty
    if (!holdername || !datebirth || !email || !benchmark || !phonenumber || !occupation || !area || !district || !landtype) {
      alert("Please fill in all required fields.");
      return;
    }

    axios.post('http://localhost:8081/leaseapplication', {
      holdername,
      datebirth,
      email,
      benchmark,
      phonenumber,
      occupation,
      area,
      district,
      landtype
    })
      .then(res => {
        navigate('/AdminNavigation');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="d-flex vh-50 justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Apply For Lease</h2>
          <div className="mb-2">
            <label htmlFor="">Holdername</label>
            <input
              type="text"
              placeholder="Enter username"
              className="form-control"
              value={holdername}
              onChange={e => setHoldername(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Date OF Birth</label>
            <input
              type="text"
              placeholder="Enter username"
              className="form-control"
              value={datebirth}
              onChange={e => setDatebirth(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Email</label>
            <input
              type="text"
              placeholder="Enter user email"
              className="form-control"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Benchmark</label>
            <input
              type="text"
              placeholder="Enter username"
              className="form-control"
              value={benchmark}
              onChange={e => setBenchmark(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Phonenumber</label>
            <input
              type="text"
              placeholder="Enter user email"
              className="form-control"
              value={phonenumber}
              onChange={e => setPhonenumber(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Occupation</label>
            <input
              type="text"
              placeholder="Enter user Area"
              className="form-control"
              value={occupation}
              onChange={e => setOccupation(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Area</label>
            <input
              type="text"
              placeholder="Enter user Area"
              className="form-control"
              value={area}
              onChange={e => setArea(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">District</label>
            <input
              type="text"
              placeholder="Enter user district"
              className="form-control"
              value={district}
              onChange={e => setDistrict(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">landType</label>
            <input
              type="text"
              placeholder="Enter land type"
              className="form-control"
              value={landtype}
              onChange={e => setLandtype(e.target.value)}
            />
          </div>

          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ApplyForLease;
