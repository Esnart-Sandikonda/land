import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from "./Sidebar";

const AdminUserpage = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8081/users')
    .then( res => setData(res.data))
    .catch(err => console.log(err));
  }, []);

  const navigate = useNavigate()
const handleDelete = (user_id) =>{
    axios.delete('http://localhost:8081/deleteuser/' + user_id)
    .then( res => navigate('/AdminUserpage'))
    .catch(err => console.log(err));
}

  return (
    <div>
    <div className="d-flex justify-content-center align-items-center bg-dark">
      <div className="bg-white rounded w-100 p-3">
        <h2 className="d-flex justify-content-center">Users</h2>
        <Link to="/createuser" className="btn btn-success">Add +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Area</th>
              <th>District</th>
              <th>LandType</th>
              <th>Latitude</th>
              <th>Longitude</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, i) => (
              <tr>
                <td>{d.username}</td>
                <td>{d.email}</td>
                <td>{d.password}</td>
                <td>{d.area}</td>
                <td>{d.district}</td>
                <td>{d.land_type}</td>
                <td>{d.latitude}</td>
                <td>{d.longitude}</td>
                <td>
                  <Link to={`/Updateuser/${d.user_id}`} className="btn btn-sm btn-primary">Update</Link>
                  <button onClick={e => handleDelete(d.user_id)} className="btn btn-sm btn-danger" >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}

export default AdminUserpage;
