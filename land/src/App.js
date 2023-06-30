import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/landing/Home'
import OwnerPortal from "./components/landing/OwnerPortal";
import StaffPortal from "./components/landing/StaffPortal"
import Services from "./components/landing/Services"
import About from "./components/landing/About"
import AdminNavigation from "./components/admin/AdminNavigation";
import AdminUserpage from "./components/admin/AdminUserpage";
import AdminSignup from "./components/landing/AdminSignup";
import Createuser from "./components/admin/Createuser";
import Updateuser from "./components/admin/Updateuser";
import Userlandpage from "./components/user/Userlandpage";
import Clearance from "./components/user/Clearance"
import AdminDashboard from "./components/admin/AdminDashboard"
import ApplyForLease from "./components/user/ApplyForLease";
import Profile from "./components/user/Profile";
import AdminViewUserLand from "./components/admin/AdminViewUserLand";
import AdminProfileview from "./components/admin/AdminProfileview";
import Viewland from "./components/admin/Viewland";
import UserHome from "./components/user/UserHome";
import LeaseApplications from "./components/admin/LeaseApplications";
import Userviewland from "./components/user/Userviewland";
import LandAssessmentPage from "./components/landing/LandAssessmentPage"
import Sketcher from "./components/landing/Sketcher"


 function App() {
   return (
     <div>
        
      <Router>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OwnerPortal" element={<OwnerPortal />} />
          <Route path="/StaffPortal" element={<StaffPortal />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/About" element={<About />} />
          <Route path="/land-assessment" element={<LandAssessmentPage/>} />
          <Route path="/sketch-map-planning" element={<Sketcher />} />

          <Route path='/AdminNavigation' element={<AdminNavigation />} >
              <Route path="/AdminNavigation" element={<AdminDashboard />} />
              <Route path='AdminUserpage' element={<AdminUserpage /> } /> 
              <Route path="Createuser" element={<Createuser />} />
              <Route path="Updateuser/:user_id" element={<Updateuser />} />
              <Route path="AdminProfileview" element={<AdminProfileview />} />
              <Route path="Viewland" element={<Viewland />} />
              <Route path="AdminViewUserLand/:user_id" element={<AdminViewUserLand />} />
              <Route path="LeaseApplications" element={<LeaseApplications/>} />
               
          </Route>

          <Route path="/AdminSignup" element={<AdminSignup />} />
          
          <Route path="Userlandpage" element={<Userlandpage />} >
          <Route path="/Userlandpage" element={<UserHome/>}/>
          <Route path="Clearance" element={<Clearance />} />
          <Route path="ApplyForLease" element={<ApplyForLease />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Userviewland" element={<Userviewland/>} />
          
          </Route>
        </Routes>
        
        
      </Router>
     
     </div>
   );
 }

export default App;
