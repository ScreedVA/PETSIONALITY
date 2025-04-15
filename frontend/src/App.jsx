import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PetSitters from "./pages/PetSitters";
import Navbar from "./components/Navbar";
import RoleSelection from "./pages/RoleSelection";
import Register1 from "./pages/Register1";
import Register2 from "./pages/Register2";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/pet-sitters" exact element={<PetSitters />} />
        <Route path="/role-selection" exact element={<RoleSelection />} />
        <Route path="/register/sso" exact element={<Register1 />} />
        <Route path="/register" exact element={<Register2 />} />
      </Routes>
    </Router>
  );
}

export default App;
