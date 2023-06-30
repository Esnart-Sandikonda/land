import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function AdminProfileview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8081/get/'+id)
      .then((res) => setEmployee(res.data.Result[0]))
      .catch((err) => console.log(err));
  }, [id]); // Empty dependency array to run the effect only once

  return (
    <div>
      <h3 className="card bg-warning mt-4">My Profile</h3>
      <div className="card d-flex justify-content-center flex-column align-items-center mt-3">
        <p>
          Welcome to My Profile section of the Land Officer. This section displays all your details. If you feel that
          some of the information displayed here is not correct and For any technical challenges please contact the ICT
          Centre through the support system.
        </p>
        <div className="d-flex align-items-center flex-column mt-5">
          <h3>Email: {employee.email}</h3>
          <h3>Password: {employee.password}</h3>
        </div>
      </div>
    </div>
  );
}

export default AdminProfileview;
