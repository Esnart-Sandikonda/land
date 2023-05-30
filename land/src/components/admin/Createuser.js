import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Createuser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [area, setArea] = useState('');
  const [district, setDistrict] = useState('');
  const [landType, setLandType] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/createuser', { username, email, password, area, district, landType, latitude, longitude})
    .then(res =>{
            navigate('/AdminUserpage');
    }) .catch(err => console.log(err));
}
        
          return (
            <div className="d-flex vh-50 justify-content-center align-items-center">
              <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                  <h2>Add User</h2>
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
                    <label htmlFor="">Land Type</label>
                    <input
                      type="text"
                      placeholder="Enter land type"
                      className="form-control"
                      value={landType}
                      onChange={e => setLandType(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="">Latitude</label>
                    <input
                      type="text"
                      placeholder="Enter Latitude"
                      className="form-control"
                      value={latitude}
                      onChange={e => setLatitude(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="">Longitude</label>
                    <input
                      type="text"
                      placeholder="Enter Longitude"
                      className="form-control"
                      value={longitude}
                      onChange={e => setLongitude(e.target.value)}
                    />
                  </div>
                  <button className="btn btn-success">Submit</button>
                </form>
              </div>
            </div>
          );
        }
        
        export default Createuser;
        
