import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const AdminUserpage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8081/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, []);

  const navigate = useNavigate();

  const handleDelete = (user_id) => {
    axios.delete(`http://localhost:8081/deleteuser/${user_id}`)
      .then(res => navigate('/AdminNavigation/AdminUserpage'))
      .catch(err => console.log(err));
  };

  return (
    <div>
      <div className="d-flex justify-content-center align-items-center bg-dark">
        <div className="bg-white rounded w-100 p-3">
          <h2 className="d-flex justify-content-center">Property Registry</h2>
          <Link to="/AdminNavigation/createuser" className="btn btn-success bg-primary">Register +</Link>
          <table className="table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Password</th>
                <th>Nationality</th>
                <th>Area</th>
                <th>District</th>
                <th>Gid</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={i}>
                  <td>{d.username}</td>
                  <td>{d.email}</td>
                  <td>{d.password}</td>
                  <td>{d.nationality}</td>
                  <td>{d.area}</td>
                  <td>{d.district}</td>
                  <td>{d.gid}</td>
                  <td>
                    <Link to={`/AdminNavigation/Updateuser/${d.user_id}`} className="btn btn-sm btn-primary">Update</Link>
                    <button onClick={() => handleDelete(d.user_id)} className="btn btn-sm btn-danger" >Delete</button>
                    <Link to={`/AdminNavigation/AdminViewUserLand/${d.user_id}`} className="btn btn-sm btn-primary">View</Link>
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
