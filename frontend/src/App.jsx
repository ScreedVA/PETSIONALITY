import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBarSelector from "./components/NavBarSelector";
import Home from "./pages/Home";
import PetSitters from "./pages/PetSitters";
import PetOwners from "./pages/PetOwners";
import RoleSelection from "./pages/RoleSelection";
import Contact from "./pages/Contact";
import RegisterSSO from "./pages/RegisterSSO";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import { NavbarProvider } from "./services/ContextService";

function App() {
  return (
    <NavbarProvider>
      <Router>
        <NavBarSelector />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/pet-sitters" exact element={<PetSitters />} />
          <Route path="/pet-owners" exact element={<PetOwners />} />
          <Route path="/role-selection" exact element={<RoleSelection />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/user-dashboard" exact element={<UserDashboard />} />

          {/* Auth */}
          <Route path="/register/sso" exact element={<RegisterSSO />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </Router>
    </NavbarProvider>
  );
}

export default App;
