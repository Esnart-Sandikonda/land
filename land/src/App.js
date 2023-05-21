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
        </Routes>
        
        
      </Router>
     
     </div>
   );
 }

export default App;
