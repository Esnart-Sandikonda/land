import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaList, FaTwitter, FaShare } from 'react-icons/fa';
import LeaseApplications from "./LeaseApplications";

const AdminDashboard = () => {
  const [adminCount, setAdminCount] = useState()
  const [employeeCount, setEmployeeCount] = useState()
  const [leaseApplicationsCount, setLeaseApplicationsCount] = useState()

  useEffect(() => {
    axios.get('http://localhost:8081/adminCount')
		.then(res => {
			setAdminCount(res.data[0].admin)
		}).catch(err => console.log(err));

    axios.get('http://localhost:8081/employeeCount')
		.then(res => {
			setEmployeeCount(res.data[0].employee)
		}).catch(err => console.log(err));

    axios.get('http://localhost:8081/leaseApplicationsCount')
		.then(res => {
			setLeaseApplicationsCount(res.data[0].leaseapplications)
		}).catch(err => console.log(err));

  } , [])
  return (
    <div>
      <div className='p-3 d-flex justify-content-around mt-3'>
        <div className='card px-3 pt-2 bg-primary pb-3 border shadow-sm w-25 '>
          <div className='text-center pb-1'>
            <h4>Admin</h4>
          </div>
          <hr />                                                            
          <div className=''>
            <h5>Total: {adminCount}</h5>
          </div>
        </div>
        
        <div className='card px-3 bg-primary pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4 >Registered Users</h4>
          </div>
          <hr />
          <div className=''>
            <h5>Total: {employeeCount}</h5>
          </div>
        </div>
        <div className='card px-3 bg-primary pt-2 pb-3 border shadow-sm w-25'>
          <div className='text-center pb-1'>
            <h4>LeaseApplications</h4>
          </div>
          <hr />
          <div className=''>
            <h5>Total: {leaseApplicationsCount}</h5>
          </div>
        </div>
      </div>

      {/* List of admin  */}
      <div className='mt-4 px-5 pt-3'>
        <h3>List of Land Officers</h3>
        <table className='table'>
          <thead>
            <tr>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Admin</td>
              <td>Admin</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AdminDashboard;
