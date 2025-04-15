import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PetSitters from "./pages/PetSitters";
import PetOwners from "./pages/PetOwners";
import RoleSelection from "./pages/RoleSelection";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/pet-sitters" exact element={<PetSitters />} />
        <Route path="/pet-owners" exact element={<PetOwners />} />
        <Route path="/role-selection" exact element={<RoleSelection />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
