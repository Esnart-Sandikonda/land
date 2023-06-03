import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8081/gettingleaseform')
    .then( res => setData(res.data))
    .catch(err => console.log(err));
  }, []);

  return (
    <div>
    <div className="d-flex justify-content-center align-items-center bg-dark">
      <div className="bg-white rounded w-100 p-3">
        <h2 className="d-flex justify-content-center">Lease Applications</h2>
        
        <table className="table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Password</th>
              <th>Area</th>
              <th>District</th>
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
                <td>
                  <Link to={`/Updateuser/${d.user_id}`} className="btn btn-sm btn-primary">Update</Link>
                  <button className="btn btn-sm btn-danger" >Delete</button>
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

export default AdminDashboard;
