import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PetSitters from "./pages/PetSitters";
import Navbar from "./components/Navbar";
import RoleSelection from "./pages/RoleSelection";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/pet-sitters" exact element={<PetSitters />} />
        <Route path="/role-selection" exact element={<RoleSelection />} />
      </Routes>
    </Router>
  );
}

export default App;
