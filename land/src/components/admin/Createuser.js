import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Createuser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('');
  const [area, setArea] = useState('');
  const [district, setDistrict] = useState('');
  const [gid, setGid] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if any of the fields are empty
    if (!username || !email || !password || !nationality || !area || !district || !gid) {
      console.log("Please fill in all fields");
      return;
    }

    axios.post('http://localhost:8081/property', { username, email, password, nationality, area, district, gid })
      .then(res => {
        navigate('/adminNavigation/AdminUserpage');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="d-flex vh-50 justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>property Registry</h2>
          <div className="mb-2">
            <label htmlFor="">Username</label>
            <input
              type="text"
              placeholder="Enter username"
              className="form-control"
              value={username}
              onChange={e => setUsername(e.target.value)}
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
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Enter user password"
              className="form-control"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Nationality</label>
            <input
              type="text"
              placeholder="Enter Nationality"
              className="form-control"
              value={nationality}
              onChange={e => setNationality(e.target.value)}
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
            <label htmlFor="">Gid</label>
            <input
              type="text"
              placeholder="Enter Gid"
              className="form-control"
              value={gid}
              onChange={e => setGid(e.target.value)}
            />
          </div>

          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Createuser;