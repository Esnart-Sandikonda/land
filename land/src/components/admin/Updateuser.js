import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Updateuser = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    nationality: "",
    area: "",
    district: "",
    gid: ""
  });

  const navigate = useNavigate();
  const { user_id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8081/users/${user_id}`)
      .then((res) => {
        const userData = res.data;
        setUser(userData);
      })
      .catch((err) => console.log(err));
  }, [user_id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .put(`http://localhost:8081/updateuser/${user_id}`, user)
      .then((res) => {
        navigate("/AdminNavigation/AdminUserpage");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex vh-50 justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={handleSubmit}>
          <h2>Update User</h2>
          <div className="mb-2">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Update username"
              className="form-control"
              value={user.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Update user email"
              className="form-control"
              value={user.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Update user password"
              className="form-control"
              value={user.password}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="nationality">Nationality</label>
            <input
              type="text"
              id="nationality"
              name="nationality"
              placeholder="Update user nationality"
              className="form-control"
              value={user.nationality}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="area">Area</label>
            <input
              type="text"
              id="area"
              name="area"
              placeholder="Update user area"
              className="form-control"
              value={user.area}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="district">District</label>
            <input
              type="text"
              id="district"
              name="district"
              placeholder="Update user district"
              className="form-control"
              value={user.district}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="gid">Gid</label>
            <input
              type="text"
              id="gid"
              name="gid"
              placeholder="Update Gid"
              className="form-control"
              value={user.gid}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-success">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Updateuser;
