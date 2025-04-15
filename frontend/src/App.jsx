import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PetSitters from "./pages/PetSitters";
import PetOwners from "./pages/PetOwners";
import RoleSelection from "./pages/RoleSelection";
import Contact from "./pages/Contact";
import Register1 from "./pages/Register1";
import Register2 from "./pages/Register2";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/pet-sitters" exact element={<PetSitters />} />
        <Route path="/pet-owners" exact element={<PetOwners />} />
        <Route path="/role-selection" exact element={<RoleSelection />} />
        <Route path="/register/sso" exact element={<Register1 />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/register" exact element={<Register2 />} />
      </Routes>
    </Router>
  );
}

export default App;
