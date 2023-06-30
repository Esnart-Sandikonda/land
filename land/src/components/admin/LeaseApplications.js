import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaList, FaTwitter, FaShare } from 'react-icons/fa';

const LeaseApplications = () => {
  const [data, setData] = useState([]);
  const [userCount, setUserCount] = useState(0); // State for storing the user count

  useEffect(() => {
    fetchData();
    
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8081/gettingleaseform');
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  //send notification to user after the lease application has been accepted
  const handleAccept = async (user_id) => {
    try {
      await axios.put(`http://localhost:8081/acceptLeaseApplication/${user_id}`);
      // Send notification to the user
      await axios.post(`http://localhost:8081/sendNotification/${user_id}`, {
        message: "Your lease application has been accepted!"
      });
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };


  const handleDelete = async (user_id) => {
    try {
      await axios.delete(`http://localhost:8081/deleteUser/${user_id}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

 
  return (
    <div>
          <h2 className="d-flex justify-content-center">Lease Applications</h2>

          <table className="table">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Occupation</th>
                <th>Area</th>
                <th>District</th>
                <th>landType</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={i}>
                  <td>{d.username}</td>
                  <td>{d.email}</td>
                  <td>{d.occupation}</td>
                  <td>{d.area}</td>
                  <td>{d.district}</td>
                  <td>{d.landtype}</td>
                  <td>
                  <button className="btn btn-sm btn-primary" onClick={() => handleAccept(d.user_id)}> Accept </button>
                    <button className="btn btn-sm btn-danger" onClick={() => handleDelete(d.user_id)}>Deny</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    </div>
  );
}

export default LeaseApplications;
