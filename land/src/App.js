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
import Hhhome from './components/user/Hhhome'
import Profile from "./components/user/Profile";
import ChengeOwnership from "./components/user/ChengeOwnership"
import Clearance from "./components/user/Clearance"
import Estates from "./components/user/Estates";
import Geoinformation from "./components/user/Geoinformation";
import AdminDashboard from "./components/admin/AdminDashboard"

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
          
          <Route path="/Userlandpage" element={<Userlandpage />} />
          <Route path="/Hhhome" element={<Hhhome />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/ChengeOwnership" element={<ChengeOwnership />} />
          <Route path="/Clearance" element={<Clearance />} />
          <Route path="/Estates" element={<Estates />} />
          <Route path="/Geoinformation" element={<Geoinformation />} />
        </Routes>
        
        
      </Router>
     
     </div>
   );
 }

export default App;
