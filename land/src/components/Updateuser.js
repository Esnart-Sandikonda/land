import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Updateuser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [area, setArea] = useState('');
  const [district, setDistrict] = useState('');
  const [landType, setLandType] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const navigate = useNavigate();
  const {user_id} = useParams();
  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.put('http://localhost:8081/updateuser/'+ user_id, { username, email, password, area, district, landType, latitude, longitude})
    .then(res =>{
            navigate('/AdminUserpage');
    }) .catch(err => console.log(err));
}
        
          return (
            <div className="d-flex vh-50 bg-primary justify-content-center align-items-center">
              <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                  <h2>Update User</h2>
                  <div className="mb-2">
                    <label htmlFor="">Username</label>
                    <input
                      type="text"
                      placeholder="Update username"
                      className="form-control"
                      value={username}
                      onChange={e => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="">Email</label>
                    <input
                      type="text"
                      placeholder="Update  user email"
                      className="form-control"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="">Password</label>
                    <input
                      type="password"
                      placeholder="Update  user password"
                      className="form-control"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="">Area</label>
                    <input
                      type="text"
                      placeholder="Update  user Area"
                      className="form-control"
                      value={area}
                      onChange={e => setArea(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="">District</label>
                    <input
                      type="text"
                      placeholder="Update  user district"
                      className="form-control"
                      value={district}
                      onChange={e => setDistrict(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="">Land Type</label>
                    <input
                      type="text"
                      placeholder="Update land type"
                      className="form-control"
                      value={landType}
                      onChange={e => setLandType(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="">Latitude</label>
                    <input
                      type="text"
                      placeholder="Update Latitude"
                      className="form-control"
                      value={latitude}
                      onChange={e => setLatitude(e.target.value)}
                    />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="">Longitude</label>
                    <input
                      type="text"
                      placeholder="Update  Longitude"
                      className="form-control"
                      value={longitude}
                      onChange={e => setLongitude(e.target.value)}
                    />
                  </div>
                  <button className="btn btn-success">Update</button>
                </form>
              </div>
            </div>
          );
        }
        
        export default Updateuser;
        
