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

          <Route path='/AdminNavigation' element={<AdminNavigation />} >
              <Route path="/AdminNavigation" element={<AdminDashboard />} />
              <Route path='AdminUserpage' element={<AdminUserpage /> } /> 
              <Route path="Createuser" element={<Createuser />} />
          </Route>

          <Route path="/AdminSignup" element={<AdminSignup />} />
          <Route path="/Updateuser/:user_id" element={<Updateuser />} />

          <Route path="Userlandpage" element={<Userlandpage />} >
          <Route path="Clearance" element={<Clearance />} />
          <Route path="ApplyForLease" element={<ApplyForLease />} />
          <Route path="Profile" element={<Profile />} />
          </Route>
          
        </Routes>
        
        
      </Router>
     
     </div>
   );
 }

export default App;
