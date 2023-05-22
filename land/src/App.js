import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import OwnerPortal from "./components/OwnerPortal";
import StaffPortal from "./components/StaffPortal"
import Services from "./components/Services"
import About from "./components/About"
import AdminNavigation from "./components/AdminNavigation";
import AdminUserpage from "./components/AdminUserpage";
import AdminSignup from "./components/AdminSignup";
import Createuser from "./components/Createuser";
import Updateuser from "./components/Updateuser";
import Userlanding from "./components/Userlanding";
import Userlandpage from "./components/Userlandpage";
import Hhhome from './components/Hhhome'
import Profile from "./components/Profile";
import ChengeOwnership from "./components/ChengeOwnership"
import Clearance from "./components/Clearance"
import Estates from "./components/Estates";
import Geoinformation from "./components/Geoinformation";

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
          <Route path="/AdminNavigation" element={<AdminNavigation />} />
          <Route path="/AdminSignup" element={<AdminSignup />} />
          <Route path="/AdminUserpage" element={<AdminUserpage />} />
          <Route path="/Createuser" element={<Createuser />} />
          <Route path="/Updateuser/:user_id" element={<Updateuser />} />
          <Route path="/Userlanding" element={<Userlanding />} />
          
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
