import React from 'react'
import './Profile.css'
import Userlandpage from './Userlandpage'

const Profile = () =>{
    return(
        <div>
        <Userlandpage Profile={<h1>User Profile</h1>} />
        {/* Additional content outside Userlandpage */}
        <p>This is the profile page.</p>
      </div>
        
    )
}

export default Profile;